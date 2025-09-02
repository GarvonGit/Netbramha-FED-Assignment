import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { FaArrowUp, FaArrowDown, FaArrowRight } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useScore } from '../../contexts/ScoreContext';
import '../../styles/NBScoreHistory.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const NBScoreHistory = () => {
  const { scoreData } = useScore();
  const [selectedPoint, setSelectedPoint] = useState(7); // Default to August (current month)
  const [showTooltip, setShowTooltip] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const data = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [
      {
        data: scoreData.chartData,
        borderColor: '#004364',
        backgroundColor: 'rgba(0, 67, 100, 0.1)',
        tension: 0,
        pointBackgroundColor: (ctx) => {
          const index = ctx.dataIndex;
          return selectedPoint === index ? '#FCD800' : '#ffffff';
        },
        pointBorderColor: (ctx) => {
          const index = ctx.dataIndex;
          return '#004364';
        },
        pointBorderWidth: (ctx) => {
          const index = ctx.dataIndex;
          return 3;
        },
        pointRadius: (ctx) => {
          const index = ctx.dataIndex;
          return ctx.parsed.y !== null ? (selectedPoint === index ? 8 : 7) : 0;
        },
        pointHoverRadius: 10,
        showLine: true,
        spanGaps: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      intersect: false,
      mode: 'point',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // We'll use custom tooltips
      },
    },
    onHover: (event, elements) => {
      if (elements.length > 0) {
        const element = elements[0];
        setShowTooltip(element.index);
      } else {
        setShowTooltip(null);
      }
    },
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const element = elements[0];
        setSelectedPoint(element.index);
      } else {
        setSelectedPoint(null);
      }
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: '#E5E5E5',
          drawBorder: false,
        },
        ticks: {
          color: function(context) {
            const index = context.index;
            const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            // Starting and ending points (JAN and DEC)
            if (index === 0 || index === labels.length - 1) {
              return '#595959';
            }
            // Other indexes
            return '#bfbfbf';
          },
          font: {
            family: 'Roboto',
            size: 12,
            weight: '700',
            style: 'normal',
          },
          lineHeight: 16,
          letterSpacing: '1%',
          textAlign: 'right',
          verticalAlign: 'middle',
          callback: function(value, index) {
            const labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            return labels[index];
          }
        },
      },
      y: {
        min: scoreData.minScore,
        max: scoreData.maxScore,
        grid: {
          display: true,
          color: '#E5E5E5',
          drawBorder: false,
        },
        ticks: {
          color: function(context) {
            const value = context.value;
            // Starting and ending points (min and max scores)
            if (value === scoreData.minScore || value === scoreData.maxScore) {
              return '#595959';
            }
            // Other indexes
            return '#bfbfbf';
          },
          font: {
            family: 'Roboto',
            size: 12,
            weight: '700',
            style: 'normal',
          },
          lineHeight: 16,
          letterSpacing: '1%',
          textAlign: 'right',
          verticalAlign: 'middle',
          stepSize: 100,
          callback: function(value) {
            return value;
          }
        },
      },
    },
  };

  // Generate dynamic history data based on current score and historical data
  const generateHistoryData = () => {
    const currentDate = new Date();
    const historyData = [];
    
    // Get the most recent historical entries and create a timeline
    const recentEntries = scoreData.historicalData
      .sort((a, b) => new Date(b.date.split('/').reverse().join('-')) - new Date(a.date.split('/').reverse().join('-')))
      .slice(0, 4);
    
    recentEntries.forEach((entry, index) => {
      historyData.push({
        date: entry.date,
        score: entry.score,
        change: entry.change
      });
    });
    
    // Add a "No History" entry if we have less than 5 entries
    if (historyData.length < 5) {
      historyData.push({ date: '09/08/2022', score: 'N/H', change: null });
    }
    
    return historyData;
  };
  
  const historyData = generateHistoryData();

  const handlePointClick = (pointData) => {
    setSelectedPoint(pointData.index);
  };

  // Handle scroll events for dynamic scrollbar
  const handleScroll = (e) => {
    setIsScrolling(true);
    clearTimeout(handleScroll.timeout);
    handleScroll.timeout = setTimeout(() => {
      setIsScrolling(false);
    }, 1000); // Hide scrollbar after 1 second of no scrolling
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      if (handleScroll.timeout) {
        clearTimeout(handleScroll.timeout);
      }
    };
  }, []);

  return (
    <div className="nb-score-history-wrapper">
      {/* Header outside card */}
      <div className="nb-score-header">
        <div className="d-flex align-items-center gap-2">
          <h6 className="mb-0 graph-titles">NB SCORE HISTORY</h6>
          <div className="info-icon">i</div>
        </div>
      </div>

      {/* Card content */}
      <Card className="nb-score-history-card">
        <Card.Body className="nb-score-body">
          <p className="score-description">Trended view of the changes in your NB Score with every refresh.</p>
          
          <div className="row">
            <div className="col-md-8">
              <div className="chart-container">
                <Line key="nb-score-history-chart" data={data} options={options} />
                
                {/* Custom Interactive Tooltips */}
                {scoreData.historicalData.map((point, idx) => {
                  const isVisible = showTooltip === point.index || selectedPoint === point.index;
                  const isSelected = selectedPoint === point.index;
                  
                  return (
                    <div
                      key={idx}
                      className={`score-tooltip ${isVisible ? 'visible' : ''} ${isSelected ? 'selected' : ''}`}
                      style={{
                        left: `${(point.index / 11) * 100}%`,
                        top: `${100 - ((point.score - scoreData.minScore) / (scoreData.maxScore - scoreData.minScore)) * 100}%`
                      }}
                      onClick={() => handlePointClick(point)}
                    >
                      <div className="tooltip-content">
                        <div className="tooltip-score-section">
                          {point.score}
                        </div>
                        <div className="tooltip-symbol-section">
                          {isSelected ? '▶' : '+'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="history-sidebar">
                <div className="history-header">
                  <h6 className="history-month">August 2022</h6>
                  <div className="header-line"></div>
                </div>
                
                <div 
                  className={`history-list ${isScrolling ? 'scrolling' : ''}`}
                  onScroll={handleScroll}
                >
                  {historyData.map((item, index) => (
                    <div 
                      key={index} 
                      className="history-item"
                    >
                      <div className="history-icon">
                        {item.change === 'up' && (
                          <FaArrowUp className="arrow-icon up" />
                        )}
                        {item.change === 'down' && (
                          <FaArrowDown className="arrow-icon down" />
                        )}
                        {item.change === 'right' && (
                          <FaArrowRight className="arrow-icon right" />
                        )}
                        {!item.change && (
                          <div className="no-history">N/H</div>
                        )}
                      </div>
                      
                      <div className="history-content">
                        <div className="history-score">{item.score}</div>
                        <div className="history-date">{item.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NBScoreHistory;
