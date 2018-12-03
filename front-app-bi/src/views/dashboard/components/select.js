import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import IconButton from '@material-ui/core/IconButton';

import Shopping from '../../../components/shoppingCardIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

export default class SelectCustom extends Component {
  state = {
    value: null
  };
  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  renderStock = () => {
    let arr = [];
    for (let index = 1; index <= this.props.product.stock; index++) {
      arr.push(<MenuItem value={index}>{index}</MenuItem>);
    }
    return arr;
  };
  render() {
    return (
      <ListItemSecondaryAction>
        {this.props.product.stock == 0 && <h3 style={{
          margin: '15px',
          'font-size': 'initial'
        }}>AGOTADO</h3>}
        {this.props.product.stock != 0 && <div>
          <Select
            inputProps={{
              name: 'value',
              id: 'age-simple'
            }}
            onChange={this.handleChange}
            value={this.state.value}
            style={{ width: '120px' }}
          >
            {this.renderStock()}
          </Select>
          <IconButton
            onClick={() => {
              this.props.history.push({
                pathname: '/checkout',
                state: {
                  stockSelected: this.state.value,
                  product: this.props.product
                }
              });
            }}
            aria-label="shopping_cart"
            disabled={!this.state.value}
          >
            <Shopping />
          </IconButton>
        </div>}

      </ListItemSecondaryAction>
    );
  }
}
