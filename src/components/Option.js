import React from 'react'

const Option = (props) => { 
  return(
    <div className = "option">
    <p className = "option__text">{props.count}. {props.textoption}</p>
    {/* {props.textoption} */}
    <button
    className = "button button--link" 
    onClick = {(e) =>{
      props.handleDeleteOption(props.textoption);
    }}>Remove</button>
  </div>

  ) 
}
export default Option
