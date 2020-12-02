import React, {Component} from 'react'


class Currencynumber extends Component {

  state = {
    characters: [
      
    ],
  }
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render () {
    const { } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Amount
        <input type="number" step="any" value={this.state.value} onChange={this.handleChange} />
      </label>
    </form>
    );
  }
}

export default Currencynumber;