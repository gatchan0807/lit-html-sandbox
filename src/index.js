import { html, render } from 'lit-html';

const userName = 'Bob';
let boolData = true;

const baseDom = document.querySelector('.base-mount-point'),
	boolTrueDom = document.querySelector('.bool-mount-point__true'),
	boolFalseDom = document.querySelector('.bool-mount-point__false');

const baseTemplate = name => html`
	<p>Hello ${name}</p>
`;
const boolTemplate = bool => html`
	Disabled[${bool}]: <input ?disabled="${bool}" value="${bool}" />
`;

render(baseTemplate(userName), baseDom);
render(boolTemplate(boolData), boolTrueDom);

boolData = false;
render(boolTemplate(boolData), boolFalseDom);
