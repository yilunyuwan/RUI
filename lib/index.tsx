import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Icon from './icon/icon';
import DialogExample from './dialog/dialog.example';
import ButtonExample from './button/button.example';
import './index.scss'
import LayoutExample from './layout/layout.example';

const onClick: React.MouseEventHandler = (e) => {
  console.log(e);
  console.log(e.target);
  console.log((e.target as SVGUseElement).href);
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <header>
          <Icon name='logo' onClick={onClick}/>
          <span className="logo">RUI</span>
        </header>
        
        <aside>
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/button">Button 按钮</Link>
            </li>
            <li>
              <Link to="/dialog">Dialog 对话框</Link>
            </li>
            <li>
              <Link to="/layout">Layout 布局</Link>
            </li>
          </ul>
        </aside>

        <main>
          <Switch>
            <Route path='/button'>
              <ButtonExample/>
            </Route>
            <Route path='/dialog'>
              <DialogExample/>
            </Route>
            <Route path='/layout'>
              <LayoutExample/>
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};


ReactDOM.render(<App/>, document.querySelector('#root'));


