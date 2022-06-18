import React, {useEffect, useState} from "react";
import '../plans/plans.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getAllTrips, deleteTrip} from "../../services/TripService";
import {useNavigate} from "react-router-dom";


function Plans() {
    const [trips, setTrips] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        getAllTrips().then(res => {
            setTrips(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    function handleDeletePlan(id) {
        deleteTrip(id).then(res => {
            console.log(res.data);
            alert("Plan deleted!");
            navigate("/");
        }).catch((err) => {
            console.log(err);
        })
    }

    return(
        <div className="container-fluid">
            <br/>
            <h1 className="text-center">Trip plans</h1>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Choose a sorting option</option>
                        <option value="1">By date</option>
                        <option value="2">By price</option>
                    </select>
                </div>
                <div className="col"></div>
            </div>
            <hr/>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="🔍  Search"/>
                    </form>
                </div>
                <div className="col"></div>
            </div>
            <hr/>
            { trips !== null ? trips.map((trip, i) =>
            <div className="row">
                <div className="col">
                    <h1>Active</h1>
                </div>
                <div className="col-10 text-center">
                    <div className="row">
                        <div className="col">
                            <img src="https://i.pinimg.com/474x/3f/48/2b/3f482b038ce81d29324cfe2d824c70a8.jpg"/>
                        </div>
                        <div className="col text-start">
                            <div className="row">
                                <div className="col">
                                    <h1 key={i} onClick={() => {navigate("/single-trip/" + trip.id)}}>{trip.destination}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p key={i}><b>Price: </b>{trip.price}$</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p key={i}><b>Date: </b>{trip.date_time}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p key={i}><b>Transport: </b>{trip.transport_type}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <button className="btn btn-danger" onClick={() => {handleDeletePlan(trip.id)}} key={i}>DELETE</button>
                </div>
                <div className="row"><br/></div>
                <hr/>
            </div> ) : null }
        </div>
    );
}

export default Plans;
