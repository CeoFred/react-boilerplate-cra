/**
 * /* eslint-disable react/prop-types
 *
 * @format
 */

import React,{ Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
// import Layout from './containers/public/Layout/index.jsx';

import PageNotFound from './containers/Public/404'

import * as APP_URL from './config/route_url'

const Home = React.lazy(() => import('./containers/Public/index.jsx'));

function Routes(props){
    
    let routes = (
        <Switch>

        <Route exact path={APP_URL.HOME}>
            <Home />
         </Route>
            <Route component={PageNotFound} />
        </Switch>
    )
    return <React.Fragment><Suspense fallback="loading..">{routes}</Suspense></React.Fragment>
}
export default Routes;

