// src/contexts/ScoreContext.js
import React, { createContext, useContext, useState, useCallback } from 'react';

const ScoreContext = createContext();

export const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScore must be used within a ScoreProvider');
  }
  return context;
};

export const ScoreProvider = ({ children }) => {
  // Initial score data
  const [scoreData, setScoreData] = useState({
    currentScore: 767,
    maxScore: 900,
    minScore: 300,
    lastUpdated: '19th Apr \'22',
    userName: 'Rahul L.',
    // Historical data for the chart
    historicalData: [
      { month: 'APR', score: 520, date: '14/04/2022', change: 'up', index: 3 },
      { month: 'MAY', score: 580, date: '15/05/2022', change: 'up', index: 4 },
      { month: 'JUN', score: 493, date: '16/06/2022', change: 'down', index: 5 },
      { month: 'AUG', score: 510, date: '16/08/2022', change: 'right', index: 7 },
    ],
    // Chart data for NBScoreHistory
    chartData: [null, null, null, 520, 580, 493, null, 510, null, null, null, null]
  });

  // Function to generate a new random score
  const generateNewScore = useCallback(() => {
    const newScore = Math.floor(Math.random() * 200) + 600; // Random score between 600-800
    const currentDate = new Date();
    const formattedDate = `${currentDate.getDate()}${getOrdinalSuffix(currentDate.getDate())} ${currentDate.toLocaleDateString('en-US', { month: 'short' })} '${currentDate.getFullYear().toString().slice(-2)}`;
    
    // Update historical data with new score (add to current month or update if exists)
    const currentMonthIndex = currentDate.getMonth();
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const currentMonth = monthNames[currentMonthIndex];
    
    // Format date as dd/MM/yyyy manually
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    const formattedDateString = `${day}/${month}/${year}`;
    
    // Create new historical entry
    const newHistoricalEntry = {
      month: currentMonth,
      score: newScore,
      date: formattedDateString,
      change: newScore > scoreData.currentScore ? 'up' : 'down',
      index: currentMonthIndex
    };

    // Update chart data
    const newChartData = [...scoreData.chartData];
    newChartData[currentMonthIndex] = newScore;

    // Update historical data (add new entry or update existing)
    const updatedHistoricalData = [...scoreData.historicalData];
    const existingIndex = updatedHistoricalData.findIndex(item => item.month === currentMonth);
    
    if (existingIndex !== -1) {
      updatedHistoricalData[existingIndex] = newHistoricalEntry;
    } else {
      updatedHistoricalData.push(newHistoricalEntry);
    }

    setScoreData(prevData => ({
      ...prevData,
      currentScore: newScore,
      lastUpdated: formattedDate,
      historicalData: updatedHistoricalData,
      chartData: newChartData
    }));
  }, [scoreData.currentScore]);

  // Helper function to get ordinal suffix
  const getOrdinalSuffix = (day) => {
    if (day >= 11 && day <= 13) {
      return 'th';
    }
    switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  // Function to calculate score position for MoneyVoltage
  const calculateScorePosition = useCallback((score) => {
    const totalRange = scoreData.maxScore - scoreData.minScore; // 600
    const scorePosition = score - scoreData.minScore; // Position within the range
    return (scorePosition / totalRange) * 100; // Percentage position
  }, [scoreData.maxScore, scoreData.minScore]);

  // Function to get score percentage for CreditScore gauge
  const getScorePercentage = useCallback((score) => {
    return (score - scoreData.minScore) / (scoreData.maxScore - scoreData.minScore);
  }, [scoreData.maxScore, scoreData.minScore]);

  const value = {
    scoreData,
    generateNewScore,
    calculateScorePosition,
    getScorePercentage
  };

  return (
    <ScoreContext.Provider value={value}>
      {children}
    </ScoreContext.Provider>
  );
};
