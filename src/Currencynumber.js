import React, {Component} from 'react'


class Currencynumber extends Component {

  render () {
    
    return (
        <div>
          <input className="input is-danger is-small" type="number" step="any" onChange={event => this.props.changeAmount(event.target.value)} />
        </div>      
    );
  }
}

export default Currencynumber;