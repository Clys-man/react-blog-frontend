import { Http } from '../../config/globalConfig'
import { changeLoading } from './loading.action'
import { changeNotify } from './notify.action'

export const actionTypes = {
    GET_TOKEN: 'GET_TOKEN',
    LOGOUT: 'LOGOUT',
    LOADING: 'LOADING',
    SUCESS: 'SUCESS',
    ERROR: 'ERROR',
    CHANGE: 'CHANGE'
}

export const getToken = (token) => ({
    type: actionTypes.GET_TOKEN,
    token
})

export const removeToken = () => ({
    type: actionTypes.LOGOUT
})

export const loginSucess = bool => ({
    type: actionTypes.SUCESS,
    bool
})

export const loginError = (error) => ({
    type: actionTypes.ERROR,
    error
})

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const loading = (bool, msg = null) => ({
    type: actionTypes.LOADING,
    isLoading: {
        active: bool,
        msg: msg
    }
})

export const getUserToken = () => dispatch =>

    localStorage.getItem('acess_token')
        .then(res => {
            dispatch(loading(false))
            if (typeof res !== 'undefined') {
                dispatch(getToken(res))
            }
        })

export const getUser = () => dispatch => {
    const config = {
        headers: { Authorization: `Bearer ${getUserToken()}` }
    };

    Http.post('/api/user', config
    ).then(console.log).catch(console.log);
}


export const setUserToken = (token) => dispatch => {
    localStorage.setItem('acess_token', token)
    dispatch(loading(false))
    dispatch(loginSucess(true))
}

export const login = (credentials) => {
    return dispatch => {
        dispatch(changeLoading({
            open: true,
            msg: 'Autenticando'
        }))
        return Http.post('oauth/token', {
            grant_type: 'password',
            client_id: "2",
            client_secret: 'YRGeJQrme2XhRdda9FnoKz22GTwEAxBRAm1kt8Kg',
            username: credentials.username,
            password: credentials.password,
        }).then(res => {
            dispatch(changeLoading({
                open: false,
                msg: ''
            }))
            if (typeof res !== 'undefined') {
                dispatch(setUserToken(res.data.acess_token))
            }
        })
            .catch(error => {
                dispatch(changeLoading({
                    open: false,
                    msg: ''
                }))
                if (error.response) {
                    if (error.response.status === 401 || error.response.status === 400) {
                        dispatch(changeNotify({
                            open: true,
                            msg: 'E-Mail ou senha incorretos',
                            class: 'error'
                        }))
                    }
                } else {
                    dispatch(changeNotify({
                        open: true,
                        msg: 'Erro ao efetuar login',
                        class: 'error'
                    }))
                }
            })
    }
}


