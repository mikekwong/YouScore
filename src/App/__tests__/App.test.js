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

  test("should render the <h1/> tag", () => {
    expect(wrapper.find("h1").length).toBe(1);
  });

  test("should output the text in the <h1/> tag", () => {
    const h1 = wrapper.find("h1");
    expect(h1.text()).toEqual("Guess which player has a higher FPPG?");
  });

  test("should render the Main Component", () => {
    expect(wrapper.containsMatchingElement(Main)).toEqual(true);
  });
});
