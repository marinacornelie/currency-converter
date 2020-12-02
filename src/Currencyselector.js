import React, {Component} from 'react'

class Currencyselector extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ' '};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Your currency: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Of your currency:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="EUR">Euro</option>
            <option value="USD">US dollars</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Currencyselector;