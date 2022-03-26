import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            name: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                  <li key={`error-${i}`}>
                      {error}
                  </li>  
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    {this.renderErrors()}
                </form>
                {this.props.navLink}
            </div>
        );
    }
}

export default SessionForm;