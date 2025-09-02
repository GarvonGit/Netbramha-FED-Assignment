// src/components/Cards/InfoCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaFileAlt, FaDownload, FaEye, FaCalendarAlt, FaChartLine, FaClock, FaChevronRight } from 'react-icons/fa';
import '../../styles/InfoCard.css';

const InfoCard = () => {
  return (
    <div className="info-cards-container">
      {/* NB Report Card */}
      <Card className="mb-3 nb-report-card">
        <Card.Body className="p-4">
          <div className="row align-items-center h-100">
            <div className="col-8 d-flex flex-column justify-content-center">
              <h6 className="mb-2 report-title">NB REPORT</h6>
              <p className="report-subhead mb-3">
                Get your personalized NB Report to plan your financial future.
              </p>
              <div className="d-flex flex-column gap-2">
                <div className="d-flex align-items-center report-link">
                  <FaEye className="me-2 report-icon-fa" />
                  <span className="report-point">View Your NB Report</span>
                  <FaChevronRight className="ms-2 report-arrow" />
                </div>
                <div className="d-flex align-items-center report-link">
                  <FaDownload className="me-2 report-icon-fa" />
                  <span className="report-point">Download Your NB Report With Summary</span>
                  <FaChevronRight className="ms-2 report-arrow" />
                </div>
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-start">
              <div className="report-icon">
                <img 
                  src="/assets/info-icon-report.jpg" 
                  alt="NB Report Icon" 
                  className="report-icon-image"
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Subscription Card */}
      <Card className="subscription-card">
        <Card.Body className="p-4">
          <div className="row align-items-center h-100">
            <div className="col-7 d-flex flex-column justify-content-center">
              <p className="mb-0 subscription-card-text">
                You currently have an active subscription. You will be able to access Free Annual NB Score & Report after the subscription period expires.
              </p>
            </div>
            <div className="col-5 d-flex justify-content-center align-items-start">
              <div className="subscription-icon">
                <img 
                  src="/assets/info-icon-score.jpg" 
                  alt="Subscription Icon" 
                  className="subscription-icon-image"
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default InfoCard;
