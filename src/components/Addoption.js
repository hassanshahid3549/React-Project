import React, { Component } from 'react'

class Addoption extends Component {
      constructor(props){
        super(props);
        this.state = {
          error: undefined
        
        }
        this.handleAddOption = this.handleAddOption.bind(this)
      }  
      
  handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
            // e is event argument. target is form 
            // element for form and option is represent edit text and we take that value
            //  trim is used to eliminate extra space
            //trim also stop to send data that only contain spaces nothing else.
            const error = this.props.handleAddOption(option);
         
            // this.setState( () =>{
            //   return{
            //     error: error
            //   };
            // });
            this.setState(()=>({
                error:error
              }));
              if(!error){
                e.target.elements.option.value = '';
              }
              // if(option){
        //   // alert(option)
        // }
    }
    render() {
    return (
      <div>
         {this.state.error && (<p class="add-option-error"> {this.state.error}</p>)}
        <form className = "add-option" onSubmit={this.handleAddOption}>
            <input className = "add-option__input" placeholder = "Type Something To Add!" type = "text" name = "option"></input>
            <button className = "button">Add Option </button>
        </form>
      </div>
    )
  }
}

export default Addoption
 