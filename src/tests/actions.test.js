import React from "react";
import { shallow } from "enzyme";
import * as actions from "../action";
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_FAILURE,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
} from "../constants";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

it("Test search field action when a value is passed", () => {
  const text = "John";
  expect(actions.setSearchField(text)).toMatchObject({
    type: CHANGE_SEARCH_FIELD,
    payload: "John",
  });
});

it("Test request robots action when called - initial state", () => {
  const apiCall = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            name: "John",
            email: "john@xyz.com",
          },
        ]),
    })
  );
  const store = mockStore();
  store.dispatch(actions.requestRobots(apiCall));
  const actionsList = store.getActions();
  expect(actionsList[0]).toMatchObject({
    type: REQUEST_ROBOTS_PENDING,
  });
});

it("Test request robots action when called - successful state", async () => {
  const apiCall = jest.fn().mockReturnValue(
    Promise.resolve([
      {
        id: 1,
        name: "John",
        email: "john@xyz.com",
      },
    ])
  );
  const store = mockStore();
  await store.dispatch(actions.requestRobots(apiCall));
  const action = store.getActions();
  expect(apiCall).toBeCalled();
  expect(apiCall.mock.calls.length).toBeGreaterThan(0);
  expect(action[1]).toMatchObject({
    type: REQUEST_ROBOTS_SUCCESS,
    payload: [
      {
        id: 1,
        name: "John",
        email: "john@xyz.com",
      },
    ],
  });
});

it("Test request robots action when called - unsuccessful state", async () => {
  const apiCall = jest.fn().mockReturnValue(Promise.reject("Not found"));
  const store = mockStore();
  await store.dispatch(actions.requestRobots(apiCall));
  const action = store.getActions();
  expect(apiCall).toBeCalled();
  expect(apiCall.mock.calls.length).toBeGreaterThan(0);
  expect(action[1]).toMatchObject({
    type: REQUEST_ROBOTS_FAILURE,
    payload: "Not found",
  });
});
