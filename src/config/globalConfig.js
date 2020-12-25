
import Axios from 'axios'

export const API_KEY = "" //exemplo: 8d68a5f8daf89dsa86f8asd7f65
export const rootUrl = "" //exemplo: https://pa-desafio.herokuapp.com/
export const baseUrl = "" //exemplo: http://localhost:3000/

const basicFetch = async (endpoint) => {
    return (await fetch(`${rootUrl}${endpoint}`)).json();
}

export const Http = Axios.create({
    baseURL: rootUrl
})

export const getPostList = () => {
    return basicFetch(`api/posts?clientId=${API_KEY}`)
}

