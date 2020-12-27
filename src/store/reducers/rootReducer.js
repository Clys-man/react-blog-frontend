import { combineReducers } from 'redux';

import authReducer from './auth.reducer'
import homeReducer from './home.reducer'
import loadingReducer from './loading.reducer'
import notifyReducer from './notify.reducer'
import registerReducer from './register.reducer'


const rootReducer = combineReducers({
    authReducer,
    homeReducer,
    loadingReducer,
    notifyReducer,
    registerReducer
})

export default rootReducer;