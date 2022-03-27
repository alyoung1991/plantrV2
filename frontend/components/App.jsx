import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PlantIndexContainer from './plant_index/plant_index_container';

const App = () => (
    <div>
        <header>
            <h1>Plantr</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/plants" component={PlantIndexContainer} />
        </Switch>
    </div>
);

export default App;