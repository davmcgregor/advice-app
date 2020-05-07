import React from 'react';
import axios from 'axios'; 
import Spinner from './Spinner';

import './App.css';

class App extends React.Component {
  state = {
    text: "",
    image: "",
    loading: true
  };

  fetchAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`)
      .then((response) => {
        const { advice } = response.data.slip

        this.setState({text: advice})
      })
      .catch((error) => {
        console.log(error)
      });
  };

  fetchImage = () => {
    this.setState({loading: true})
    fetch(`https://source.unsplash.com/1600x900/?mountain`).then((response) => {
      this.setState({ image: `${response.url}`})
      this.setState({loading: false})
    })
  }


  componentDidMount() {
    this.fetchAdvice()
    this.fetchImage()
  };

  renderContent() {
    if (this.state.loading === false) {
      return <div className="app darken-overlay" style={{backgroundImage: `url(${this.state.image})`}}>
      <h1 className="advice-text">{this.state.text}</h1>
      <button 
        className="large ui primary button"
        onClick={() => {
          this.fetchAdvice()
          this.fetchImage()
        }}
        >
          Next
      </button>
    </div>
    }
    return <Spinner />
  }
  
  render() {
    return ( 
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;