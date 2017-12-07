import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h3>Hello World!</h3>
      </div>
    );
  }
}

export { HelloWorld };