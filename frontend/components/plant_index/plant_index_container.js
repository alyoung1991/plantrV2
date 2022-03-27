import { connect } from "react-redux";
import { fetchPlants } from "../../actions/plant_actions";
import PlantIndex from './plant_index';

const mapStateToProps = (state) => ({
    plants: Object.values(state.entities.plants)
});

const mapDispatchToProps = (dispatch) => ({
    fetchPlants: () => dispatch(fetchPlants())
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantIndex);