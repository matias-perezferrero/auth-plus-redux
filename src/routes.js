import { Route, Switch } from 'react-router-dom'
import React from 'react'
import Home from './Home'
import Login from './Login'

export default (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
    </Switch>
)