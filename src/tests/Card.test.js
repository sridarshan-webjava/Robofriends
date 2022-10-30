import { shallow } from "enzyme";
import React from "react";
import Card from "../Card";

it("Running my first test", () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
