import React from 'react';
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from './session_form';
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to="/signup">
                <button>Sign Up</button>
            </Link>
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);