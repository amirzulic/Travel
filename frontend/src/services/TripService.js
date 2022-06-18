import React from "react";
import axios from "axios";

const default_url = 'http://127.0.0.1:8000/api';

export const getAllTrips = async () => {
    return await axios.get(default_url + "/trip/");
}

export const getSingleTrip = async (id) => {
    return await axios.get(default_url + "/trip/" + id)
}

export const deleteTrip = async (id) => {
    return await axios.delete(default_url + "/trip/" + id);
}

export const createTrip = async (trip) => {
    return await axios.post(default_url + "/trip/", trip);
}
