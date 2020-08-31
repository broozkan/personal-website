import React, { Component } from 'react';
import Character from './Character'

class Swapi extends React.Component {


    constructor() {
        super();

        this.state = {
            loading: true,
            characters: {}
        }
    }


    componentDidMount() {

        fetch("http://swapi.dev/api/people/")
            .then((response) => { return response.json(); })
            .then((data) => {
                const rand = Math.random();
                this.setState({
                    loading: false,
                    characters: data.results
                })
                console.log(this.state.characters);


            })
    }


    render() {
        let characterArray = {}
        let rand = Math.random()

        if (this.state.loading == false) {
            characterArray = this.state.characters.map((item) => {
                return <Character key={rand} item={item} />
            }
            )
        }

        return (
            <div className="row">
                {this.state.loading ? "Loading..." : characterArray}

            </div>
        )
    }

}

export default Swapi;