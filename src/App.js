import React, {Component} from 'react'
import Api from './Api'
import Currencynumber from './Currencynumber'
import Currencyselector from './Currencyselector'

class App extends Component {

  state = { 
    amount: 1,
    currencyFrom: 'EUR',
    currencyTo: 'USD'
  }


  changeAmount = (newAmount) => {
    this.setState({amount: newAmount})
  } 

  changeCurrency = (currencyNew, direction) => {
    if (direction == 'from') { 
      this.setState({currencyFrom: currencyNew})
    } else {
      this.setState({currencyTo: currencyNew})
    }
  }


  render() {

    return (
      <div className="container">
        <Currencynumber changeAmount={this.changeAmount} />
        <Currencyselector changeCurrency={this.changeCurrency} direction={'from'}/>
        <Currencyselector changeCurrency={this.changeCurrency} direction={'to'} />
      </div>
    )

  }
}

export default App
