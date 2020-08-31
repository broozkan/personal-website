import React, { Component } from 'react'
import '../css/main.css'
import Todo from './Todo';
import todosData from '../data/todosData';
import Swapi from './Swapi';
import Form from './Form';


class MainContent extends React.Component {

    constructor() {
        super();
        this.state = {
            name:"Burhan"
        }
    }

    

    
    render() {
    const todoList = todosData.map((item) => <Todo key={item.id} item={item} handleChange={this.cboxTodoClick} />);

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <h1 className="card-title">{this.state.name} Özkan</h1>
                        <p>Welcome to my React.js website!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        
                            <Form />
                        



                    </div>
                </div>
            </div>
        );
    }

}

export default MainContent