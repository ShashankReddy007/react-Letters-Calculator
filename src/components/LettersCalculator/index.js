// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', count: 0}

  changeText = event => {
    this.setState({
      searchInput: event.target.value,
      count: event.target.value.length,
    })
  }

  render() {
    const {searchInput, count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            className="letters-input"
            type="text"
            id="phraseText"
            placeholder="Enter the phrase"
            value={searchInput}
            onChange={this.changeText}
          />
          <p className="letters-count">No.of letters: {count}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
