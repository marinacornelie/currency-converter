import React, {Component} from 'react'

class Api extends Component {

  componentDidMount() {
    const url =
      'https://free.currconv.com/api/v7/convert?q=EUR_USD&apiKey=71737f27766952ed2dd8'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result,
        })
      })
  }
}

  export default Api;
