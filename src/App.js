import React from 'react';
import axios from 'axios';

import './App.css'

class App extends React.Component {
  state = { 
    advice: '',
    nextAdvice: '' 
  }

  fetchInitialAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  fetchNextAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip
        this.setState({ nextAdvice: advice });
      })
      .catch((error) => {
        console.log(error)
      });
  }

  componentDidMount() {
    this.fetchInitialAdvice();
    this.fetchNextAdvice();
  }

  loadAdvice = () => {
    this.setState( {advice: this.state.nextAdvice} );
    this.fetchNextAdvice();
  }

  render() {
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <h2 className="heading">{this.state.nextAdvice}</h2>
          <button className="button" onClick={this.loadAdvice}>
              <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App;