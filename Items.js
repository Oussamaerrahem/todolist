


import React from "react";

export default class Todolist extends React.Component{
    state={
        tasks:["drink a coffee","going home"],
        input : ""
        
    }
    add()
    {

        const tasklist = this.state.tasks;
        tasklist.push(this.state.input)
        this.setState(
            {
                tasks:tasklist,
                input:''
            }
        )
    }
render(){
    return(
        <div>
        <ul>
        {this.state.tasks.map(task=> <li>{task}</li>)}
        </ul>
        <h1>To Do List</h1>
        <input value={this.state.input} onChange={(event)=>{this.setState({input: event.target.value})}} ></input>
        <button onClick={()=>{this.add()}}>Add</button>


        
      
        </div>
    )
    

    }
    }