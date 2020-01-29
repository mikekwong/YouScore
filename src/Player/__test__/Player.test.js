import React from "react";
import { shallow } from "enzyme";

import Player from "../Player";

// describe("clicking", () => {
//   const onCountChange = jest.fn();

//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<Player onCountChange={onCountChange} />);
//   });
//   test("should ", () => {
//     console.log(wrapper.debug());
//   });
// });

const dummyFunc = () => {};
const dummyArray = {
  id: "1",
  first_name: "John",
  lastName: "Snow",
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
  // const onClickPlayer = jest.fn();

  const setup = (props = {}) => {
    return shallow(<Player {...props} />);
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      player: dummyArray,
      onClickPlayer: dummyFunc,
      playerSelected: dummyFunc
    });
  });

  test("shows Players component ", () => {
    wrapper.find("div");
    expect(wrapper.find("div").length).toEqual(1);

    console.log(wrapper.debug());
  });

  test("shows img tag", () => {
    expect(wrapper.find("img").length).toEqual(1);
  });

  test("shows name tag", () => {
    expect(wrapper.find(".name").length).toEqual(1);
  });

  test("shows fppg score tag", () => {
    expect(wrapper.find(".fppg").length).toEqual(1);
  });

  // test("clicking an image", () => {
  //   const image = wrapper.find("img");

  //   const mockEvent = { target: { src: "imageName.png" } };
  //   image.simulate("click", mockEvent);
  //   expect(onClickPlayer).toBeCalledTimes(1);
  // });
});

// test("state updates to true upon player selection", () => {
//   const wrapper = shallow(<Player />);
//   const button = wrapper.find("img");
//   expect(button.length).toBe(1);

//   console.log(wrapper.debug());

//   // const mockEvent = { target: { player: "John Lin" } };
//   // playerPair.simulate("click", mockEvent);
// });
