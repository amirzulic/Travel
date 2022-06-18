import React from "react";
import axios from "axios";

const default_url = 'http://127.0.0.1:8000/api';

export const registerUser = async (user) => {
    return await axios.post(default_url + "/user/", user);
}

export const loginUser = async (user) => {
    return await axios.post(default_url + "/user-login", user)
}

export const getUser = async (id) => {
    return await axios.get(default_url + "/user/" + id);
}
