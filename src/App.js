import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
import loader from "./Spinner-1s-200px.svg";
import { setSearchField, requestRobots } from "./action";
// import { robots } from "./robots";

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
  };
};
class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   robots: [],
  //   // };
  // }

  // onSearchChange = event => {
  //   // console.log(event.target.value);
  //   this.setState({ searchField: event.target.value });
  // };

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(users => this.setState({ robots: users }))
    //   .catch(err => console.log(err));
    this.props.onRequestRobots();
  }

  render() {
    // console.log(store);
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().startsWith(searchField.toLowerCase());
    });
    if (isPending) {
      return (
        // <div>
        <img src={loader} alt="" className="loader" />
        // </div>
      );
    } else {
      return (
        <div>
          <h1>Robofriends</h1>
          <Searchbox searchChange={onSearchChange} />
          <CardList robots={filteredRobots} />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
