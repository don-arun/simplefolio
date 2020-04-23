import React from 'react';
import '../login/login.css';

const Register =({onRouteChange}) => {
    return(
        <div className="container">
            <div className="layout">
                <div className="cent">
                    <div>
                        <h1>REGISTER</h1>
                    </div>
                    <div>
                        <input type="text" name="username" placeholder="username" className="input" ></input>
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="email" className="input" ></input>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="password" className="input" ></input>
                    </div>
                    <div>
                        <button type="button" className="btn" onClick={() =>onRouteChange('Home')}>register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;