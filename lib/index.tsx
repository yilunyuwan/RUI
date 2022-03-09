import React from 'react';
import ReactDOM from 'react-dom';
import Button from './button';
import Icon from './icon';


ReactDOM.render((<>
    <Button/>
    <Icon name='logo'/>
</>
), document.querySelector('#root'));
// ReactDOM.render((<Icon name='123'/>), document.getElementById('root'));

