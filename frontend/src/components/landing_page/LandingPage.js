import React, {useEffect, useState} from "react";
import './landingPage.css';
import ReactMapboxGl, {Layer, Feature, Popup} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {useNavigate} from "react-router-dom";
import {getAllTrips} from "../../services/TripService";

function LandingPage() {
    let navigate = useNavigate();

    const [previousTrips, setPreviousTrips] = useState([]);

    function handleSelectTrip(id) {
        console.log(id);
        navigate("/trip/" + id);
    }

    useEffect(() => {
        getAllTrips().then(res => {
            setPreviousTrips(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoienVsaWNhbWlyIiwiYSI6ImNrampiYjF2NjJxcDkzMXNja3dvNnAzZjYifQ.0Dl5T2OlkMmbszwdAVKxKw'
    });

    return(
        <div className="container-fluid">
            <br/>
            <div className="row">
                <div className="col text-center">
                    <h1>Welcome to <b>TRAVEL!</b></h1>
                    <h2>The number one traveling system</h2>
                    <br/>
                    <br/>
                    <br/>
                    <h3><i>Checkout our latest trips on the maps</i></h3>
                </div>
                <div className="col text-center">
                    <Map style="mapbox://styles/mapbox/streets-v9"
                        containerStyle={{
                            height: '500px',
                            width: '500px'
                        }}>
                        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                            <Feature coordinates={[43.89222541215901, 18.357414838037275]} />
                        </Layer>
                    </Map>
                </div>
            </div>
            <div className="row">
                <div className="row">
                    <br/>
                </div>
                <hr/>
                <div className="col"></div>
                <div className="col text-center">
                    <h1>Previous trips</h1>
                    <br/>
                    <select className="form-select">
                        <option selected >Open to see previous trips</option>
                        {previousTrips !== [] ? previousTrips.map((trip, i) =>
                            <option key={i}>{trip.destination}</option>
                        ): null}
                    </select>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default LandingPage;
