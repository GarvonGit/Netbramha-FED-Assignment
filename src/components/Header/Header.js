import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaQuestionCircle, FaGlobe, FaUser, FaSignOutAlt, FaChevronDown } from 'react-icons/fa';
import '../../styles/Header.css';

const Header = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    'English',
    'Hindi',
    'Tamil',
    'Telugu',
    'Gujarati',
    'Marathi',
    'Bengali',
    'Punjabi'
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Main Header */}
      <Navbar bg="white" expand="lg" className="custom-header">
        <Container fluid>
          <Nav className="ms-auto header-nav">
            <Nav.Link href="#" className="header-nav-item">
              <FaQuestionCircle className="header-icon" />
              How It Works
            </Nav.Link>
            
            {/* Language Dropdown */}
            <div className="language-dropdown-wrapper" ref={dropdownRef}>
              <Nav.Link 
                href="#" 
                className="header-nav-item language-toggle"
                onClick={toggleDropdown}
              >
                <FaGlobe className="header-icon" />
                {selectedLanguage}
                <FaChevronDown className={`dropdown-chevron ${isDropdownOpen ? 'open' : ''}`} />
              </Nav.Link>
              
              {isDropdownOpen && (
                <div className="language-dropdown">
                  {languages.map((language) => (
                    <div
                      key={language}
                      className={`language-option ${selectedLanguage === language ? 'selected' : ''}`}
                      onClick={() => handleLanguageSelect(language)}
                    >
                      {language}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <Nav.Link href="#" className="header-nav-item">
              <FaUser className="header-icon" />
              My Account
            </Nav.Link>
            <Button className="logout-btn">
              <FaSignOutAlt className="logout-icon" />
              Logout
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
