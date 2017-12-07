import * as app from './app';

import './index.scss';

app.start();

if (module.hot) {
  module.hot.accept();
}