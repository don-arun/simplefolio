import React from 'react';
import './login.css';

const Login = ({ onInputChange,onRouteChange }) => {
    return(
        <div className="container">
            <div className="layout">
                <div>
                    <h1>LOGIN</h1>
                </div>
                <div>
                    <input type="text" name="username" placeholder="username" className="input" onChange={onInputChange}></input>
                </div>
                <div>
                    <input type="password" name="password" placeholder="password" className="input" ></input>
                </div>
                <div>
                   <button type="button" className="btn" onClick={() =>onRouteChange('Home')} >login</button>    
                </div>
                <div>
                    <p>Are you new to Here! <span onClick = {() => onRouteChange('Register') }>Register</span></p>
                </div>
            </div>
        </div>  
    );  
}

export default Login;