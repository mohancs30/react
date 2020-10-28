import React, {Component} from 'react';

class test extends React.Component{

    constructor(props) {
        super(props)
        console.log(" i'm in constructer");
        this.state = {date: new Date(),
                      name:"mohanraj"
        };
        

      }

      
      componentDidMount(){

        console.log('child did mount');

      }
      
    handleClick() {
        console.log('Click happened');
      }
        
    
   static getDerivedStateFromProps(props, state) {
  
    console.log('GET DRIVED STATE FROM PROPS');
        // Return null to indicate no change to state.
        return null;
      }


   shouldComponentUpdate(nextProps, nextState) {

        console.log('SHOULD COMP UPDATE');
        
        
    }


render(){
    console.log(" i'm in render");
   return(
<div>
 <h2>It is {this.state.name}</h2>
 <button onClick={this.handleClick}>Click Me</button>
</div>

)
}


}
export default test;
