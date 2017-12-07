import React from 'react';
import ReactDOM from 'react-dom';

import { HelloWorld, HelloWorldFunc } from './demo/hello-world';

class Element extends React.Component {
  render() {
    const rowContainerClass = 'row-container';

    const rows = [
      HelloWorld,
      HelloWorldFunc
    ];

    const inner = rows.map((Value, index) => {
      return <Value className={rowContainerClass} key={index} />;
    });

    return (
      <div className={this.props.className}>
        {inner}
      </div>
    );
  }
}

function start() {
  ReactDOM.render(<Element className={'container'} />, document.getElementById('app'));
}

export { start };