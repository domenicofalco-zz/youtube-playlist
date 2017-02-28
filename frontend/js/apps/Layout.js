import React from 'react';
import { Col } from 'react-bootstrap';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

class Layout extends React.Component {
  render() {
    return (
      <div>

        {/*<Header />
        <Sidebar />*
        <Footer />*/}

        <Col xs={12} md={3}>Sidebar</Col>

        <Col xs={12} md={9}>
          {React.cloneElement(this.props.children, this.props)}
        </Col>

      </div>
    );
  };
};

export default Layout;
