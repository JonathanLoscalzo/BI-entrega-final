import React, { Component } from 'react';
import './style.css';
import Header from '../../components/header';
import WordCountStat from './components/wordCountStat'
import Button from '@material-ui/core/Button';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowLeft';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

class SpeechDetails extends Component {
  componentWillMount() {
    this.props.resetWordCount()
    const { data } = this.props.history.location || null;
    (!data) && this.props.history.push({
      pathname: '/'
    })
  }

  handleGoBack() {
    this.props.history.goBack()
  }

  render() {
    const { data } = this.props.history.location
    return (
      <div className="container">
        <div className="App">
          <Header />
          {data && data.speeches.map((speech, i) =>
            <div key={i} style={{ margin: 15 }} >
              <div style={{ margin: 20, fontSize: 'x-large' }}>
                {speech.title}
              </div>
              <div style={{ margin: 20, textAlign: "justify" }}>
                {speech.content}
              </div>
              <WordCountStat {...speech} />
            </div>)}
        </div>
        <Button
          onClick={() => this.handleGoBack()}
          variant="fab"
          color="primary"
          aria-label="Add"
          style={style}>
          <KeyboardArrowUp />
        </Button>
      </div>
    )
  }
}



export default SpeechDetails
