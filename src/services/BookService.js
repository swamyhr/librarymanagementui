import { baseUrl } from "./baseUrl";

export const saveNewBook = (newBookDetails) => {
    return fetch(`${baseUrl}/books`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBookDetails)
    })
}
