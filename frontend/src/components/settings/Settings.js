import React, {useEffect, useState} from "react";
import '../settings/settings.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getUser} from "../../services/UserService";
import {getAgency} from "../../services/AgencyService";

function Settings() {
    const [edit, setEdit] = useState(0);
    const [user, setUser] = useState({});
    const [userId, setUserId] = useState(null);

    function handleEdit() {
        if(edit === 0) {
            setEdit(1);
        } else setEdit(0);
    }

    useEffect(() => {
        if(localStorage.getItem("user_type") !== null &&
           localStorage.getItem("user_type") === 'user') {
            if(localStorage.getItem("user_id") !== null) {
                setUserId(localStorage.getItem("user_id"))
                getUser(localStorage.getItem("user_id")).then(res => {
                    setUser(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
        if(localStorage.getItem("user_type") !== null &&
            localStorage.getItem("user_type") === 'agency') {
            if(localStorage.getItem("user_id") !== null) {
                setUserId(localStorage.getItem("user_id"))
                getAgency(localStorage.getItem("user_id")).then(res => {
                    setUser(res.data);
                }).catch((err) => {
                    console.log(err);
                })
            }
        }
    }, [])

    return(
        <div className="container-fluid">
            <br/>
            <div className="row">
                <div className="col text-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU"/>
                </div>
                {user !== {} ?
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h1><b>{localStorage.getItem("user_type") === 'user' ? user.first_name : user.agency_name}</b></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1>{localStorage.getItem("user_type") === 'user' ? user.last_name : "DOE: " + user.doe}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">{localStorage.getItem("user_type") === 'user' ? user.email : user.agency_email}</div>
                    </div>
                    <br/>
                    {edit === 0 ?
                    <div className="row">
                        <div className="col">{localStorage.getItem("user_type") === 'user' ? "Date of Birth" : "Employee number"}</div>
                    </div> :
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" id="dob" placeholder={localStorage.getItem("user_type") === 'user' ? "Date of Birth" : "Employee number"}/>
                        </div>
                    </div> }
                    {edit === 0 ?
                    <div className="row">
                        <div className="col">Country</div>
                    </div> :
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" id="country" placeholder="Country"/>
                        </div>
                    </div> }
                    {edit === 0 ?
                    <div className="row">
                        <div className="col">
                            {localStorage.getItem("user_type") === 'user' ? "Proffesion" : "Owner"}
                        </div>
                    </div> :
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control" id="proffesion" placeholder={localStorage.getItem("user_type") === 'user' ? "Proffesion" : "Owner"}/>
                        </div>
                        <div className="col">
                            <button className="btn btn-danger">SAVE CHANGES</button>
                        </div>
                    </div> }
                </div> : null }
                <div className="col text-end">
                    <button className="btn btn-outline-warning" onClick={handleEdit}>{edit === 0 ? "EDIT ✎" : "CLOSE X"}</button>
                </div>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="row">
                <div className="col text-center">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSmojUgwjIB87c4Q0hLCAyl__oiTySWGWJUZtUNHlHjBALLzTsu_vMHYMaEwLts4QEoo&usqp=CAU"/>
                </div>
                <div className="col">
                    <div className="row">
                        <div className="col">
                            <h1>Student: <b>Amir</b></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h1>Zulic</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">zulicic0@gmail.com</div>
                    </div>
                    <br/>
                        <div className="row">
                            <div className="col"><b>Web programiranje II</b></div>
                        </div>
                        <div className="row">
                            <div className="col"><b>Profesor:</b> Adis Alihodžić</div>
                        </div>
                        <div className="row">
                            <div className="col"><b>Asistent:</b> Eldina Delalić</div>
                        </div>
                </div>
                <div className="col text-end"></div>
            </div>
        </div>
    );
}

export default Settings;
