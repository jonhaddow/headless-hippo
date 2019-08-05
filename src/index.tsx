import React from 'react';
import ReactDOM from 'react-dom';

import Typography from 'typography';
import './global.scss';
import App from "./app/app";

const typography = new Typography({
	baseFontSize: '15px',
	baseLineHeight: 1.6,
	scaleRatio: 2.55,

	headerFontFamily: ['Roboto', 'sans serif'],
	headerWeight: 500,
	headerColor: '28',

	bodyFontFamily: ['Open Sans', 'sans serif'],
	bodyWeight: 400,
	boldWeight: 700,
	bodyColor: '20'
});
typography.injectStyles();

ReactDOM.render(
	<App />, 
	document.getElementById("root") as HTMLElement
);