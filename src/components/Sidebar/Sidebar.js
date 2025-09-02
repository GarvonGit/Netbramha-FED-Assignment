import React, { useState } from 'react';
import { 
  FaHome,
  FaFileAlt,
  FaBell,
  FaDesktop,
  FaGraduationCap,
  FaChevronUp,
  FaChevronDown,
  FaArrowUp,
  FaGift,
  FaBars,
  FaTimes,
  FaQuestionCircle,
  FaGlobe,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa';
import '../../styles/Sidebar.css';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('summary');
  const [overviewExpanded, setOverviewExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

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

  const menuItems = [
    {
      id: 'overview',
      icon: FaHome,
      label: 'Overview',
      isDropdown: true,
      subItems: [
        { id: 'score-report', label: 'Score & Report' },
        { id: 'summary', label: 'Summary' },
        { id: 'history', label: 'History' },
        { id: 'where-you-stand', label: 'Where You Stand' }
      ]
    },
    { id: 'your-report', icon: FaFileAlt, label: 'Your Report' },
    { id: 'alerts', icon: FaBell, label: 'Alerts', badge: 1 },
    { id: 'simulator', icon: FaDesktop, label: 'Simulator' },
    { id: 'education', icon: FaGraduationCap, label: 'Education' },
    { id: 'upgrade-plan', icon: FaArrowUp, label: 'Upgrade My Plan' },
    { id: 'rewards', icon: FaGift, label: 'Rewards Program' }
  ];

  const handleItemClick = (itemId) => {
    if (itemId === 'overview') {
      setOverviewExpanded(!overviewExpanded);
      if (!overviewExpanded) {
        setActiveItem('summary'); // Set summary as active when expanding
      }
    } else {
      setActiveItem(itemId);
    }
  };

  const handleSubItemClick = (subItemId) => {
    setActiveItem(subItemId);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isOverviewActive = () => {
    return activeItem === 'overview' || 
           (menuItems[0].subItems && menuItems[0].subItems.some(sub => sub.id === activeItem));
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <div className="mobile-hamburger">
        <button className="hamburger-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && <div className="mobile-overlay" onClick={toggleMobileMenu}></div>}

      <div className={`netbramha-sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {/* NETBRAMHA Header */}
        <div className="sidebar-header">
          <div className="netbramha-brand">
            <div className="brand-icon">■</div>
            <span className="brand-text">NETBRAMHA</span>
          </div>
        </div>

        {/* Header Options - Mobile Only */}
        <div className="mobile-header-options">
          <div className="header-nav-item">
            <FaQuestionCircle className="header-icon" />
            How It Works
          </div>
          
          <div className="language-dropdown-wrapper">
            <div 
              className="header-nav-item language-toggle"
              onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
            >
              <FaGlobe className="header-icon" />
              {selectedLanguage}
              <FaChevronDown className={`dropdown-chevron ${isLanguageDropdownOpen ? 'open' : ''}`} />
            </div>
            
            {isLanguageDropdownOpen && (
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
          
          <div className="header-nav-item">
            <FaUser className="header-icon" />
            My Account
          </div>
          
          <button className="logout-btn">
            <FaSignOutAlt className="logout-icon" />
            Logout
          </button>
        </div>

      {/* Menu Items */}
      <div className="sidebar-menu">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-group">
            <div 
              className={`menu-item ${isOverviewActive() && item.isDropdown ? 'active' : ''} ${activeItem === item.id && !item.isDropdown ? 'active' : ''}`}
              onClick={() => handleItemClick(item.id)}
            >
              <item.icon className="menu-icon" />
              <span className="menu-text">{item.label}</span>
              
              {item.badge && (
                <span className="menu-badge">{item.badge}</span>
              )}
              
              {item.isDropdown && (
                <span className="dropdown-arrow">
                  {overviewExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              )}
            </div>

            {/* Sub-menu items */}
            {item.isDropdown && overviewExpanded && (
              <div className="sub-menu">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className={`sub-menu-item ${activeItem === subItem.id ? 'active' : ''}`}
                    onClick={() => handleSubItemClick(subItem.id)}
                  >
                    {subItem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Sidebar;
