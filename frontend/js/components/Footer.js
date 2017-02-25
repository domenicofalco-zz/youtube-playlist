import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer className='footer'>
        <Grid>
          <Row className='show-grid'>
            Footer
          </Row>
        </Grid>
      </footer>
    );
  };
};

export default Footer;
