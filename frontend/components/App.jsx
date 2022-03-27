import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRouted } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SearchContainer from './search/search_container';
import PlantFormContainer from './plant_form/plant_form_container';

const App = () => (
    <div>
        <header>
            <h1>Plantr</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={SearchContainer} />
            <ProtectedRouted exact path="/plants/new" component={PlantFormContainer} />
        </Switch>
    </div>
);

export default App;