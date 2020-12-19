import React, {Component} from 'react'
import Currencynumber from './Currencynumber'
import Currencyselector from './Currencyselector'

class App extends Component {

  state = { 
    amountFrom: null,
    currencyFrom: 'EUR',
    currencyTo: 'USD',
    amountTo: null,
    showOutputCard: false
  }


  changeAmount = (newAmount) => {
    this.setState({amountFrom: newAmount})
    this.setState ({
      showOutputCard: false
    })
  } 

  changeCurrency = (currencyNew, direction) => {
    if (direction === 'from') { 
      this.setState({currencyFrom: currencyNew})
    } else {
      this.setState({currencyTo: currencyNew})
    }
    this.setState ({
      showOutputCard: false
    })
  }

  convertAmount = () => {
    const convertId = this.state.currencyFrom + '_' + this.state.currencyTo 

    fetch ('https://free.currconv.com/api/v7/convert?q=' + convertId + '&apiKey=71737f27766952ed2dd8')
    .then((result) => result.json())
    .then((result) => {
      this.setState ({
        amountTo: result.results[convertId].val * this.state.amountFrom,
        showOutputCard: true
      })
    })
  }

  renderOutput = () => {
    if (this.state.showOutputCard) {
      return (
      <div className="card">
        <span>{this.state.amountFrom} {this.state.currencyFrom} is {this.state.amountTo} {this.state.currencyTo}</span>
      </div>
      )
    }
  }
  

  render() {   

    return (
      <div className="container">
         <div className="column">
           <div className="card flex">
              <span>Convert this amount</span>
              <Currencynumber changeAmount={this.changeAmount} />
              <span>In currency</span>
              <Currencyselector changeCurrency={this.changeCurrency} direction={'from'}/>
           </div>
        </div>
        <div className="column">
          <div className="card">
            <span>To this currency</span>
            <Currencyselector changeCurrency={this.changeCurrency} direction={'to'} />
            <button onClick={this.convertAmount}>
              Go!
            </button>
          </div>
        </div>
        <div className="column">
          {this.renderOutput()}
        </div>  
      </div>
    )

  }
}

export default App
