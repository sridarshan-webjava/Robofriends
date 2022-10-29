import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
import loader from "./Spinner-1s-200px.svg";
import { setSearchField, requestRobots } from "./action";
import ErrorBoundary from "./ErrorBoundary";

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
  componentDidMount() {
    this.props.onRequestRobots();
  }

  componentDidUpdate() {
    console.log("component updated", this.props.robots, this.props.isPending);
  }
  render() {
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().startsWith(searchField.toLowerCase());
    });
    return (
      <>
        <header>
          <h1>Robofriends</h1>
        </header>
        {isPending ? (
          <img src={loader} alt="loader" className="loader" />
        ) : (
          <div>
            <ErrorBoundary>
              <Searchbox searchChange={onSearchChange} />
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </div>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
