import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Adjust the import path based on your actual file location
import AboutMe from './pages/AboutMe'; // Adjust the import path based on your actual file location
import Contact from './pages/Contact'; // Adjust the import path based on your actual file location
import Resume from './pages/Resume'; // Adjust the import path based on your actual file location
import ProjectData from './pages/ProjectData'; // Adjust the import path based on your actual file location

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={ProjectData} />
          {/* Add more routes as needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
