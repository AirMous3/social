import React from "react";

export const Login = () => {
    return (
        <div>
            <h1>
                Login
            </h1>
            <LoginForm />
        </div>
    )
}

const LoginForm = () => {
    return (
        <form >
            <div>
                <input type="text" placeholder={"your login"} />
            </div>
            <div>
                <input type="text" placeholder={"your password"} />
            </div>
            <div>
                <input type="checkBox" /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}