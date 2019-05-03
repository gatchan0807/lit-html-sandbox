import * as templates from './templates';
import { render } from 'lit-html';

const inputMountPoint = document.querySelector('.input-mount');
const outputMountPoint = document.querySelector('.output-mount');

let todoList = [];

const submitHandler = {
	handleEvent(e) {
		let inputDom = document.querySelector('#js_input');
		let newTodoValue = inputDom.value;

        todoList.push(newTodoValue);
        
		console.dir(todoList);
        inputDom.value = '';

        render(templates.output({todoList: todoList}), outputMountPoint)
	},
};

const inputDatas = {
	submitHandler: submitHandler,
};

render(templates.input(inputDatas), inputMountPoint);
