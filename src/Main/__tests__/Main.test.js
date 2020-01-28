import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

import Main from "../Main";
import Players from "../../Players/Players";

describe("Main component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });
  test("should render a <div/>", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
});

describe("Error message", () => {
  const setup = (props = {}) => {
    return shallow(<Main {...props} />);
  };
  test("Error message shows when there is a network error", () => {
    const wrapper = setup({ error: "network error" });
    const error = wrapper.find(".error");
    expect(error).toHaveLength(1);
  });
  test("Error message does not show when a network error does not occur", () => {
    const wrapper = setup({ error: "" });
    const error = wrapper.find(".error");
    expect(error).toHaveLength(0);
  });
});

describe("Render Loading or Players component", () => {
  const setup = (props = {}) => {
    return shallow(<Main {...props} />);
  };

  test("shows Loading component when loading ", () => {
    const wrapper = setup({ loading: true });
    const loadingIndicator = wrapper.find(".loading");
    expect(loadingIndicator).toHaveLength(1);
  });

  test("Main shows Players component when not loading", () => {
    const wrapper = setup({ loading: false });
    const players = wrapper.find(Players);
    expect(players).toHaveLength(1);
  });
});
