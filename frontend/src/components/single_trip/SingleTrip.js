import React, {useEffect, useState} from "react";
import '../single_trip/single_trip.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getSingleTrip} from "../../services/TripService";
import {useParams} from "react-router-dom";

function SingleTrip() {
    const [trip, setTrip] = useState(null);

    let {id} = useParams();

    useEffect(() => {
        getSingleTrip(id).then(res => {
            setTrip(res.data);
        }).catch((err) =>  {
            console.log(err);
        })
    }, [])

    return(
        <div className="container-fluid">
            <br/>
            <div className="row">
                <div className="col-2"></div>
                <div className="col">
                    <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1200px-Lower_Manhattan_skyline_-_June_2017.jpg"/>
                </div>
                <div className="col-2"></div>
            </div>
            <br/>
            <div className="row text-center">
                <div className="col"></div>
                {trip !== null ?
                    <div className="col">
                        <h1>{trip.destination}</h1>
                    </div> : null
                }
                <div className="col"></div>
            </div>
            <br/>
            <hr/>
            <div className="row text-center">
                <div className="col"></div>
                {trip !== null ?
                <div className="col">
                    <b>Price: </b>{trip.price}$
                </div> : null }
                <div className="col"></div>
            </div>
            <hr/>
            <div className="row text-center">
                <div className="col"></div>
                {trip !== null ?
                    <div className="col">
                        <b>Agency: </b>{trip.agency}
                    </div> : null }
                <div className="col"></div>
            </div>
        </div>
    );
}

export default SingleTrip;
