import React, { Component, useReducer } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link, useRouteMatch } from 'react-router-dom'
import MenuLink from './MenuLink'

const Navbar = () => {

    let match = useRouteMatch()
    console.log(match);

    return (
        <Menu>
     
     
            <Menu.Item
                name='projects'
                as={MenuLink}
                to="/projects"
                label="Projects"
            >

            </Menu.Item>

            <Menu.Item
                name='contact'
                as={MenuLink}
                to="/contact"
                label="Contact"
            >

            </Menu.Item>
        </Menu>



    )

}

export default Navbar