'use strict';
import './node_modules/font-awesome/css/font-awesome.css';
import './style.less';

import Starter from './scripts/starter';

const rootElement = document.getElementById('main');
let starter = new Starter(rootElement);
