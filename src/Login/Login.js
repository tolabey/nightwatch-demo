import React from "react";

export default class Login extends React.Component {

    render() {
        return(
            <div id="login">
                <div>
                    <div>{"User Name"}</div>
                    <input type="text" placeholder="User Name"/>
                </div>
                <div>
                    <div>{"Password"}</div>
                    <input type="password"/>
                </div>

                <button>{"Log-in"}</button>
            </div>
        )
    }
}