import React, { Component } from 'react';
import './style.css';
import Header from '../../components/header';
import LineChartDollar from './components/LineChartDollar'
import Loading from '../../components/loading';
import DatePicker from 'material-ui-pickers/DatePicker';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core'
import moment from 'moment'

class Dashboard extends Component {

  state = {
    minDate: moment(new Date()).add(-4, "months"),
    maxDate: moment(new Date()),
  }

  componentWillMount() {
    this.props.getDollarList(this.state.minDate, this.state.maxDate)
    // this.props.getNgrams();
    // this.props.getWordcounts()
  }

  handleMinDateChange(date) {
    (date < this.state.maxDate) && this.setState({ minDate: date })
    this.props.getDollarList(date, this.state.maxDate)
  }

  handleMaxDateChange(date) {
    (date > this.state.minDate) && this.setState({ maxDate: date })
    this.props.getDollarList(this.state.minDate, date)
  }

  render() {

    const { minDate, maxDate } = this.state;
    return (
      <div className="container">
        {!this.props.speechs ? (
          <Loading />
        ) : (
            <div className="App">
              <Header history={this.props.history} />
              <Grid container spacing={16}>
                <Grid item xs={12} >
                  <Typography variant="display3" gutterBottom>
                    Discursos
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Seleccionando las fechas, podemos navegar y comparar el precio del dolar, con los discursos cargados.
                    <br />Los iconos de discurso, te redirigen a estadísticas propias del mismo.
                  </Typography>
                </Grid>

                <div className='form-dates'>

                  <DatePicker style={{ margin: 15 }}
                    value={minDate}
                    minDate={new Date('2015-12-17')}
                    maxDate={this.state.maxDate}
                    name='minDate'
                    onChange={(e) => this.handleMinDateChange(e)}
                  />

                  <DatePicker style={{ margin: 15 }}
                    value={maxDate}
                    name='maxDate'
                    minDate={this.state.minDate}
                    maxDate={new Date()}
                    onChange={(e) => this.handleMaxDateChange(e)}
                  />
                </div>

                <LineChartDollar
                  history={this.props.history}
                  speechs={this.props.speechs}
                />

                <Divider />
                <br />
                <br />

                {/* <AditionalStats ngrams={this.props.ngrams} wordcounts={this.props.wordcounts} /> */}
              </Grid>
            </div>
          )}
      </div>
    );
  }
}



export default Dashboard
