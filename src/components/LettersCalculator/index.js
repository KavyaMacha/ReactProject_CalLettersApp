import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    inputText: '',
  }

  onChangeInput = event => {
    this.setState({inputText: event.target.value})
  }

  render() {
    const {inputText} = this.state
    const lettersCount = inputText.length

    return (
      <div className="app-container">
        <div className="calculator-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="userInput">
            Enter the phrase
          </label>
          <input
            id="userInput"
            className="input"
            type="text"
            placeholder="Enter the phrase"
            onChange={this.onChangeInput}
          />
          <p className="letters-count">No.of letters: {lettersCount}</p>
          <img
            className="calculator-image"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
