import React, { Component } from 'react';
import './style.css';
import Header from '../../components/header';
import WordCountStat from './components/wordCountStat'
class SpeechDetails extends Component {
  componentWillMount() {
    this.props.resetWordCount()
    const { data } = this.props.history.location || null;
    (!data) && this.props.history.push({
      pathname: '/'
    })
  }
  render() {
    const { data } = this.props.history.location
    return (
      <div className="container">
        <div className="App">
          <Header />
          {data && data.speeches.map(speech =>
            <div style={{ margin: 15 }} >
              <div style={{ margin: 20, fontSize: 'x-large' }}>
                {speech.title}
              </div>
              <div style={{ margin: 20 }}>
                {speech.content}
              </div>
              <WordCountStat {...speech} />
            </div>)}
        </div>
      </div>
    )
  }
}



export default SpeechDetails
