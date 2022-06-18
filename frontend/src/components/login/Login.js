import React, {useState} from "react";
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {loginUser} from "../../services/UserService";
import {loginAgency} from "../../services/AgencyService";

function Login() {
    let navigate = useNavigate();

    const [showForm, setShowForm] = useState(1);

    function handleShowForm(num) {
        setShowForm(num);
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            aemail: '',
            apassword: ''
        },
        validationSchema: Yup.object({
            email: showForm === 1 ? Yup.string().email('Invalid email address').required('Required') : null,
            password: showForm === 1 ? Yup.string()
                .min(8, 'Must be 8 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required') : null,
            aemail: showForm === 2 ? Yup.string().email('Invalid email address').required('Required') : null,
            apassword: showForm === 2 ? Yup.string()
                .min(8, 'Must be 8 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required') : null
        }),
        onSubmit: values => {
            const user = new FormData();
            user.append('email', formik.values.email);
            user.append('password', formik.values.password);
            const agency = new FormData();
            agency.append('email', formik.values.aemail);
            agency.append('password', formik.values.apassword)
            if(showForm === 1) {
                loginUser(user).then(res => {
                    alert("Successfully logged in!")
                    localStorage.setItem('email', formik.values.email);
                    localStorage.setItem('user_id', res.data.id);
                    localStorage.setItem('user_type', res.data.user_type);
                    navigate("/");
                }).catch((err) => {
                    alert("Login unsuccessfull!");
                    console.log(err);
                })
            }
            if(showForm === 2) {
                loginAgency(agency).then(res => {
                    alert("Successfully logged in!")
                    localStorage.setItem('email', formik.values.aemail);
                    localStorage.setItem('user_id', res.data.id);
                    localStorage.setItem('user_type', res.data.user_type);
                    navigate("/");
                    console.log(res.data);
                }).catch((err) => {
                    alert("Login unsuccessfull!");
                    console.log(err);
                })
            }
        }
    })

    function handleForgotPassword() {
        navigate("/forgot-password");
    }

    function handleShowRegister() {
        navigate("/register");
    }

    return(
        <div className="container-fluid">
            <div><br/></div>
            <div className="row">
                <h1 className="textWelcomeLogin">
                    <b>Welcome to the Travel log in page</b>
                </h1>
                <br/>
                <h2 className="textTitleLogin">
                    Please enter your account information below!
                </h2>
                <button className="btn btn-outline-warning" onClick={handleShowRegister}>
                    Don't have an account? Register for free!
                </button>
            </div>
            <br/>
            <div className="row text-center">
                <div className="col-4"></div>
                <div className="col">
                    <button className="btn btn-warning" onClick={() => {handleShowForm(1)}}>LOGIN AS USER</button>
                </div>
                <div className="col">
                    <button className="btn btn-warning" onClick={() => {handleShowForm(2)}}>LOGIN AS AGENCY</button>
                </div>
                <div className="col-4"></div>
            </div>
            <br/>
            {showForm === 1 ?
            <div className="row">
                <div className="col"></div>
                <div className="col-4 formBackgroundLogin p-3">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">User email address</label>
                            <input
                                type="email" className="form-control" id="email"
                                name = "email"
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password" className="form-control" id="password"
                                name = "password"
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                        </div>
                        <div className="row">
                            <p className="textResetPwLogin" onClick={handleForgotPassword}>Forgot your password?</p>
                            <br/>
                        </div>
                        <button type="submit" className="btn btn-danger">Submit</button>
                    </form>
                </div>
                <div className="col"></div>
            </div> :
                <div className="row">
                    <div className="col"></div>
                    <div className="col-4 formBackgroundLogin p-3">
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="email">Agency email address</label>
                                <input
                                    type="email" className="form-control" id="email"
                                    name = "aemail"
                                    value={formik.values.aemail}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.aemail && formik.errors.aemail ? <div className="text-danger">{formik.errors.aemail}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password" className="form-control" id="password"
                                    name = "apassword"
                                    value={formik.values.apassword}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.apassword && formik.errors.apassword ? <div className="text-danger">{formik.errors.apassword}</div> : null}
                            </div>
                            <div className="row">
                                <p className="textResetPwLogin" onClick={handleForgotPassword}>Forgot your password?</p>
                                <br/>
                            </div>
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </form>
                    </div>
                    <div className="col"></div>
                </div>
            }
            <div><br/></div>
        </div>
    );
}

export default Login;
