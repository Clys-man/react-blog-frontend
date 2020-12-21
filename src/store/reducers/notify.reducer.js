import { actionTypes } from '../actions/notify.action'
import initialState from './initialState'

export default (state = initialState.notify, { type, payload }) => {
    switch (type) {

    case actionTypes.CHANGE_NOTIFY:
        return { 
            ...state, 
            ...payload 
        }

    default:
        return state
    }
}
