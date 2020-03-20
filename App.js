import React , {Component} from 'react';
import Todolist from "./Items.js";


 class App extends Component {
  
  
  
 render(){
  return (
  <div className="app" >
   List
   <Todolist />
   
  </div>  
  )
}}

export default App;