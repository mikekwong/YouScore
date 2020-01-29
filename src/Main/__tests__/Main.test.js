import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

import Main from "../Main";
import Players from "../../Players/Players";

describe("Main component", () => {
  test("should render a <div/>", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find("div").length).toEqual(1);
  });
});

describe("Error message", () => {
  const setup = (props = {}) => {
    return shallow(<Main {...props} />);
  };

  test("renders error message when `error` prop has a string value", () => {
    const wrapper = setup({ error: "network error" });
    const error = wrapper.find(".error");
    expect(error.text()).toEqual("Something went wrong...");
  });

  test("does not render error message when `error` prop is an empty string", () => {
    const wrapper = setup({ error: "" });
    const error = wrapper.find(".error");
    expect(error.length).toBe(0);
  });
});

describe("Player component or loading message", () => {
  const setup = (props = {}) => {
    return shallow(<Main {...props} />);
  };

  test("shows loading message when `loading` prop is true ", () => {
    const wrapper = setup({ loading: true });
    const loadingIndicator = wrapper.find(".loading");
    expect(loadingIndicator.text()).toEqual("Loading...");
  });

  test("shows Players component when `loading` prop is false", () => {
    const wrapper = setup({ loading: false });
    const players = wrapper.find(Players);
    expect(players.length).toBe(1);
  });
});
