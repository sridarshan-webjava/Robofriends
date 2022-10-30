import React from "react";
import { shallow } from "enzyme";
import * as reducers from "../reducers";
import {
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILURE,
  CHANGE_SEARCH_FIELD,
} from "../constants";

it("Test searchRobots reducer during initial render", () => {
  expect(reducers.searchRobots(undefined, {})).toMatchObject({
    searchField: "",
  });
});

it("Test searchRobots reducer when action is dispatched", () => {
  const action = {
    type: CHANGE_SEARCH_FIELD,
    payload: "Josh",
  };
  const initialState = {
    searchField: "",
  };
  expect(reducers.searchRobots(initialState, action)).toMatchObject({
    searchField: "Josh",
  });
});

it("Test request robots reducer function during initial render", () => {
  const initialState = {
    robots: [],
    isPending: false,
  };
  expect(reducers.requestRobots(undefined, {})).toMatchObject(initialState);
});

it("Test request robots reducer function when fetch call is made", () => {
  const initialState = {
    robots: [],
    isPending: false,
  };
  const action = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(reducers.requestRobots(initialState, action)).toMatchObject({
    robots: [],
    isPending: true,
  });
});

it("Test request robots reducer function when fetch call is successful", () => {
  const initialState = {
    robots: [],
    isPending: true,
  };
  const action = {
    type: REQUEST_ROBOTS_SUCCESS,
    payload: [
      {
        id: 1,
        name: "John",
        email: "john@xyz.com",
      },
    ],
  };
  expect(reducers.requestRobots(initialState, action)).toMatchObject({
    robots: [
      {
        id: 1,
        name: "John",
        email: "john@xyz.com",
      },
    ],
    isPending: false,
  });
});

it("Test request robots reducer function when fetch call is unsuccessful", () => {
  const initialState = {
    robots: [],
    isPending: false,
    error: "",
  };
  const action = {
    type: REQUEST_ROBOTS_FAILURE,
    payload: "Data not found",
  };
  expect(reducers.requestRobots(initialState, action)).toMatchObject({
    robots: [],
    isPending: false,
    error: "Data not found",
  });
});
