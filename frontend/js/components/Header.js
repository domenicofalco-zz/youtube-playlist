import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <header className='header'>
        <Grid>
          <Row className='show-grid'>
            header
          </Row>
        </Grid>
      </header>
    );
  };
};

export default Header;
