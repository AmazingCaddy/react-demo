import React from 'react';

class HelloWorld extends React.Component {
  render() {
    return (
      <div className={this.props.className}>Hello World!</div>
    );
  }
}

export { HelloWorld };