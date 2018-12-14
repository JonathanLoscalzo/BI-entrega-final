import Dashboard from './dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDollarList, getNgrams, getWordcounts } from './redux/actions';

const mapStateToProps = state => ({
  speechs: state.dashboard.speechs,
  wordcounts: state.dashboard.wordcounts,
  ngrams: state.dashboard.ngrams
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDollarList, getNgrams, getWordcounts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
