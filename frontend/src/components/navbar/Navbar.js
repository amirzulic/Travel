import React, {useEffect, useState} from "react";
import '../navbar/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getAllTrips} from "../../services/TripService";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";

function Navbar() {
    let navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    useEffect(() => {
        setEmail(localStorage.getItem("email"));
        //setTheme(localStorage.getItem("theme"));
    });

    function handleLogOut() {
        localStorage.removeItem("email");
        localStorage.removeItem("user_type");
        localStorage.removeItem("user_id");
        setEmail(null);
        navigate("/login");
    }

    return(
        <div>
            <div>
                <nav className={"navbar navbar-expand-lg navbar-light bg-warning p-2"}>
                    <img src="https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/61091821d019d_json_image_1627985953.webp" width="30" height="30"
                         className="d-inline-block align-top" alt=""/>
                    <a className="navbar-brand" href="/">
                        <b className="p-1">TRAVEL</b>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            {email !== null ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/trips">My trips</Link>
                            </li> : null }
                            {email !== null ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/plans">Plans</Link>
                            </li> : null }
                            {email !== null ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/booking">Booking</Link>
                            </li> : null }
                            {email !== null ?
                            <li className="nav-item">
                                <Link className="nav-link" to="/settings">Settings</Link>
                            </li> : null }
                            {email !== null ?
                            <li className="nav-item">
                                <a className="nav-link" href="/booking"></a>
                            </li> : null }
                            {email !== null ?
                            <li className="nav-item">
                                <a className="nav-link" href="/booking"></a>
                            </li> : null }
                            {email !== null ?
                            <li className="nav-item">
                                <a className="nav-link" href="/booking"></a>
                            </li> : null }
                            {email === null ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li> : null }
                            {email !== null ?
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#">{email}</a>
                            </li> : null}
                            {email !== null ?
                            <li className="nav-item">
                                <a className="nav-link" onClick={handleLogOut}><b>Log Out</b></a>
                            </li> : null }
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;
