import React from 'react';

function CreateAccount () {
    return (
        <div className="w-75 m-auto">
        <form className="form-signin">
            <h1 className="h3 mb-3 font-weight-normal text-center">Create your account</h1>
            <label for="inputUsername" className="sr-only">Username</label>
            <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Username" required autofocus />
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" required />
            <label for="inputConfirmPassword" className="sr-only">Confirm Password</label>
            <input type="password" id="inputPassword" className="form-control mb-3" placeholder="Confirm Password" required />
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        </form>
    </div>
    )
}

export default CreateAccount;