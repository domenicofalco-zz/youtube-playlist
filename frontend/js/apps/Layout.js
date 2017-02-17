import React from 'react';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h5>header</h5>
        <hr />
        {React.cloneElement(this.props.children, this.props)}
        <hr />
        <h5>footer</h5>
      </div>
    );
  };
};

export default Layout;
