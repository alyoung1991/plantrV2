import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout } from './actions/session_actions';
import { fetchPlants } from './actions/plant_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store;

    if(window.currentUser){
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }else{
        store = configureStore();
    }

    // START TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.fetchPlants = fetchPlants;
    // END TESTING

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});