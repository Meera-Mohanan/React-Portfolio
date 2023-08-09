import React from 'react';

const Navigation = ({ sections, activeSection, setActiveSection }) => {
  return (
    <nav>
      <ul>
        {sections.map((section, index) => (
          <li key={index}>
            <button
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
