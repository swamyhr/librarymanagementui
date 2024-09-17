import { baseUrl } from "./baseUrl"

export const registerUser = (userDetails) => {

    console.log("register called ");

    return fetch(`${baseUrl}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    })
}

export const login = (userDetails) => {

    console.log("User details for login ", userDetails);

    return fetch(`${baseUrl}/users/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
    })

}
