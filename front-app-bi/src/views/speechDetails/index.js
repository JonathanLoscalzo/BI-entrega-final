import SpeechDetails from './SpeechDetails';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetWordCount } from './redux/actions'

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ resetWordCount }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeechDetails);
