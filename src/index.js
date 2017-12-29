//import * as app from './app';
import { start } from './todos/index'
import './index.scss';

//app.start();
start(document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}