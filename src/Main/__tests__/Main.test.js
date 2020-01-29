import React from "react";
import { render } from "@testing-library/react";
import { shallow } from "enzyme";

import Main from "../Main";
import Players from "../../Players/Players";

const dummyFunc = () => {};
const dummyArray = [
  {
    id: "1",
    first_name: "John",
    last_name: "Snow",
    fppg: 82.828592852933,
    images: {},
    injured: false,
    injury_details: "arm",
    injury_status: "o",
    news: {},
    played: 59,
    player_card_url: "https://test.com",
    position: "PG",
    removed: false,
    salary: 10600,
    starting_order: null,
    team: {}
  },
  {
    id: "2",
    first_name: "Stephen",
    last_name: "Curry",
    fppg: 82.828592852933,
    images: {},
    injured: false,
    injury_details: "knee",
    injury_status: "o",
    news: {},
    played: 79,
    player_card_url: "https://test.com",
    position: "PG",
    removed: false,
    salary: 10600,
    starting_order: null,
    team: {}
  }
];

const defaultProps = {
  loading: false,
  fppgPlayers: dummyArray,
  setCachedPlayers: dummyFunc
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Main {...setupProps} />);
};

describe("Main component", () => {
  test("should render a <div/>", () => {
    const wrapper = setup();
    expect(wrapper.find("div").length).toEqual(1);
  });
});

describe("Error message", () => {
  test("renders error message when `error` prop has a string value", () => {
    const wrapper = setup({
      error: "network error"
    });
    const error = wrapper.find(".error");
    expect(error.text()).toEqual("Something went wrong...");
  });

  test("does not render error message when `error` prop is an empty string", () => {
    const wrapper = setup({
      error: ""
    });
    const error = wrapper.find(".error");
    expect(error.length).toBe(0);
  });
});

describe("Player component or loading message", () => {
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
