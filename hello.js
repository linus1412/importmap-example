import startCase from '@lodash/startCase';

const el = document.createElement('h1');
const words = "hello, world";
const text = document.createTextNode(startCase(words) + " " + new Date().toTimeString());
el.appendChild(text);

document.body.appendChild(el);
