import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

class Layout extends React.Component {
  render() {
    return (
      <div>

        <Header />
        <Sidebar />

        <div>
          <Grid>
            <Row className='show-grid'>
              {React.cloneElement(this.props.children, this.props)}
            </Row>
          </Grid>
        </div>

        <Footer />
      </div>
    );
  };
};

export default Layout;
