/* eslint-disable */
import React from 'react'
import { Router, Route, IndexRoute,/* , Redirect */ } from 'react-router'
import { createHashHistory } from 'history'

import Login from '@/pages/login'

const hashHistory = createHashHistory()
// no-unused-expressions
export default () => {
    return (
        <Router history={hashHistory}>
            <Route path='/' component={Login}></Route>
        </Router>
    )
}