import React, { Component} from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import {Menu} from 'semantic-ui-react'

function MenuLink({ label, to, activeOnlyWhenExact }) {
    let match = useRouteMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
        <Menu.Item active={match} >
            <Link to={to}>{label}</Link>
        </Menu.Item>
        
    );
  }

export default MenuLink