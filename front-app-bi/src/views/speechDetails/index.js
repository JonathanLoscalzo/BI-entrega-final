import SpeechDetails from './SpeechDetails';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { resetWordCount } from './redux/actions'

const mapStateToProps = state => {
  return {
    speech: state.speechDetail.speech,
    wordcounts: state.speechDetail.wordcounts,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ resetWordCount }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpeechDetails);
