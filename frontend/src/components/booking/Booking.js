import React, {useState, useEffect} from "react";
import '../booking/booking.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from "react-router-dom";
import {getAllTrips} from "../../services/TripService";

function Booking() {
    let history = useNavigate();

    function handleCreateNewTripUser() {
        history("/create-trip");
    }

    const [trips, setTrips] = useState([]);

    useEffect(() => {
        getAllTrips().then(res => {
            setTrips(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    function handleCreateNewTripAgency() {}

    return(
        <div className="container-fluid">
            <br/>
            <h1 className="text-center">Active offers</h1>
            <hr/>
            <div className="row">
                <div className="col"></div>
                <div className="col text-center">
                    <button className="btn btn-outline-warning" onClick={handleCreateNewTripUser}>
                        CREATE NEW TRIP
                    </button>
                </div>
                <div className="col"></div>
            </div>
            <hr/>
            <br/>
            <div className="row">
                <div className="col"></div>
                <div className="col-10 text-center">
                    {trips !== [] ? trips.map((trip, i) =>
                    <div className="row">
                        <div className="col">
                            <img src="https://i.pinimg.com/474x/3f/48/2b/3f482b038ce81d29324cfe2d824c70a8.jpg"/>
                        </div>
                        <div className="col text-start">
                            <div className="row">
                                <div className="col">
                                    <h1 key={i} onClick={() => {history("/single-trip/" + trip.id)}}>{trip.destination}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p key={i}><b>Price: </b> {trip.price}$</p>
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
                            <div className="row">
                                <div className="col">
                                    <p key={i}>Maximum passengers is: {trip.max_passengers}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p key={i}><b>Agency: </b>{trip.agency}</p>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <hr/>
                    </div> ) : null }
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default Booking;
