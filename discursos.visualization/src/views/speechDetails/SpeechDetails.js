import React, { Component } from 'react';
import './style.css';
import Divider from '@material-ui/core/Divider';
import Header from '../../components/header';
import WordCountStat from './components/wordCountStat'
import GoBackButton from '../../components/gobackButton/index'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
          <Grid container spacing={16}>
            <Typography variant="display3">
              Detalles del Discurso
            </Typography>

            {data && data.speeches.map((speech, i) =>
              <div key={i} style={{ margin: 15 }} >
                <Grid item>
                  <Typography variant="display2">
                    Palabras más mencionadas
                  </Typography>
                </Grid>
                <Grid item>
                  <WordCountStat speech={speech} wordcounts={this.props.wordcounts} {...speech} />
                </Grid>
                <Divider />
                <Grid item>
                  <Typography variant="display2">
                    Discurso Completo
                  </Typography>
                </Grid>
                <Grid item>
                  <div style={{ margin: 20, fontSize: 'x-large' }}>
                    {speech.title}
                  </div>
                </Grid>
                <Grid item>
                  <div style={{ margin: 20, textAlign: "justify" }}>
                    {speech.content}
                  </div>
                </Grid>
              </div>)}
          </Grid>
        </div>
        {/* <GoBackButton handleGoBack={this.handleGoBack} /> */}
      </div >
    )
  }
}



export default SpeechDetails
