import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            query: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateFilter(this.state.query);
    }

    handleInput(){
        return (e) => {
            this.setState({ query: e.target.value });
        }
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.query} onChange={this.handleInput()} />
                    <button>Search Plants</button>
                </form>
            </div>
        );
    }
}

export default SearchBar;