import render from './app';

import './index.scss';

render();

if (module.hot) {
  module.hot.accept();
}