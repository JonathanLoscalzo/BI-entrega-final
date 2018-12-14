import Page from './Page';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load } from './redux/actions'

const mapStateToProps = state => ({
  wordcounts: state.wordcounts.data,
  loading: state.wordcounts.loading,
  error: state.wordcounts.error
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ load }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
