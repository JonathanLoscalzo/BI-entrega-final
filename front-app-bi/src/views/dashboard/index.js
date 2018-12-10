import Dashboard from './dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDollarList, getNgrams, getWordcounts } from './redux/actions';

const mapStateToProps = state => ({
  speechs: state.dashboard.speechs,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDollarList, getNgrams, getWordcounts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
