import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={props => (
        localStorage.getItem("value")
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/login' }} />
    )} />

)