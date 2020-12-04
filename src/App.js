import React, {Component} from 'react'
import Currencynumber from './Currencynumber'
import Currencyselector from './Currencyselector'

class App extends Component {

  state = { 
    amountFrom: 1,
    currencyFrom: 'EUR',
    currencyTo: 'USD',
    amountTo: 0
  }


  changeAmount = (newAmount) => {
    this.setState({amountFrom: newAmount})
  } 

  changeCurrency = (currencyNew, direction) => {
    if (direction === 'from') { 
      this.setState({currencyFrom: currencyNew})
    } else {
      this.setState({currencyTo: currencyNew})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.convertAmount()
    }
  }

  convertAmount = () => {
    const convertId = this.state.currencyFrom + '_' + this.state.currencyTo 

    fetch ('https://free.currconv.com/api/v7/convert?q=' + convertId + '&apiKey=71737f27766952ed2dd8')
    .then((result) => result.json())
    .then((result) => {
      this.setState ({
        amountTo: result.results[convertId].val * this.state.amountFrom
      })
    })
  }

  render() {

    return (
      <div className="container">
        <div className="column">
          <Currencynumber changeAmount={this.changeAmount} />
          <Currencyselector changeCurrency={this.changeCurrency} direction={'from'}/>
          </div>
          <div className="column">
          <Currencyselector changeCurrency={this.changeCurrency} direction={'to'} />
          <div>{this.state.amountTo}</div>
          </div>  
      </div>
    )

  }
}

export default App
