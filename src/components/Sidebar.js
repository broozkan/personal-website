import React, { Component } from 'react'
import { Image, Card, Icon, List } from 'semantic-ui-react'
import ContactInfo from './ContactInfo'

class Sidebar extends React.Component {



    render() {
        return (
            <sidebar className="center aligned">
                <Image circular style={{ width: '50%', margin: 'auto' }} src='https://avatars1.githubusercontent.com/u/25779667?s=460&u=2d1bbc4248ed3be528935bc849a0924a8ca6f6e5&v=4' />
                <Card >

                    <Card.Content>
                        <Card.Header>Burhan Özkan</Card.Header>
                        <Card.Meta>
                            <span className='date'>@broozkan__</span>
                        </Card.Meta>
                        <Card.Description>
                            Hi. I'm Burhan. I'm a full stack web developer for 5+ years.
                            I'm a developer who always want to have different views, creating something interesting and valuable.
                            <br></br>
                            <br></br>
                            For my resume <a href="/burhan_ozkan.pdf" target="_blank" download>click here</a>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <ContactInfo />
                    </Card.Content>
                </Card>
            </sidebar>

        )
    }
}

export default Sidebar