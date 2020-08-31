import React from 'react'



class Todo extends React.Component {

    constructor(){
        super();
        this.state = {
            completed:true
        }
        this.cboxTodoClick = this.cboxTodoClick.bind(this);
    }

    
    cboxTodoClick() {
        this.setState((prevState) => {
            return{
                completed: !prevState.completed
            }
        });
    }

    render() {

        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }

        return (
            <div className="col-lg-12">
                <div className="card">
                    <div className="card-body">
                        <input type="checkbox" onChange={this.cboxTodoClick} id={this.props.item.id} key={this.props.item.id} checked={this.state.completed} />
                        <label for={this.props.item.id} style={this.state.completed ? completedStyle:null} >{this.props.item.text}</label>
                    </div>
                </div>

            </div>
        );
    };
};

export default Todo;
