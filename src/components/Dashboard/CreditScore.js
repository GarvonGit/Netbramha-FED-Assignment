import React from 'react';
import { Card } from 'react-bootstrap';
import { useScore } from '../../contexts/ScoreContext';
import '../../styles/CreditScore.css';

const CreditScore = () => {
  const { scoreData, generateNewScore, getScorePercentage } = useScore();
  
  // Calculate the angle for the pointer (semi-circle = 180 degrees)
  const scorePercentage = getScorePercentage(scoreData.currentScore);
  const pointerAngle = scorePercentage * 180 - 90; // -90 to start from left

  const handleRefresh = () => {
    // Generate new score using context function
    generateNewScore();
  };
  
  return (
    <Card className="credit-score-card h-100">
      <Card.Body className="text-center p-0">
        <h3 className="greeting-text my-3">Hello, {scoreData.userName}</h3>
        
        <div className="score-gauge-container">
          {/* Semi-circle gauge */}
          <div className="gauge-wrapper">
            <svg className="gauge-svg" viewBox="0 0 200 120" width="320" height="180">
              {/* Single semi-circle with border */}
              <path
                d="M 30 100 A 70 70 0 0 1 170 100"
                fill="none"
                stroke="#e9ecef"
                strokeWidth="12"
              />
              
              {/* Colored segments using stroke-dasharray to divide the semi-circle with white gaps */}
              {/* Red segment (300-500) - 36% of the arc */}
              <path
                d="M 30 100 A 70 70 0 0 1 170 100"
                fill="none"
                stroke="#dc3545"
                strokeWidth="12"
                strokeLinecap="butt"
                strokeDasharray="78.2 1 221.8"
                strokeDashoffset="0"
              />
              
              {/* Orange segment (500-600) - 20% of the arc */}
              <path
                d="M 30 100 A 70 70 0 0 1 170 100"
                fill="none"
                stroke="#fd7e14"
                strokeWidth="12"
                strokeLinecap="butt"
                strokeDasharray="43 1 256"
                strokeDashoffset="-80.2"
              />
              
              {/* Yellow segment (600-700) - 20% of the arc */}
              <path
                d="M 30 100 A 70 70 0 0 1 170 100"
                fill="none"
                stroke="#ffc107"
                strokeWidth="12"
                strokeLinecap="butt"
                strokeDasharray="43 1 256"
                strokeDashoffset="-124.2"
              />
              
              {/* Light green segment (700-800) - 16% of the arc */}
              <path
                d="M 30 100 A 70 70 0 0 1 170 100"
                fill="none"
                stroke="#98d982"
                strokeWidth="12"
                strokeLinecap="butt"
                strokeDasharray="34.2 1 264.8"
                strokeDashoffset="-168.2"
              />
              
              {/* Dark green segment (800-900) - 8% of the arc */}
              <path
                d="M 30 100 A 70 70 0 0 1 170 100"
                fill="none"
                stroke="#28a745"
                strokeWidth="12"
                strokeLinecap="butt"
                strokeDasharray="16.6 1 282.4"
                strokeDashoffset="-203.4"
              />
              
              {/* White gap segments */}
              <path
                d="M 30 100 A 70 70 0 0 1 170 100"
                fill="none"
                stroke="#ffffff"
                strokeWidth="12"
                strokeLinecap="butt"
                strokeDasharray="1 78.2 1 43 1 43 1 34.2 1 16.6 1 221.8"
                strokeDashoffset="0"
              />
              
              {/* Fixed semicircle base (non-rotating) */}
              <path
                d="M 92 100 A 8 8 0 0 1 108 100"
                fill="#E6E6E6"
                stroke="none"
              />
              
              {/* Small center dot */}
              <circle cx="100" cy="100" r="1" fill="#333" />
              
              {/* Tapered needle (broader at bottom, thinner at top) */}
              <g transform={`translate(100, 100) rotate(${pointerAngle})`}>
                <polygon
                  points="0,0 -2,0 0,-60 2,0"
                  fill="#333"
                  stroke="none"
                />
              </g>
            </svg>
            
            {/* Score labels */}
            <div className="gauge-labels">
              <span className="gauge-label-left">{scoreData.minScore}</span>
              <span className="gauge-label-right">{scoreData.maxScore}</span>
            </div>
          </div>
          
          {/* Score display */}
          <div className="score-display">
            <h1 className="score-number">{scoreData.currentScore}</h1>
            <p className="score-description">
              is your <span className="nb-text">NB</span> Score as of {scoreData.lastUpdated}
            </p>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="score-actions mt-4">
          <button className="btn btn-link score-analysis-btn">
            Score Analysis
          </button>
          <button className="btn btn-warning refresh-btn" onClick={handleRefresh}>
            Refresh Now
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CreditScore;
