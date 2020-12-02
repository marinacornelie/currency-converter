import React, {Component} from 'react'

class Currencyselector extends Component {

  render() {
    return (
          <select onChange={event => this.props.changeCurrency(event.target.value, this.props.direction)}>
            <option value="EUR">Euro</option>
            <option value="USD">US dollars</option>
          </select>    
    );
  }
}

export default Currencyselector;