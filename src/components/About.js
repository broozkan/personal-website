import React, { Component } from 'react'
import {Card, Icon} from 'semantic-ui-react'

class About extends React.Component {

    constructor(){
        super()

        this.state = {
            description:"Hi my name is Burhan. Welcome to my personal website."
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12 col-12">
                    <h2>About Me</h2>
                </div>
                <div className="col-lg-12 col-12">
                    <p>
                        Hi! My name is Burhan. I'm full stack web developer for 5+ years.
                    </p>
                </div>
            </div>
        )
    }
}

export default About