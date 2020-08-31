import React, {Component} from 'react'


class Form extends React.Component{


    constructor(){
        super()

        this.state = {
            name:'',
            surname:''
        }

        this.txtNameOnChange = this.txtNameOnChange.bind(this)
        this.frmNewUserOnSubmit = this.frmNewUserOnSubmit.bind(this)
    }



    txtNameOnChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
    }


    frmNewUserOnSubmit(){
        alert(this.state.name)
    }

    render(){
        return(
            <form onSubmit={this.frmNewUserOnSubmit}>
                <h2>Hello, {this.state.name} {this.state.surname}</h2>
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input className="form-control" placeholder="Your name..." name="name" value={this.state.name} required onChange={this.txtNameOnChange}  />
                </div>
                <div className="form-group">
                    <label for="name">Surname:</label>
                    <input className="form-control" placeholder="Your surname..." name="surname" value={this.state.surname} required onChange={this.txtNameOnChange}  />
                </div>

            </form>
        )
    }

}

export default Form