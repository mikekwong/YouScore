import React from "react";
import { shallow } from "enzyme";

import Player from "../Player";

const dummyFunc = () => {};
const dummyArray = {
  id: "1",
  first_name: "John",
  last_name: "Snow",
  fppg: 82.828592852933,
  images: { default: "http://test.com/me.png" },
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
};

describe("Player component", () => {
  const setup = (props = {}) => {
    return shallow(<Player {...props} />);
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      player: dummyArray,
      onClickPlayer: dummyFunc,
      setPlayerSelected: dummyFunc,
      playerSelected: true
    });
  });

  test("shows Players component ", () => {
    wrapper.find("div");
    expect(wrapper.find("div").length).toEqual(1);
  });

  test("shows img tag", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });

  test("shows name tag", () => {
    expect(wrapper.find(".player__name").length).toEqual(1);
  });

  test("shows fppg score tag", () => {
    expect(wrapper.find(".player__fppg").length).toEqual(1);
  });
});
