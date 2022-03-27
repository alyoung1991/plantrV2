import { connect } from "react-redux";
import { updateFilter } from "../../actions/filter_actions";
import Search from './search';

const mapStateToProps = (state) => ({
    plants: Object.values(state.entities.plants)
});

const mapDispatchToProps = (dispatch) => ({
    updateFilter: (query) => dispatch(updateFilter(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);