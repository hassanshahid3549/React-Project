import React from 'react'
import Option from './Option'


const Options = (props) => {
  return(
    <div>
      <div className = "widget-header">
      <h3 className = "widget-header__title">Your Options</h3>
    <button 
      className = "button button--link" 
      onClick = {props.handleDeleteOptions}
      
    > Remove all
    </button>
    </div>
      {props.options.length === 0 && <p className = "widget__message"> Please Add an Option to get Started!</p>}
       {props.options.map ((option,index) =>  
        (
          <Option
           key={option}
            textoption={option}
            count = {index +1}
            handleDeleteOption = {props.handleDeleteOption}
            />
        )
        )}  
       {/* return new array with returning all values */}
 </div>

  )
}  

// class Options extends Component {
//     handleRemoveall(){
//         return alert("Removed data")
//     } 
//     render() {
      
//     return (
//       <div>
//           <button 
//             onClick = {this.props.handleDeleteOptions}
            
//           > Remove all
//           </button>
//              {this.props.options.map ((option) => <Option key={option} textoption={option}/>)}  
//              {/* return new array with returning all values */}
//        </div>
//     )
//   }
// }

export default Options
