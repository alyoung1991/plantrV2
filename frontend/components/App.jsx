import React from 'react';
import { Routes, Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

const App = () => (
    <div>
        <header>
            <h1>Plantr</h1>
            <GreetingContainer />
        </header>
        <Routes>
            <Route path="/login" element={<LoginFormContainer />} />
            <Route path="/signup" element={<SignupFormContainer />} />
        </Routes>
    </div>
);

export default App;