import { Http } from '../../config/globalConfig'
import {changeLoading} from './loading.action'
import {changeNotify} from './notify.action'
import {setUserToken} from './auth.actions'

export const actionTypes = {
    CHANGE: 'CHANGE',
    SUCESS: 'SUCESS',
    ERROR: 'ERROR'
}

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const registerError = (payload) => ({
    type: actionTypes.ERROR,
    payload
})

export const sucess = (payload) => ({
    type: actionTypes.SUCESS,
    payload
})

export const registerUser = (data) => {
    return dispatch => {
        dispatch(changeLoading({
            open: true,
            msg: 'Registrando Usuário'
        }))
        return Http.post('oauth/register?clientId=YRGeJQrme2XhRdda9FnoKz22GTwEAxBRAm1kt8Kg', data)
        .then(res => {
            dispatch(changeLoading({
                open: false
            }))
            if(typeof res !== 'undefined'){
                
                if(res.data.error){
                    dispatch(registerError(res.data.error))
                }
                if(res.data.token){
                    dispatch(changeNotify({
                        open: true,
                        msg: 'Usuário cadastrado com sucesso',
                        class: 'sucess'
                    }))
                    dispatch(setUserToken(res.data.token))
                    dispatch(sucess(true))
                }
            }
        })
        .catch(() =>{
            dispatch(changeLoading({
                open: false
            }))
            dispatch(changeNotify({
                open: true,
                msg: 'Erro ao cadastrar usuário',
                class: 'error'
            }))
        })
    }
} 