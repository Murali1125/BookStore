import React from "react";
import Book from "./../component/Book/Book";
import { shallow } from "enzyme";
import "./../setupTests";

describe("Book component", () => {
  // testing redering of header component
  it("should render without throwing any error", () => {
    const wrapper = shallow(<Book />);
    expect(wrapper.exists()).toBe(true);
  });
});