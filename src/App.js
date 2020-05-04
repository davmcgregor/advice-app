import React from 'react';
import axios from 'axios'; 
import M from "materialize-css";
import 'materialize-css/dist/css/materialize.min.css'

import './App.css'

class App extends React.Component {
  state = { 
    adviceList: [],
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip

        this.setState(prevState => ({
          adviceList: [...prevState.adviceList, advice]
        }))

        var elem = document.querySelector('.carousel')
        M.Carousel.init(elem, { duration: 200 })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  loadAdvice(){
    for  (let i = 0; i < 100; i++) {
      this.fetchAdvice()
    }
  }

  componentDidMount() {
    this.loadAdvice()
  }
  
  render() {
    var colors = ["red", "amber", "green", "blue"];

    const childElements = this.state.adviceList.map(advice => (
      <div className={`carousel-item white-text ${colors[Math.floor(Math.random() * 4)]}`}>
        <h1>{advice}</h1>
      </div>
    ))

    return ( 
      <div className="carousel carousel-slider center">
      <div className="carousel-fixed-item center">
        <h1>Click for more!</h1>
      </div>
      {childElements}
    </div>
    )
  }
}

export default App;