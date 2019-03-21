import React from 'react';
import Action  from './components/Action'
import Addoption from './components/Addoption';
import Options from './components/Options'
import Header from './components/Header'
import Modal from 'react-modal'

// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
//   };
class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            options: props.options,
            isActive:false,
            selectedoption: undefined
            
            // options: ['one thing', 'Twos thing','three thing']
        }
        this.handlepick = this.handlepick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    componentWillMount(){
        Modal.setAppElement('body');
    }
    toggleModal = (option) =>{
        this.setState({
            // isActive: !this.state.isActive //True tou false or else vise versa
            selectedoption:option
        })
 
    }
    handleClearSelectedOption = () =>{
        this.setState({
            selectedoption: undefined
        });
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options'); //By Getting the value from  Local Storage
            const options = JSON.parse(json) //BY converting in to json  
            if(options){
                this.setState(()=>({
                    options:options
                }))
            }
        }
        catch(e){
            //Do nothing if there is no data are present 
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){ //check whether previous state of option is equal to current 
            const json = JSON.stringify(this.state.options); // json string main value get
            localStorage.setItem('options',json); //local storage main enter kari
        }
    }
    handleDeleteOptions(){
        // this.setState({ options : [] });
           this.setState(()=>({options: []}));
    }

    handleDeleteOption(optionToRemove){
        // console.log('HDO',option);
        this.setState((prevState) => ({
            options: prevState.options.filter((option)=>optionToRemove !== option)
            // {return optionToRemove !== option ; }
            
        }));
    }
    handlepick()
    {
        const randomnumber  = Math.floor(Math.random() * this.state.options.length);
        const option  = this.state.options[randomnumber];
        this.toggleModal(option);
    }
    handleAddOption(option){
        if(!option){
            return 'Please type Something!'
        }
        else if(this.state.options.indexOf(option)> -1){ //check whether it is same option is present or not
            return 'Item already Exists.'
        }

        //aik previous state get horahi hai options ki usmain add kar rahe hain option new jo add karna hai
        // this.setState((prevState)=>{
        //     return{
        //         options: prevState.options.concat([option])
        //         };
        // } );
        this.setState((prevState)=>({
            options: prevState.options.concat([option])
        }));
    }
    render(){ 
    //    const title = "TodoApp"
    //   const subtitle = "Now you never forget your work!"
    //   const options = 
        return(
            <div> <Header />
                <div className = "container">
                  <Action  handlepick = {this.handlepick} hasOptions = {this.state.options.length > 0 }/>
            <div className = "widget"> 
                  <Options 
                  options ={this.state.options}
                  handleDeleteOptions = {this.handleDeleteOptions}
                  handleDeleteOption = {this.handleDeleteOption}  
                  />    
                  <Addoption 
                    handleAddOption  = {this.handleAddOption}
                          
                  />
            </div>  
                </div>
                  <Modal
                  
                //   isOpen = {this.state.isActive}
                isOpen = {!!this.state.selectedoption}
                onRequestClose = {this.handleClearSelectedOption}
                contentLabel = "Selected Option"
                closeTimeoutMS = {200} //Close time of Modal
                className = "modal" 
                //     style = {customStyles}
                   >
                   <h2 className = "modal-title"> Your Option</h2>
                   {this.state.selectedoption && <p>{this.state.selectedoption}</p>}
                   
                  <button className = "modal-button" onClick={this.handleClearSelectedOption}>
                    X Close
                  </button>

                   </Modal>
            </div>
        )

    }

}
//Default Props Setup.
App.defaultProps = {
    options: []
}
export default App;