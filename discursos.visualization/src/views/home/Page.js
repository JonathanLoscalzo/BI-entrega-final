import React, { Component } from 'react';
import './style.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Header from '../../components/header';
import Loading from '../../components/loading2/index'
import Card from './components/Card/index'
import { MdMessage, MdMonetizationOn, MdSentimentNeutral, MdSentimentSatisfied, MdAssessment } from 'react-icons/md'
import { FaBatteryQuarter, FaBatteryThreeQuarters, FaBatteryHalf } from 'react-icons/fa'
import { AditionalStats } from './components/AditionalsStats/AditionalsStats'

class Page extends Component {

  componentWillMount() {
    this.props.load()
    this.props.getNgrams()
    this.props.getWordcounts()
  }

  handleGoBack() {
    this.props.history.goBack()
  }

  render() {
    
    const { ngrams, wordcounts } = this.props;

    return (
      <div className="container">
        <div className="App">
          <Header history={this.props.history} />

          <Loading {...this.props} reload={this.props.load}>
            {this.props.common && (
              <div>
                <Typography variant="display2" gutterBottom>
                  Algunas estadísticas
                </Typography>
                <Grid container spacing={16}>

                  <Grid item xs={4}>
                    <Card
                      icon={<MdMessage />}
                      name="Cantidad Discursos"
                      value={this.props.common.speeches.count}
                      type="primary" />
                  </Grid>
                  <Grid item xs={4}>
                    <Card
                      icon={<MdMonetizationOn />}
                      name="Cotizaciones de Dólar"
                      value={this.props.common.dollars.count}
                      type="primary" />
                  </Grid>

                  <Grid item xs={4}>
                    <Card
                      icon={<MdAssessment />}
                      name="Palabra más usada"
                      value={`${this.props.common.word.most_used.word} - ${this.props.common.word.most_used.word_count}`}
                      type="primary" />
                  </Grid>

                  <Grid item xs={6}>
                    <Card
                      icon={<MdSentimentSatisfied />}
                      name="Discurso más largo"
                      value={`${this.props.common.speeches.largest.total_distict_words} palabras`}
                      type="primary"
                      action={() => {
                        this.props.history.push({
                          pathname: '/details',
                          data: { speeches: [this.props.common.speeches.largest] }
                        })
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Card
                      icon={<MdSentimentNeutral />}
                      name="Discurso más corto"
                      value={`${this.props.common.speeches.smallest.total_distict_words} palabras`}
                      type="primary"
                      action={() => {
                        this.props.history.push({
                          pathname: '/details',
                          data: { speeches: [this.props.common.smallest.largest] }
                        })
                      }}
                    />
                  </Grid>
                  {
                    this.props.common.ngrams &&
                    (<React.Fragment>
                      <Grid item xs={6}>
                        <Card
                          icon={<FaBatteryQuarter />}
                          name={this.props.common.ngrams.most_use_5.ngram}
                          value={`${this.props.common.ngrams.most_use_5.counter} apariciones`}
                          type="primary"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Card
                          icon={<FaBatteryHalf />}
                          name={this.props.common.ngrams.most_used_6.ngram}
                          value={`${this.props.common.ngrams.most_used_6.counter} apariciones`}
                          type="primary"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Card
                          icon={<FaBatteryThreeQuarters />}
                          name={this.props.common.ngrams.most_use_7.ngram}
                          value={`${this.props.common.ngrams.most_use_7.counter} apariciones`}
                          type="primary"
                        />
                      </Grid>
                    </React.Fragment>
                    )
                  }

                  <Grid item xs={12}>
                  
                  </Grid>

                  <Grid item xs={12}>
                    <AditionalStats ngrams={ngrams} wordcounts={wordcounts} />
                  </Grid>
                  
                </Grid>
              </div>)
            }
          </Loading>

        </div>
      </div>
    )
  }
}



export default Page
