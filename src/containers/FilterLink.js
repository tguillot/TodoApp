import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

/* checks if button is clicked to disable that one*/
const mapStateToProps = (state, ownProps) => {
    return ({
    active: ownProps.filter === state.visibilityFilter
})}

/*on click of the footer, the filter is set to the option clicked, and 
the reducer set visibility is called to set it */
const mapDispatchToProps = (dispatch,ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

/* connected to Link component */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)