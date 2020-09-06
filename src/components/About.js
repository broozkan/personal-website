import React, { Component } from 'react'
import {Card, Icon} from 'semantic-ui-react'

class About extends React.Component {

    constructor(){
        super()

        this.state = {
            description:"Hi. Welcome to my personal website. "
        }
    }

    render() {
        return (

            <Card>
                <Card.Content header='About Me' />
                <Card.Content description={this.state.description} />
            </Card>


        )
    }
}

export default About