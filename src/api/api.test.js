import React from "react";
import { shallow } from "enzyme";
import { apiCall } from "./api";

it("Test promise result when correct URL is passed as argument (JSON API)", () => {
  expect.assertions(1);
  const link = "https://jsonplaceholder.typicode.com/users";
  return expect(apiCall(link)).resolves.toBeDefined();
});

it("Test promise result when incorrect URL is passed as argument (JSON API)", () => {
  expect.assertions(1);
  const link = "https://jsonplaceholder.typicode.com/user";
  return expect(apiCall(link)).rejects.toBeDefined();
});
