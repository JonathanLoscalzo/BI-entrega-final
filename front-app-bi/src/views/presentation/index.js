import Page from './Page';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from './redux/actions'

const mapStateToProps = state => ({
  common: state.common.data,
  loading: state.common.loading,
  error: state.common.error
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ load }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
