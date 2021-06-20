import React from "react";



var name = 'Nabil';
var date = new Date();
var year = date.getFullYear();

function Rest (){
  return (
    <>
      <h1 className="bl_color" contentEditable="true"> Hello World. My name is {name}</h1>
      <ol>
        <li style={{color:'Tomato'}}> {year} </li>
      </ol>
    </>
  );
}


export default Rest;
