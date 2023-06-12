import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        this.setState({ advice: response.data.slip.advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <buttton className="button" onclick={this.fetchAdvice()}>
            <span>NEW ADVICE!</span>
          </buttton>
        </div>
      </div>
    );
  }
}

export default App;
