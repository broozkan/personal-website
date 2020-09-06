import React, { Component } from 'react'
import { List } from 'semantic-ui-react'

class ContactInfo extends React.Component {



    render() {
        return (

            <List>
                
                <List.Item>
                    <List.Icon name='marker' />
                    <List.Content>Sivas, Turkey</List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='mail' />
                    <List.Content>
                        <a target="_blank" href='mailto:bro@broozkan.com'>bro@broozkan.com</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='github' />
                    <List.Content>
                        <a target="_blank" href='https://github.com/broozkan'>github.com/broozkan</a>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name='linkedin' />
                    <List.Content>
                        <a target="_blank" href='https://linkedin.com/in/broozkan/'>linkedin.com/in/broozkan/</a>
                    </List.Content>
                </List.Item>
            </List>


        )
    }
}

export default ContactInfo