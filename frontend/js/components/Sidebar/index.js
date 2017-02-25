import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './style.css';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <aside className={styles.sidebar}>sidebar</aside>
    );
  };
};

export default Footer;
