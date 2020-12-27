import { Http, API_KEY } from '../../config/globalConfig'
import { changeLoading } from './loading.action'
import { changeNotify } from './notify.action'

export const actionTypes = {
    CHANGE: 'CHANGE',
    CREATE_ERROR: 'ERROR',
    CREATE_SUCESS: 'SUCESS',
}

export const changeValue = (payload) => ({
    type: actionTypes.CHANGE,
    payload
})

export const createPostError = (payload) => ({
    type: actionTypes.CREATE_ERROR,
    payload
})
export const createPostSucess = (payload) => ({
    type: actionTypes.CREATE_SUCESS,
    payload
})

export const createPost = (data) => {
    return dispatch =>{
        dispatch(changeLoading({
            open: true,
            msg: 'Criando post'
        }))
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('acess_token')}` }
        };
        
        const bodyParameters = {
           title: data.title,
           content: data.content,
           tags: data.tags[0],
        };
        
        return Http.post( `api/posts?clientId=${API_KEY}`,
          bodyParameters,
          config
        ).then(res =>{
            dispatch(changeLoading({
                open: false,
            }))
            dispatch(changeNotify({
                open: true,
                msg: 'Post criado com sucesso!',
                class: 'sucess'
            }))
            dispatch(createPostSucess(true))
        }).catch(error =>{
            dispatch(changeNotify({
                open: true,
                msg: 'Erro ao criar o post',
                class: 'error'
            }))
            dispatch(changeLoading({
                open: false,
            }))
        })
    }
}



