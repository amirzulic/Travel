import React from "react";
import axios from "axios";

const default_url = 'http://127.0.0.1:8000/api';

export const registerAgency = async (agency) => {
    return await axios.post(default_url + "/agency/", agency);
}

export const loginAgency = async (agency) => {
    return await axios.post(default_url + "/agency-login", agency)
}

export const getAgency = async (id) => {
    return await axios.get(default_url + "/agency/" + id);
}
