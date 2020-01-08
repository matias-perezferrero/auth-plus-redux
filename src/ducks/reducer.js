import axios from "axios"

const initialState = {
    user: {},
    loggedIn: false,
    loading: false
}

const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'
const LOGIN = "LOGIN"
const SIGNUP = 'SIGNUP'

export function getUser() {
    let user = axios.get('/api/user').then(res => res.data)
    return {
        type: GET_USER,
        payload: user
    }
}

export function logout() {
    let data = axios.get('/api/logout').then(res => res.data)
    return {
        type: LOGOUT,
        payload: data
    }
}

export function login(email, password) {
    let user = axios.post('/api/login', { email, password }).then(res => res.data.userData)
    return {
        type: LOGIN,
        payload: user
    }
}

export function signup(email, password) {
    let user = axios.post('/api/signup', { email, password }).then(res => res.data.userData)
    return {
        type: SIGNUP,
        payload: user
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER + '_PENDING':
            return { ...state, loading: true }
        case GET_USER + '_REJECTED':
            return { ...state, loading: false }
        case GET_USER + '_FULFILLED':
            return { ...state, user: action.payload, loading: false, loggedIn: true }
        case SIGNUP + '_PENDING':
            return { ...state, loading: true }
        case SIGNUP + '_REJECTED':
            return { ...state, loading: false }
        case SIGNUP + '_FULFILLED':
            return { ...state, user: action.payload, loading: false, loggedIn: true }
        case LOGIN + '_PENDING':
            return { ...state, loading: true }
        case LOGIN + '_REJECTED':
            return { ...state, loading: false }
        case LOGIN + '_FULFILLED':
            return { ...state, user: action.payload, loading: false, loggedIn: true }
        case LOGOUT + '_PENDING':
            return { ...state, loading: true }
        case LOGOUT + '_REJECTED':
            return { ...state, loading: false }
        case LOGOUT + '_FULFILLED':
            return state
        default:
            return state
    }
}