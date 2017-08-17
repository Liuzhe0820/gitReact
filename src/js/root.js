import React from 'react';
import ReactDOM from 'react-dom';
import Index from './index';
import ComponentList from './compents/list';
import {Router,Route,hashHistory} from 'react-router';

export default class Root extends React.Component{
  render(){
    return (
      //这里替换了之前的 Index，变成了程序的入口
      <Router history={hashHistory}>
        <Route path="/" component={Index}></Route>
        <Route path="/list" component={ComponentList}></Route>
      </Router>
    );
  };
};

ReactDOM.render(<Root/>, document.getElementById('example'));
