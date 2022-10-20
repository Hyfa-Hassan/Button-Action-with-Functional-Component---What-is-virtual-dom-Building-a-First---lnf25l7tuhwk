import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  function para(paragraphs){
    console.log(paragraphs)
  }
  return (
    <div id="main">
      // Do not alter the main div
    <Button id="click" onClick={()=>para(`<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>)}`>Click</Button>
    </div>
  );
}


export default App;
