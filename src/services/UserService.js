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

