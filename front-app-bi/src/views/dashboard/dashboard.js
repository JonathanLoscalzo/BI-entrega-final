import React, { Component } from 'react';
import './style.css';
import Header from '../../components/header';
import LineChartDollar from './components/LineChartDollar'
import Loading from '../../components/loading';
import DatePicker from 'material-ui-pickers/DatePicker';
import { AditionalStats } from '../../components/aditionalStats'
class Dashboard extends Component {
  state = {
    minDate: new Date(),
    maxDate: new Date(),
  }
  componentWillMount() {
    this.props.getDollarList()
  }


  handleMinDateChange = (date) => {
    (date < this.state.maxDate) && this.setState({ minDate: date })
  }
  handleMaxDateChange = (date) => {
    (date > this.state.minDate) && this.setState({ maxDate: date })

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
                  onChange={this.handleMinDateChange}
                />
                <DatePicker style={{ margin: 15 }}
                  value={maxDate}
                  name='maxDate'
                  minDate={this.state.minDate}
                  maxDate={new Date()}
                  onChange={this.handleMaxDateChange}
                />
              </div>
              <LineChartDollar history={this.props.history} speechs={this.props.speechs} />
              <AditionalStats />
            </div>)}
      </div>
    );
  }
}



export default Dashboard
