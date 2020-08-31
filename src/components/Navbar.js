import React, { Component } from 'react'
import '../css/main.css'


class Navbar extends React.Component {


    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
            buttonString: ""
        }

        this.btnLogin = this.btnLogin.bind(this);
    }


    btnLogin() {
        this.setState((prevState) => {
            return{
                isLoggedIn: !prevState.isLoggedIn
            }
        });
    }

    render() {

        let buttonText = "";

        if(this.state.isLoggedIn){
            buttonText = "Welcome, broozkan__";
        }else{
            buttonText = "Log in";
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">broozkan__</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item float-right">
                            <a className="nav-link" href="#"> <button className="btn btn-sm btn-primary" onClick={this.btnLogin} >{buttonText}</button> </a>
                        </li>
                    </ul>

                </div>
            </nav>
        );
    }

}

export default Navbar