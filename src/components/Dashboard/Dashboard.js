import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaExclamationTriangle, FaSearch } from 'react-icons/fa';
import CreditScore from './CreditScore';
import AccountsOverview from './AccountsOverview';
import NBScoreHistory from './NBScoreHistory';
import MoneyVoltage from './MoneyVoltage';
import InfoCard from '../Cards/InfoCard';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  const [disputesCount, setDisputesCount] = useState(12);
  const [enquiriesCount, setEnquiriesCount] = useState(5);

  const handleReadMore = () => {
    alert('Learn more about credit reporting and related policies. This would typically open a modal or navigate to a detailed page.');
  };

  return (
    <Container fluid className="dashboard-content">
      <Row className="mb-4">
        <Col lg={6}>
          <CreditScore />
        </Col>
        <Col lg={6}>
          <InfoCard />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col lg={8}>
          <AccountsOverview />
        </Col>
        <Col lg={4}>
          <div className="info-cards-container">
            {/* Total Disputes Card */}
            <Card className="disputes-card mb-3">
              <Card.Body className="p-0">
                <div className="d-flex align-items-stretch h-100">
                  <div className="disputes-icon-section">
                    <FaExclamationTriangle className="disputes-icon" />
                  </div>
                  <div className="disputes-content-section">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <p className="disputes-title mb-0">Total Disputes</p>
                      <span className="disputes-count">{disputesCount}</span>
                    </div>
                    <p className="disputes-description mb-2">
                      Learn more about credit reporting and related policies.
                    </p>
                    <a href="#" className="disputes-read-more" onClick={handleReadMore}>
                      Read More
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>

            {/* Total Enquiries Card */}
            <Card className="enquiries-card">
              <Card.Body className="p-0">
                <div className="d-flex align-items-stretch h-100">
                  <div className="enquiries-icon-section">
                    <FaSearch className="enquiries-icon" />
                  </div>
                  <div className="enquiries-content-section">
                    <div className="d-flex justify-content-between align-items-start mb-1">
                      <div>
                        <h6 className="enquiries-title mb-0">Total Enquiries</h6>
                        <small className="enquiries-subtitle">(In last 3 years)</small>
                      </div>
                      <span className="enquiries-count">05</span>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <NBScoreHistory />
        </Col>
      </Row>

      <Row>
        <Col>
          <MoneyVoltage />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
