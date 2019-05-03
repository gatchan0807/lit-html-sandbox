import { html } from 'lit-html';

export const baseTemplate = name => html`
	<p>Hello ${name}</p>
`;
export const boolTemplate = bool => html`
	Disabled[${bool}]: <input ?disabled="${bool}" value="${bool}" />
`;
export const clickEventTemplate = eventHandler => html`
	<button @click="${eventHandler}">Click!</button>
`;
