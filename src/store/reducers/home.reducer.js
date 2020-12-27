import { actionTypes } from '../actions/home.actions'
import initialState from './initialState'

const authReducer = (state = initialState.home, { type, payload }) => {
    switch (type) {
        case actionTypes.CHANGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...payload
                }
            }
        case actionTypes.CREATE_SUCESS:
            return {
                ...state,
                sucess: payload
            }
        case actionTypes.CREATE_ERROR:
            return {
                ...state,
                error: payload
            }
        case actionTypes.GET_POST_ERROR:
            return {
                ...state,
                error: payload
            }
        case actionTypes.GET_POST_SUCESS:
            return {
                ...state,
                post: [
                    payload
                ]
            }

        default:
            return state
    }
}

export default authReducer