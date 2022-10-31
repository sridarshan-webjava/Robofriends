import { shallow } from "enzyme";
import React from "react";
import Searchbox from "../Searchbox";

let wrapper;
const mockSearchChangeFn = jest.fn();

beforeEach(() => {
  wrapper = shallow(<Searchbox searchChange={mockSearchChangeFn} />);
});

it("Test if the snapshot match", () => {
  expect(wrapper).toMatchSnapshot();
});

it("Test if input event function is triggered", () => {
  const input = wrapper.find("input");
  input.simulate("change");
  expect(mockSearchChangeFn).toBeCalled();
});
