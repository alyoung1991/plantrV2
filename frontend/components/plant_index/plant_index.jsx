import React from 'react';
import PlantIndexItem from './plant_index_item';

class PlantIndex extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                {this.props.plants.map(plant => (
                    <PlantIndexItem key={plant.id} plant={plant} />
                ))}
            </div>
        )
    }
}

export default PlantIndex;