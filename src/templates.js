import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

export const baseTemplate = name => html`
	<p>Hello ${name}</p>
`;
export const boolTemplate = bool => html`
	Disabled[${bool}]: <input ?disabled="${bool}" value="${bool}" />
`;
export const clickEventTemplate = eventHandler => html`
	<button @click="${eventHandler}">Click!</button>
`;

export const input = props => html`
	<input type="text" id="js_input" />
	<button @click=${props.submitHandler}>Submit</button>
`;

export const output = props => html`
    <h1>Todos:</h1>
	${todoList(props.todoList)}
`;

const todoList = todoList => html`
	<ul>
		${repeat(
			todoList,
			(todo, index) => html`
				<li>${index} : ${todo}</li>
			`,
		)}
	</ul>
`;
