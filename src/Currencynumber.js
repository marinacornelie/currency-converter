import React, {Component} from 'react'


class Currencynumber extends Component {

  render () {
    
    return (
        <div>
          <input type="number" step="any" onChange={event => this.props.changeAmount(event.target.value)} />
        </div>      
    );
  }
}

export default Currencynumber;