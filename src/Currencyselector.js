import React, {Component} from 'react'

class Currencyselector extends Component {

  state = {currencies:[ ]}

  componentDidMount = () => {

   fetch ('https://free.currconv.com/api/v7/currencies?apiKey=71737f27766952ed2dd8')
   .then((result) => result.json())
   .then((result) => {
     this.setState ({
       currencies: result.results
     })
     const firstCurrencyCode = Object.keys(this.state.currencies)[0]
     console.log(firstCurrencyCode)
     this.props.changeCurrency(firstCurrencyCode, this.props.direction)
   })
  }


  render = () => {
    return (
      <div className="select is-multiple">
          <select onChange={event => this.props.changeCurrency(event.target.value, this.props.direction)}>
       
            {Object.keys(this.state.currencies).map((currencyCode, index) => (
              <option value={currencyCode} key={index}>{this.state.currencies[currencyCode].currencyName} {this.state.currencies[currencyCode].currencySymbol}</option> 
              ))}
          </select>    
      </div>
    );
  }
}

export default Currencyselector;