import React, { Component } from 'react'
import { Container, Grid, Menu } from 'semantic-ui-react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import About from './About'
import Contact from './Contact'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Projects from './Projects'

class MainContainer extends React.Component {


    render() {
        return (
            <Container>
                <Grid stackable celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Sidebar />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <BrowserRouter>
                                <Navbar />

                                <Switch>
                                    <Route path="/" exact >
                                        <Projects />
                                    </Route>
                                    <Route path="/projects" >
                                        <Projects />
                                    </Route>
                                    <Route path="/contact" >
                                        <Contact />
                                    </Route>
                                </Switch>
                            </BrowserRouter>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Container>
        )
    }

}

export default MainContainer