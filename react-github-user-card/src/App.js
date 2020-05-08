import React from 'react';
import './App.css';
import List from "./components/List"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      followers: []
    }
  }


  componentDidMount() {
    fetch('https://api.github.com/users/Awy64')
      .then(res => res.json())
      .then(res => {
        console.log("My user data", res)
        this.setState({
          data: res,
          followers: []
        })
      })
      .catch(err => console.log("fetch error", err))
    fetch('https://api.github.com/users/Awy64/followers')
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          data: this.state.data,
          followers: res
        })
      })
      .catch(err => console.log("fetch error", err))
  }

  render() {
    return(
  
    <div className="App">
      <h1>My GitHub Followers</h1>
      <List data={this.state.data} followers={this.state.followers} />
    </div>
    );
  }
}

export default App;
