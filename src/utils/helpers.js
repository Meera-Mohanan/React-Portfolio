
// Utility function to format a string as a URL-friendly slug
export const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };
  
  // Constants for different sections
  export const SECTIONS = {
    ABOUT: 'About Me',
    CONTACT: 'Contact',
    RESUME: 'Resume',
    PROJECTS: 'Projects',
  };
  