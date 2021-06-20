var React = require('react');
var ReactDom = require("react-dom");

var name = 'nabil';


ReactDom.render(
  <div>
    <h1> Hello World. My name is {name}</h1>
    <ol>
      <li> 123 </li>
      <li> 456 </li>
    </ol>
  </div>
  , document.getElementById("root"));
