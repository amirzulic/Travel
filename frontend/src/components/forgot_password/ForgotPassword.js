import React, {useState} from "react";
import './forgot_password.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';

function ForgotPassword() {
    const navigate = useNavigate();

    function handleResetPassword() {
        alert("Check your email for you new password!");
        navigate("/login");
    }

    return(
        <div className="container-fluid">
            <br/>
            <div className="row text-center">
                <div className="col"></div>
                <div className="col">
                    <h1>Password Reset</h1>
                </div>
                <div className="col"></div>
            </div>
            <hr/>
            <div className="row text-center">
                <div className="col"></div>
                <div className="col">
                    <p>Please eneter your email down below!</p>
                    <p>Your new password will be delivered to the entered email!</p>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
                <div className="col"></div>
                <div className="col-4 formBackgroundLogin p-3">
                    <form onSubmit={handleResetPassword}>
                        <div className="form-group">
                            <label htmlFor="email">User email address</label>
                            <input type="email" className="form-control" id="email" name = "email"/>
                        </div>
                        <br/>
                        <button type="submit" className="btn btn-danger">SEND</button>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default ForgotPassword;
