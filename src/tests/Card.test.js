import React from "react";
import renderer from "react-test-renderer";
import Card from "../Card";

it("renders correctly", () => {
  const tree = renderer
    .create(<Card name="Sample" email="sample@xyz.com" id="123" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
