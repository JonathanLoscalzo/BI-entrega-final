import Dashboard from './dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDollarList } from './redux/actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getDollarList }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
