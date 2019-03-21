import React from 'react';
// import { Button } from 'react-bootstrap';

const Action = (props) =>{
    return (
        <div> 
        <button 
        className = "big-button"
        onClick= {props.handlepick}
        disabled = {!props.hasOptions}
        >
        What Should I Do ?
        </button>
</div>

    )
}
// class Action extends React.Component{
//     handlepick(){
//         return alert("Hello")
//     }
//     render(){
//         return(
//             <div> 
//                 <button 
//                 onClick= {this.props.handlepick}
//                 disabled = {!this.props.hasOptions}
//                 >
//                 What Should I Do ?
//                 </button>
//   </div>
//         )

//     }

// }

export default Action;