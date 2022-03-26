import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
    const display = currentUser ? (
        <div>
            <div>Hello User</div>
            <div onClick={logout}>Logout</div>
        </div>
    ) : (
        <div>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
        </div>
    );

    return (
        <div>
            {display}
        </div>
    );
}

export default Greeting;