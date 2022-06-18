import React from "react";
import '../new_trip/newTrip.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useFormik} from "formik";
import * as Yup from "yup";
import {createTrip} from "../../services/TripService";
import {useNavigate} from "react-router-dom";

function NewTrip() {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            destination: '',
            agency: '',
            datetime: '',
            transport: '',
            price: '',
            maxPeople: 0,
            minPeople: 0
        },
        validationSchema: Yup.object({
            agency: Yup.string().required('Required'),
            destination: Yup.string().required('Required')
        }),
        onSubmit: values => {
            let trip = {
                destination: formik.values.destination,
                agency: formik.values.agency,
                date_time: formik.values.datetime,
                transport_type: formik.values.transport,
                price: formik.values.price,
                max_passengers: formik.values.maxPeople,
                min_passengers: formik.values.minPeople,
                status: 1
            }
            createTrip(trip).then(res => {
                alert("Trip created successfully!");
                navigate("/");
                console.log(res.data);
            }).catch((err) => {
                console.log(err);
            });
        }
    })

    return(
        <div className="container-fluid">
            <br/>
            <div className="row">
                <div className="col"></div>
                <div className="col text-center">
                    <h1>CREATE YOUR TRIP</h1>
                </div>
                <div className="col"></div>
            </div>
            <br/>
            <div className="row">
                <div className="col"></div>
                <div className="col">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <label htmlFor="destination">Enter the destination</label>
                            <input
                                type="text" className="form-control" id="destination"
                                name = "destination"
                                value={formik.values.destination}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.destination && formik.errors.destination ? <div className="text-danger">{formik.errors.destination}</div> : null}
                        </div>
                        <div className="row">
                            <label htmlFor="agency">Choose the agency</label>
                            <input
                                type="text" className="form-control" id="agency"
                                name = "agency"
                                value={formik.values.agency}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.agency && formik.errors.agency ? <div className="text-danger">{formik.errors.agency}</div> : null}
                        </div>
                        <div className="row">
                            <label htmlFor="datetime">Choose the date & time</label>
                            <input
                                type="text" className="form-control" id="datetime"
                                name = "datetime"
                                value={formik.values.datetime}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="transport">Choose the transport type</label>
                            <input
                                type="text" className="form-control" id="transport"
                                name = "transport"
                                value={formik.values.transport}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="row">
                            <label htmlFor="price">Choose the maximum price</label>
                            <input
                                type="text" className="form-control" id="price"
                                name = "price"
                                value={formik.values.price}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                        </div>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="maxPeople">Maximum passengers</label>
                                <input
                                    type="number" className="form-control" id="maxPeople"
                                    name = "maxPeople"
                                    value={formik.values.maxPeople}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="minPeople">Minimum passengers</label>
                                <input
                                    type="number" className="form-control" id="minPeople"
                                    name = "minPeople"
                                    value={formik.values.minPeople}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-8 text-center">
                                <button type="submit" className="w-100 btn btn-danger">CREATE +</button>
                            </div>
                            <div className="col"></div>
                        </div>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default NewTrip;
