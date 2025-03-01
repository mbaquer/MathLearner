import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: '#333',
      color: 'white',
      marginTop: '20px',
    },
    text: {
      margin: '0 0 10px 0',
      fontSize: '1rem',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      gap: '15px',
      padding: 0,
      margin: 0,
    },
    navItem: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '0.9rem',
      transition: 'color 0.3s',
    }
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; 2023 MathLearner. All rights reserved.</p>
      <ul style={styles.navList}>
        <li><a href="/about" style={styles.navItem}>About</a></li>
        <li><a href="/contact" style={styles.navItem}>Contact</a></li>
        <li><a href="/privacy" style={styles.navItem}>Privacy Policy</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
