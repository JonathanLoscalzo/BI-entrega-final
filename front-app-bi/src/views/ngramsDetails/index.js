import Page from './Page';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from './redux/actions'

const mapStateToProps = state => ({
  ngrams: state.ngrams.data,
  loading: state.ngrams.loading,
  error: state.ngrams.error
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ load }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
