import React from 'react';
import ReactDOM from 'react-dom';
var footCss = require('../../css/foot.css');
export default class ComponentFooter extends React.Component{
  render(){
    console.log(footCss);
    return (
      <footer className={footCss.miniFooter}>
        <div>这是页脚</div>
      </footer>
    )
  }
}
