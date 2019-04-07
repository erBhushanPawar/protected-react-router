import React from 'react'
import auth from '../classes/Auth'

const LoginPage = (props) => {
    return (
        <div>
            <button onClick={() => {
                auth.login(() => {
                    localStorage.setItem("user", "Bhushan")
                    props.history.push("/app")
                })
            }}>Login</button>
        </div>
    )
}

export default LoginPage