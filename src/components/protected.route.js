import React from "react";
import { Route, Redirect } from 'react-router-dom'
import Auth from "../classes/Auth";


export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render={props => {
                if (Auth.isAuth()) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={
                        {
                            pathname: "/login", state: {
                                from: props.location
                            }
                        }
                    }></Redirect>
                }
            }}
        ></Route>
    )
}