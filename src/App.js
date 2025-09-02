import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import { ScoreProvider } from './contexts/ScoreContext';

function App() {
  return (
    <ScoreProvider>
      <div className="App">
        <div className="app-layout">
          <Sidebar />
          <div className="main-layout">
            <Header />
            <div className="main-content">
              <Dashboard />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </ScoreProvider>
  );
}

export default App;
