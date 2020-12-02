import React, {Component} from 'react'
import Api from './Api'
import Currencynumber from './Currencynumber'
import Currencyselector from './Currencyselector'

class App extends Component {


  render() {

    return (
      <div className="container">
        <Currencynumber handleSubmit={this.handleSubmit} />
        <Currencyselector handleSubmit={this.handleSubmit} />
      </div>
    )

  }
}

export default App
