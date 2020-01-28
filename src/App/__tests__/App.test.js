import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

import App from "../App";
import Main from "../../Main/Main";

describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test("should render a <div/>", () => {
    expect(wrapper.find("div").length).toBe(1);
  });

  test("should render the Main Component", () => {
    expect(wrapper.containsMatchingElement(<Main />)).toEqual(true);
  });
});
