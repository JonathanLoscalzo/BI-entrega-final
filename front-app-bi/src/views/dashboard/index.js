import Dashboard from './dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProductsList } from './redux/actions';

const mapStateToProps = state => ({
  products: state.listing.products,
  error: state.listing.error
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getProductsList }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
