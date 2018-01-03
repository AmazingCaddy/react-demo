//import * as app from './app';
import { start } from './todosv2/index'
import './index.scss';

//app.start();
start(document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}