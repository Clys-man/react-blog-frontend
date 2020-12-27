
import Axios from 'axios'
import {useState} from 'react'

export const API_KEY = "";
export const rootUrl = ""
export const baseUrl = ""

const basicFetch = async (endpoint) => {
    return (await fetch(`${rootUrl}${endpoint}`)).json();
}

export const Http = Axios.create({
    baseURL: rootUrl
})

export const getPostList = () => {
    return basicFetch(`api/posts?clientId=${API_KEY}`)
}

export const getTagList = () => {
    return basicFetch(`api/tags?clientId=${API_KEY}`)
}

