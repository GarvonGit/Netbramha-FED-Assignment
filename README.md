# NetBramha Banking Dashboard

A modern, responsive banking dashboard built with React.js that provides a comprehensive view of financial data including credit scores, account overviews, and transaction history.

## 🚀 Live Demo

[View Live Demo](https://your-demo-link.com) *(Add your deployment link here)*

## 📋 Table of Contents

- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Key Components](#-key-components)
- [Responsive Design](#-responsive-design)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🏦 **Core Banking Features**
- **Credit Score Dashboard** - Interactive gauge showing current credit score with refresh functionality
- **Account Overview** - Visual representation of all accounts with donut chart
- **Transaction History** - Comprehensive transaction tracking and filtering
- **Money Voltage** - Credit score range visualization with progress indicators
- **NB Score History** - Interactive line chart showing credit score trends over time

### 🎨 **UI/UX Features**
- **Modern Design** - Clean, professional banking interface
- **Interactive Charts** - Dynamic Chart.js visualizations with hover effects
- **Responsive Layout** - Optimized for desktop, tablet, and mobile devices
- **Sidebar Navigation** - Collapsible menu with organized sections
- **Real-time Updates** - Dynamic data refresh capabilities

### 📱 **Responsive Design**
- **Desktop First** - Optimized for laptop and desktop screens
- **Mobile Friendly** - Hamburger menu and touch-optimized interface
- **Tablet Support** - Adaptive layout for medium-sized screens
- **Cross-browser Compatible** - Works on all modern browsers

### 🔧 **Technical Features**
- **React Context API** - Centralized state management for dynamic data
- **Chart.js Integration** - Advanced data visualization
- **Bootstrap Components** - Responsive UI framework
- **React Icons** - Comprehensive icon library
- **CSS3 Animations** - Smooth transitions and hover effects

## 📸 Screenshots

### Desktop View
![Desktop Dashboard](screenshots/desktop-dashboard.png)

### Mobile View
![Mobile Dashboard](screenshots/mobile-dashboard.png)

### Credit Score Component
![Credit Score](screenshots/credit-score.png)

## 🛠 Tech Stack

- **Frontend Framework**: React.js 18.2.0
- **UI Library**: React Bootstrap 5.3.0
- **Charts**: Chart.js 4.4.0 + react-chartjs-2 5.2.0
- **Icons**: React Icons 4.11.0
- **Styling**: CSS3 with Flexbox and Grid
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher)
- **Git** (for cloning the repository)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/netbanking-dashboard.git
cd netbanking-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### 4. Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
netbanking-dashboard/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── CreditScore.js
│   │   │   ├── MoneyVoltage.js
│   │   │   ├── NBScoreHistory.js
│   │   │   └── AccountsOverview.js
│   │   ├── Header/
│   │   │   └── Header.js
│   │   ├── Sidebar/
│   │   │   └── Sidebar.js
│   │   ├── Footer/
│   │   │   └── Footer.js
│   │   └── Cards/
│   │       └── InfoCard.js
│   ├── styles/
│   │   ├── App.css
│   │   ├── CreditScore.css
│   │   ├── MoneyVoltage.css
│   │   ├── NBScoreHistory.css
│   │   ├── AccountsOverview.css
│   │   ├── Header.css
│   │   ├── Sidebar.css
│   │   └── Footer.css
│   ├── contexts/
│   │   └── ScoreContext.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder.

### `npm run eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 🧩 Key Components

### CreditScore Component
- Interactive circular gauge showing credit score
- Real-time score refresh functionality
- Responsive design for all screen sizes
- Score analysis and historical tracking

### MoneyVoltage Component
- Visual representation of credit score ranges
- Color-coded segments (Poor, Fair, Good, Very Good, Excellent)
- Interactive progress indicators
- Responsive legend and descriptions

### NBScoreHistory Component
- Interactive line chart showing score trends
- Custom tooltips and hover effects
- Historical data visualization
- Dynamic scrollbar for mobile devices

### AccountsOverview Component
- Donut chart showing account distribution
- Account filtering and categorization
- Responsive chart sizing
- Account balance tracking

### Sidebar Component
- Collapsible navigation menu
- Organized menu sections
- Mobile hamburger menu
- Active state indicators

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Desktop**: 1441px and above
- **Laptop**: 1024px - 1440px
- **Tablet**: 769px - 1023px
- **Mobile**: 768px and below
- **Small Mobile**: 576px and below

### Mobile Features
- Hamburger menu navigation
- Touch-optimized interface
- Swipe gestures support
- Optimized chart sizing
- Collapsible sections

## 🎨 Design System

### Color Palette
- **Primary Green**: #008A00 (NetBramha Brand)
- **Secondary Blue**: #00A6CA (Accent Color)
- **Dark Blue**: #004364 (Text and Borders)
- **Yellow**: #FDDC02 (Action Buttons)
- **Gray Scale**: Various shades for backgrounds and text

### Typography
- **Font Family**: Roboto (Google Fonts)
- **Font Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Responsive Sizing**: Scales appropriately across devices

## 🔧 Customization

### Adding New Components
1. Create component file in appropriate directory
2. Add corresponding CSS file in `styles/` directory
3. Import and use in parent component
4. Update responsive breakpoints as needed

### Modifying Charts
- Chart configurations are in respective component files
- Chart.js options can be customized for different visualizations
- Responsive chart sizing is handled via CSS media queries

### Styling Guidelines
- Use CSS custom properties for consistent theming
- Follow BEM methodology for CSS class naming
- Maintain responsive design principles
- Test across all breakpoints

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings (build command: `npm run build`)
3. Deploy automatically on every push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Garv Chouhan**
- GitHub: [@your-github-username](https://github.com/your-github-username)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- NetBramha for the design inspiration
- React.js community for excellent documentation
- Chart.js team for powerful visualization library
- Bootstrap team for responsive UI components

---

## 📞 Support

If you have any questions or need help with the project, please:

1. Check the [Issues](https://github.com/your-username/netbanking-dashboard/issues) page
2. Create a new issue with detailed description
3. Contact the author directly

---

**Made with ❤️ by Garv Chouhan for NetBramha FED Task**