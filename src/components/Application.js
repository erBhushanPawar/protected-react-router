import React from 'react'
import Auth from '../classes/Auth';

const Application = (props) => {
    return (
        <div>
            <p>Application</p>
            <button onClick={() => {
                Auth.logout(() => {
                    props.history.push("/")
                })
            }}>Logout</button>
        </div>
    )
}

export default Application