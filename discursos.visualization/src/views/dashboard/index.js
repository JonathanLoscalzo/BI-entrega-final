import Dashboard from './dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDollarList, getNgrams, getWordcounts, handleMaxDate, handleMinDate } from './redux/actions';

const mapStateToProps = state => ({
  speechs: state.dashboard.speechs,
  wordcounts: state.dashboard.wordcounts,
  ngrams: state.dashboard.ngrams,
  minDate: state.dashboard.minDate, 
  maxDate: state.dashboard.maxDate
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getDollarList,
    getNgrams,
    getWordcounts,
    handleMaxDate,
    handleMinDate
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
