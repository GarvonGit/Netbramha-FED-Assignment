import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import '../../styles/AccountsOverview.css';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const AccountsOverview = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const data = {
    datasets: [{
      data: [4, 1, 2, 6],
      backgroundColor: ['#7E79DD', '#FDE866', '#99DBEA', '#67D995'],
      borderWidth: 0,
      cutout: '80%'
    }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            const accounts = [
              'Closed credit cards',
              'Closed loans', 
              'Open credit cards',
              'Open loans'
            ];
            return accounts[context.dataIndex] + ': ' + context.parsed + ' accounts';
          }
        }
      }
    }
  };

  const accounts = [
    { name: 'Closed credit cards', amount: 4, color: '#7E79DD', type: 'closed' },
    { name: 'Closed loans', amount: 1, color: '#FDE866', type: 'closed' },
    { name: 'Open credit cards', amount: 2, color: '#99DBEA', type: 'open' },
    { name: 'Open loans', amount: 6, color: '#67D995', type: 'open' }
  ];

  const filteredAccounts = accounts.filter(account => {
    if (activeFilter === 'All') return true;
    return account.type === activeFilter.toLowerCase();
  });

  return (
    <Card className="accounts-overview-card">
      <Card.Header className="accounts-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h6 className="mb-0 me-2 div-title">Your Accounts</h6>
            <div className="info-icon">i</div>
          </div>
          <div className="filter-buttons-container">
            <button 
              className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActiveFilter('All')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Open' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Open')}
            >
              Open
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'Closed' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Closed')}
            >
              Closed
            </button>
          </div>
        </div>
      </Card.Header>
      <Card.Body className="accounts-body pb-0">
        <div className="d-flex align-items-center">
          <div className="chart-container">
            <Doughnut key="accounts-overview-chart" data={data} options={chartOptions} />
            <div className="chart-center-text">
              <div className="center-label">Total Accounts</div>
              <div className="total-number">13</div>
            </div>
          </div>
          <div className="accounts-list ms-4 flex-grow-1">
            {filteredAccounts.map((account, index) => (
              <div key={index} className="account-item">
                <div className="d-flex align-items-center">
                  <div 
                    className="account-color-dot me-3"
                    style={{ backgroundColor: account.color }}
                  ></div>
                  <span className="account-name">{account.name}</span>
                </div>
                <span className="account-amount">{account.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AccountsOverview;
