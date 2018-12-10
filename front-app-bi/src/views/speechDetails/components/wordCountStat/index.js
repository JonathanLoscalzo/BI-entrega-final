import WordCountStat from './WordCountStat';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWordCounts } from '../../redux/actions';

const mapStateToProps = (state, props) => {
    let selectWordCount = state.speechDetail.wordcounts.filter(each => each.id == props._id);
    return {
        wordcount: selectWordCount[0] && selectWordCount[0].wordcounts
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getWordCounts }, dispatch);
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordCountStat);
