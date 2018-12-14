import Page from './Page';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { load, getNgrams, getWordcounts } from './redux/actions'

const mapStateToProps = state => ({
  common: state.common.data,
  ngrams: state.common.ngrams,
  wordcounts: state.common.wordcounts,
  loading: state.common.loading,
  error: state.common.error
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ load, getNgrams, getWordcounts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);
