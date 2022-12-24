import React, { Component } from "react";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
import loader from "./Spinner-1s-200px.svg";
// import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  onSearchChange = event => {
    // console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {this.setState({robots: users})});
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .startsWith(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return (
        // <div>
        <img src={loader} alt="" className="loader" />
        // </div>
      );
    } else {
      return (
        <div>
          <h1>Robofriends</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default App;
