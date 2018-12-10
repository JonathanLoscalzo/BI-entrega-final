import React, { Component } from 'react';
import './style.css';
import Header from '../../components/header';
import LineChartDollar from './components/LineChartDollar'
import Loading from '../../components/loading';
import DatePicker from 'material-ui-pickers/DatePicker';
import { AditionalStats } from './components/AditionalsStats/AditionalsStats'
import { Divider } from '@material-ui/core'
import moment from 'moment'

class Dashboard extends Component {

  state = {
    minDate: moment(new Date()),
    maxDate: moment(new Date()),
  }

  componentWillMount() {
    this.props.getDollarList(null, null)
    this.props.getNgrams();
    this.props.getWordcounts()
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
              <Header />
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

              <AditionalStats ngrams={this.props.ngrams} wordcounts={this.props.wordcounts} />
            </div>)}
      </div>
    );
  }
}



export default Dashboard
