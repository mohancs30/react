import React, {Component} from 'react';
import Test from './Test.js';
import { render } from '@testing-library/react';

var details ={
Name :"Mohanraj",
Age: 3,
City: "Sg"

}

function App(){
    return ( 
      <div className="App">
          <Test  {...details}/>
      </div>
    );
  }


export default App;