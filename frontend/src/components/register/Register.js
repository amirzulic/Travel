import React, {useState} from "react";
import '../register/register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFormik} from "formik";
import * as Yup from 'yup';
import {registerUser} from "../../services/UserService";
import {registerAgency} from "../../services/AgencyService";
import {useNavigate} from "react-router-dom";

function Register() {
    let navigate = useNavigate();

    const [form, setForm] = useState(1);

    const formik = useFormik({
        initialValues: {
            fname: '',
            lname: '',
            email: '',
            password: '',
            rpassword: '',
            agency_name: '',
            agency_email: '',
            doe: '',
            apassword: '',
            arpassword: ''

        },
        validationSchema: Yup.object({
            email: form === 1 ? Yup.string().email('Invalid email address').required('Required') : null,
            password: form === 1 ? Yup.string()
                .min(8, 'Must be 8 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required') : null,
            rpassword: form === 1 ? Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match') : null,
            agency_email: form === 2 ? Yup.string().email('Invalid email address').required('Required') : null,
            apassword: form === 2 ? Yup.string()
                .min(8, 'Must be 8 characters or more')
                .max(15, 'Must be 15 characters or less')
                .required('Required') : null,
            arrpassword: form === 2 ? Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match') : null
        }),
        onSubmit: values => {
            let user = {
                first_name: formik.values.fname,
                last_name: formik.values.lname,
                email: formik.values.email,
                password: formik.values.password
            }

            let agency = {
                agency_name: formik.values.agency_name,
                agency_email: formik.values.agency_email,
                doe: formik.values.doe,
                password: formik.values.apassword
            }

            if(form === 1) {
                registerUser(user).then(res => {
                    console.log(res.data);
                    alert("You have successfully registered!");
                    navigate("/login")
                }).catch((err) => {
                    console.log(err);
                })
            } else {
                registerAgency(agency).then(res => {
                    console.log(res.data);
                    alert("You have successfully registered your agency!");
                    navigate("/login")
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    })

    function handleShowForm(e) {
        setForm(e);
    }

    return(
        <div className="container-fluid">
            <br/>
            <div className="row">
                <h1 className="textWelcomeRegister">
                    <b>Welcome to the Travel register page</b>
                </h1>
                <br/>
                <h2 className="textTitleRegister">
                    Please enter your information in the form below!
                </h2>
                <br/>
                <br/>
                <h3 className="textInfoRegister">
                    We will never share your information and all your data is safe with us
                </h3>
                <div className="row text-center">
                    <div className="col"></div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-warning" onClick={() => {handleShowForm(1)}}>REGISTER AS USER</button>
                            </div>
                            <div className="col">
                                <button className="btn btn-warning" onClick={() => {handleShowForm(2)}}>REGISTER AS AGENCY</button>
                            </div>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col"></div>
                <div className="col-4 formBackgroundRegister p-3">
                    {form === 1 ?
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="fname">First Name</label>
                                <input
                                    type="text" className="form-control" id="fname"
                                    name = "fname"
                                    value={formik.values.fname}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lname">Last Name</label>
                                <input
                                    type="text" className="form-control" id="lname"
                                    name = "lname"
                                    value = {formik.values.lname}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
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
                            <div className="form-group">
                                <label htmlFor="rpassword">Repeat password</label>
                                <input
                                    type="password" className="form-control" id="rpassword"
                                    name = "rpassword"
                                    value={formik.values.rpassword}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.rpassword && formik.errors.rpassword ? <div className="text-danger">{formik.errors.rpassword}</div> : null}
                            </div>
                            <div className="row"><br/></div>
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </form> :
                        <form onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="agency_name">Agency name</label>
                                <input
                                    type="text" className="form-control" id="agency_name"
                                    name = "agency_name"
                                    value={formik.values.agency_name}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="agency_email">Email address</label>
                                <input
                                    type="email" className="form-control" id="agency_email"
                                    name = "agency_email"
                                    value={formik.values.agency_email}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.agency_email && formik.errors.agency_email ? <div className="text-danger">{formik.errors.agency_email}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="doe">Date of establishment</label>
                                <input
                                    type="text" className="form-control" id="doe"
                                    name = "doe"
                                    value={formik.values.doe}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password" className="form-control" id="apassword"
                                    name = "apassword"
                                    value={formik.values.apassword}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                                {formik.touched.apassword && formik.errors.apassword ? <div className="text-danger">{formik.errors.apassword}</div> : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="rpassword">Repeat password</label>
                                <input
                                    type="password" className="form-control" id="arpassword"
                                    name = "arpassword"
                                    value={formik.values.arpassword}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="row"><br/></div>
                            <button type="submit" className="btn btn-danger">Submit</button>
                        </form>
                    }
                </div>
                <div className="col"></div>
            </div>
            <br/>
        </div>
    );
}

export default Register;
