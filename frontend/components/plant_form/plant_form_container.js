import { connect } from "react-redux";
import PlantForm from './plant_form';
import { createPlant } from "../../actions/plant_actions";

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = (dispatch) => ({
    createPlant: plant => dispatch(createPlant(plant))
});

export default connect(mapStateToProps, mapDispatchToProps)(PlantForm);