import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css';
import './global.css';

import App from "./app/app";

ReactDOM.render(
	<App />, 
	document.getElementById("root") as HTMLElement
);