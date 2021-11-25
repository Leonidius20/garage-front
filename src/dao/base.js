import {API} from "../index";
import {authKeyExists, getAuthKey} from "./authKey";
import errorPageTemplate from "../errorpage/errorTemplate";

function fetchFromEndpoint(endpoint, method, data) {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    if (authKeyExists()) {
        headers['Authorization'] = `Bearer ${getAuthKey()}`;
    }

    const fetchParams = {method, headers};
    if (data) fetchParams.body = JSON.stringify(data);

    return fetch(API + endpoint, fetchParams)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        });
}

export function getFromEndpoint(endpoint) {
    return fetchFromEndpoint(endpoint, 'GET');
}

export function postToEndpoint(endpoint, data) {
    return fetchFromEndpoint(endpoint, 'POST', data);
}

export function deleteFromEndpoint(endpoint) {
    return fetchFromEndpoint(endpoint, 'DELETE');
}

export function patchEndpoint(endpoint, data) {
    return fetchFromEndpoint(endpoint, 'PATCH', data);
}