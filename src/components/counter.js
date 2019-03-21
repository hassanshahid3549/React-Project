import React, { Component } from 'react'

class Counter extends Component {
        constructor(props){
            super(props);
          this.state = {
              count: props.count 
          }  ;
         this.handleAddOne = this.handleAddOne.bind(this); 
        
         this.handleMinusone = this.handleMinusOne.bind(this);
         this.handleReset   = this.handleReset.bind(this);
        }
        handleAddOne() { 
                this.setState((prevstate )=>//hold the previous state.
                {return{
                    count: prevstate.count + 1
                };
            });
}
        
        handleMinusOne() { 
            this.setState((prevstate )=>//hold the previous state.
            {return{
                count: prevstate.count - 1
            };
        });
        }
        handleReset() { 
            this.setState(()=>//hold the previous state.
            {return{
                count: 0 
            };
        });
        }
        
        render() {
    return (
      <div>
        <h1> Value is : {this.state.count}</h1>
        <button onClick = {this.handleAddOne}>
        +1

        </button >

        <button onClick = {this.handleMinusone}>
        -1

        </button>
        <button onClick = {this.handleReset}>
        Reset
        </button>

      </div>
    )
  }
}
Counter.defaultProps = {
    count: 0 
}
export default Counter
