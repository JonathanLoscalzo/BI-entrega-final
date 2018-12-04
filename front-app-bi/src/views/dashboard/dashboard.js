import React, { Component } from 'react';
import './style.css';
import Header from '../../components/header';
import LineChartDollar from './components/LineChartDollar'
import Loading from '../../components/loading';
class Dashboard extends Component {
  componentWillMount() {
    this.props.getDollarList()
  }
  render() {
    return (
      <div className="container">
        {!this.props.speechs ? (
          <Loading />
        ) : (
            <div className="App">

              <Header />
              <LineChartDollar speechs={this.props.speechs} />
            </div>)}
      </div>
    );
  }
}



export default Dashboard
