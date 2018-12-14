import React, { Component } from 'react';
import './style.css';
import Header from '../../components/header';
import Loading from '../../components/loading2/index'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import BarChart from './components/AditionalsStats/NgramsChart.1'

class Page extends Component {

  componentWillMount() {
    this.props.load()
  }

  handleGoBack() {
    this.props.history.goBack()
  }

  render() {

    return (
      <div className="container">
        <div className="App">
          <Header history={this.props.history} />

          <Loading {...this.props} reload={this.props.load}>
            <Grid container spacing={16}>
              <Grid item xs={12} >
                <Typography variant="display3" gutterBottom>
                  N-grams
              </Typography>

                <Typography variant="headline" gutterBottom>
                  ¿Qué son los N-GRAMS?
              </Typography>

                <Typography variant="body2" gutterBottom>
                  <p>Un n-grama es una subsecuencia de n elementos de una secuencia dada. En nuestro caso, los discursos.</p>
                  <p>Contabilizamos n-gramas con N = [5,6,7]</p>
                  <p>Hay frases que suelen repetirse, más a menudo de lo que pensamos...</p>
                  <p>Los siguientes gráficos, tienen un conjunto de los n-grams más mencionados</p>
                </Typography>

              </Grid>
              {
                this.props.ngrams && (
                  <Grid item xs={12} >
                    <BarChart data={this.props.ngrams.ngrams5.slice(0, 40)} title="N-GRAMAS DE 5" />
                  </Grid>
                )
              }
              <Grid item xs={12} >
                {
                  this.props.ngrams && (
                    // <Grid item xs={6} >
                      <BarChart data={this.props.ngrams.ngrams6.slice(0, 40)} title="N-GRAMAS DE 6" />
                    // </Grid>
                  )
                }
              </Grid>
              <Grid item xs={12} >
                {
                  this.props.ngrams && (
                    // <Grid item xs={6} >
                      <BarChart data={this.props.ngrams.ngrams7.slice(0, 40)} title="N-GRAMAS DE 7" />
                    // </Grid>
                  )
                }
              </Grid>
              <Grid item xs={12} >
                {
                  this.props.ngrams && (
                    // <Grid item xs={6} >
                      <BarChart data={this.props.ngrams.ngrams.slice(0, 40)} title="General" />
                    // </Grid>
                  )
                }
              </Grid>
            </Grid>
          </Loading>
        </div>
      </div >
    )
  }
}



export default Page
