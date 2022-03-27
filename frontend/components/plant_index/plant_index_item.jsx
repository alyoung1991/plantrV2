import React from 'react';

class PlantIndexItem extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const { name, family, age, last_watered } = this.props.plant;
        const lastWateredDate = new Date(last_watered).toDateString();
        return (
            <div>
                <h3>{name}</h3>
                <div>Family: {family}</div>
                <div>Age: {age}</div>
                <div>Last Watered: {lastWateredDate}</div>
            </div>
        );
    }
}

export default PlantIndexItem;