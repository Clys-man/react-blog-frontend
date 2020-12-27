import React, { Suspense, lazy, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import CircularProgress from './components/CircularProgress'

const Login = lazy(() => import('./view/login'))
const Register = lazy(() => import('./view/register'))
const Home = lazy(() => import('./view/home/'))

const token = localStorage.getItem('acess_token')
const PrivateRoutes =  ({component: Component, ...rest}) =>(
    <Route {...rest} render={props => (
        token ? (<Component {...props} />) : (<Redirect to={{pathname: '/login', state: {from: props.locotaion}}} />)
    )} />
)

class routes extends Component {
    render() {
        return (
            <Router>
                <Suspense fallback={<div className="mt-5 pt-5"><CircularProgress /></div>}>
                    <Switch>
                        <Route exact path='/login' component={Login} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/' component={Login} />
                        <PrivateRoutes path="/home" component={Home} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

export default routes;