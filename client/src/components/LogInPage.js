import React from 'react';

function LogInPage () {
    return (
        <div className="w-75 m-auto">
            <form className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal text-center">Please log in</h1>
                <label className="sr-only">Email address</label>
                <input type="email" id="inputEmail" className="form-control mb-3" placeholder="Email address" required />
                <label className="sr-only">Password</label>
                <input type="password" id="inputPassword" className="form-control mb-3" placeholder="Password" required />
                <div className="checkbox mb-3">
                    <label>
                    <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
            </form>
        </div>
    )
}

export default LogInPage;