import React from 'react';
import axios from 'axios';

import './App.css'

class App extends React.Component {
  state = { 
    adviceList: []
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip

        this.setState(prevState => ({
          adviceList: [...prevState.adviceList, advice]
        }))

        console.log(this.state)
      })
      .catch((error) => {
        console.log(error)
      });
  }

  componentDidMount() {
    this.fetchAdvice()
  }

  render() {
    const { adviceList } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{adviceList[adviceList.length - 1]}</h1>
          <button className="button" onClick={this.fetchAdvice}>
              <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    )
  }
}

export default App;