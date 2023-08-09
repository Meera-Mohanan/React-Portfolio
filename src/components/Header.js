import React from 'react';
import Navigation from '../Navigation';

const Header = ({ sections, activeSection, setActiveSection }) => {
  return (
    <header>
      <Navigation
        sections={sections}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </header>
  );
};

export default Header;
