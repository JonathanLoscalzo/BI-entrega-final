import React, { Component } from 'react';
import './style.css';
import Header from '../../components/header';
import Loading from '../../components/loading2/index'

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

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
            algo
          </Loading>
        </div>
      </div >
    )
  }
}



export default Page
