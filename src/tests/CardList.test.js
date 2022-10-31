import { shallow, mount } from "enzyme";
import React from "react";
import Card from "../Card";
import CardList from "../CardList";

describe("Testing the CardList Component", () => {
  it("Testing the component render when robots array is empty", () => {
    const mockRobots = [];
    const length = mockRobots.length;
    let wrapper = mount(<CardList robots={mockRobots} />);
    expect(wrapper.find(Card).length).toEqual(length);
  });

  it("Testing the component render when robots array is populated", () => {
    const mockRobots = [
      {
        id: 1,
        name: "John",
        email: "john@xyz.com",
      },
      {
        id: 2,
        name: "Doe",
        email: "doe@xyz.com",
      },
    ];
    const length = mockRobots.length;
    let wrapper = mount(<CardList robots={mockRobots} />);
    expect(wrapper.find(Card).length).toEqual(length);
  });
});
