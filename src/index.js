import { render } from 'lit-html';
import { baseTemplate, boolTemplate, clickEventTemplate } from './templates';

const userName = 'Bob';
let boolData = true;

const baseDom = document.querySelector('.base-mount-point'),
	boolTrueDom = document.querySelector('.bool-mount-point__true'),
	boolFalseDom = document.querySelector('.bool-mount-point__false'),
	clickEventDom = document.querySelector('.click-event-mount-point');

const clickEventHandler = {
	handleEvent(e) {
		console.log(e);
	},
};

render(baseTemplate(userName), baseDom);
render(boolTemplate(boolData), boolTrueDom);
render(clickEventTemplate(clickEventHandler), clickEventDom);

boolData = false;
render(boolTemplate(boolData), boolFalseDom);
