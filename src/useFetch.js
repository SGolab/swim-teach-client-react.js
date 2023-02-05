import {useEffect, useState} from "react";

const API_PATH = 'http://localhost:8080'

function useFetch(url) {

    const [data, setData] = useState();

    useEffect(() => {
        const dataFetch = async () => {
            const json = await (
                await fetchData(url)
            );

            setData(json)
        }
        dataFetch()
    }, [])

    return [data];
}

export default useFetch;

export function fetchData(url) {
    return fetch(API_PATH + url, {
        'method': 'GET',
        'headers': getHeaders()
    })
        .then(content => content.json());
}

function getHeaders() {
    return new Headers({
        'Authorization': localStorage.getItem('jwtToken')
    })
}