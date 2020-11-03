import React, {Component} from 'react';

class test extends React.Component{

    constructor(props) {
        super(props)
        console.log(" i'm in constructer");
        this.state = {
          date: new Date(),
          name:"mohanraj",
          age : 31
        };
        

      }
     
      componentDidMount(){

        console.log('child did mount');

      }
      
    handleClick() {
        console.log('Click happened');
      }
        
    
    namehandleer=(e)=>{
      this.setState({
        [e.target.name] : e.target.value,
        [e.target.age] : e.target.value
      
      });
   }
 
render()
{

 console.log(" i'm in render");
  return(
<div>
  <h1>{this.props.Name}</h1>
 <h2>My name is  {this.state.Name}</h2>
 <h2>I'm {this.state.Age} Old.</h2>
 <input type='text' name='Name' onChange={this.namehandleer}></input>
 <input type='text' name='Age' onChange={this.namehandleer}></input>
 <button onClick={this.handleClick}>Click Me</button>
</div>

)
}


}
export default test;
