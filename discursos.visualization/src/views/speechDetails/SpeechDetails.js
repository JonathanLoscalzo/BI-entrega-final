import React, { Component } from 'react';
import './style.css';
import Divider from '@material-ui/core/Divider';
import Header from '../../components/header';
import WordCountStat from './components/wordCountStat'
import GoBackButton from '../../components/gobackButton/index'
import Typography from '@material-ui/core/Typography';

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
          <Header history={this.props.history} />
          <Typography variant="display4">
            Detalles del Discurso
          </Typography>

          {data && data.speeches.map((speech, i) =>
            <div key={i} style={{ margin: 15 }} >
              <Typography variant="display3">
                Palabras más mencionadas
              </Typography>
              <WordCountStat speech={speech} wordcounts={this.props.wordcounts} {...speech} />
              <Divider />
              <Typography variant="display3">
                Discurso Completo
              </Typography>
              <div style={{ margin: 20, fontSize: 'x-large' }}>
                {speech.title}
              </div>
              <div style={{ margin: 20, textAlign: "justify" }}>
                {speech.content}
              </div>

            </div>)}
        </div>
        {/* <GoBackButton handleGoBack={this.handleGoBack} /> */}
      </div >
    )
  }
}



export default SpeechDetails
