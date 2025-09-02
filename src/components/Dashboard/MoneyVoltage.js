import React from 'react';
import { Card } from 'react-bootstrap';
import { useScore } from '../../contexts/ScoreContext';
import '../../styles/MoneyVoltage.css';

const MoneyVoltage = () => {
  const { scoreData, calculateScorePosition } = useScore();
  
  const segments = [
    { percentage: '15%', color: '#dc3545', range: '300-722', min: 300, max: 722 },
    { percentage: '22%', color: '#fd7e14', range: '723-747', min: 723, max: 747 },
    { percentage: '26%', color: '#ffc107', range: '748-764', min: 748, max: 764 },
    { percentage: '18%', color: '#98d982', range: '765-777', min: 765, max: 777 },
    { percentage: '20%', color: '#28a745', range: '778-900', min: 778, max: 900 }
  ];
  
  const scorePosition = calculateScorePosition(scoreData.currentScore);

  return (
    <div className="money-voltage-wrapper">
      {/* Header outside card */}
      <div className="voltage-header">
        <div className="d-flex align-items-center gap-2">
          <h6 className="mb-0 graph-titles">WHERE YOU STAND</h6>
          <div className="info-icon">i</div>
        </div>
      </div>

      {/* Card content */}
      <Card className="money-voltage-card">
        <Card.Body className="voltage-body">
          {/* Main Voltage Bar */}
          <div className="voltage-bar-wrapper p-5">
          <div>
            <div className="voltage-bar-container">
              {segments.map((segment, index) => (
                <div
                  key={index}
                  className="voltage-segment"
                  style={{
                    backgroundColor: segment.color,
                    width: segment.percentage
                  }}
                >
                  <span className="segment-percentage">{segment.percentage}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Score Display with Dynamic Position */}
          <div className="current-score" style={{ left: `${scorePosition}%` }}>
            <div className="score-pointer">
              <div className="pointer-triangle"></div>
            </div>
            <div className="score-label">Your NB Score</div>
            <div className="score-number">{scoreData.currentScore}</div>
          </div>

          {/* Separating Line */}
          <div className="separating-line"></div>

          {/* Score Range Legend */}
          <div className="score-legend">
            <div className="legend-label mb-0">Score Range</div>
            <div className="legend-items">
              {segments.map((segment, index) => (
                <div key={index} className="legend-item">
                  <div 
                    className="legend-color-box"
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  <span className="legend-range">{segment.range}</span>
                </div>
              ))}
            </div>
          </div>
</div>
 {/* Bottom Text */}
 <div className="voltage-description">
            <p className="main-description">
              Your NB Score lies in the top 70% in All Of India.
            </p>
            <p className="sub-description">
              Based on the NB Data
            </p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MoneyVoltage;
