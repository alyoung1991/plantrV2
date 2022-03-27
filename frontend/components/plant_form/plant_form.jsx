import React from 'react';
import { withRouter } from 'react-router-dom';

class PlantForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            family: '',
            age: 0,
            lastWatered: new Date().toDateString()
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        // const plant = Object.assign({}, this.state, {
        //     owner_id: this.props.currentUser.id
        // });

        this.props.createPlant(this.state);
        this.props.history.push("/");
    }

    handleInput(field){
        return (e) => this.setState({ [field]: e.target.value });
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name:
                        <input type="text" onChange={this.handleInput('name')} value={this.state.name} />
                    </label>
                    <label>Family:
                        <input type="text" onChange={this.handleInput('family')} value={this.state.family} />
                    </label>
                    <label>Age:
                        <input type="number" onChange={this.handleInput('age')} value={this.state.age} />
                    </label>
                    <label>Last Watered:
                        <input type="date" onChange={this.handleInput('lastWatered')} value={this.state.lastWatered} />
                    </label>
                    <div>
                        <input type="submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(PlantForm);