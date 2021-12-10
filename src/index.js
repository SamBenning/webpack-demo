import _ from 'lodash';
import './style.css';
import myName from './myName';
import Icon from './icon.jpg';
import Data from './data.xml';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');


    element.innerHTML = myName('Sam');
    element.classList.add('hello');

    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());
console.log('yo')