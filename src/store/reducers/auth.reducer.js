import { actionTypes } from '../actions/auth.actions'
import initialState from './initialState'

const authReducer = (state = initialState.auth, action) => {
    switch (action.type) {
        case actionTypes.CHANGE:
            return {
                ...state,
                credentials: {
                    ...state.credentials,
                    ...action.payload
                }
            }
        case actionTypes.SUCESS:
            return {
                ...state,
                sucess: action
            }
        case actionTypes.GET_TOKEN:
            return {
                ...state,
                ...action.token
            }

        default:
            return state
    }
}

export default authReducer