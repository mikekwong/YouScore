import React from "react";
import { shallow } from "enzyme";

import Players from "../Players";
import Player from "../../Player/Player";

const dummyFunc = () => {};
const dummyArray = [
  {
    id: "1",
    first_name: "John",
    lastName: "Snow",
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
    lastName: "Curry",
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

describe("Players component", () => {
  const setup = (props = {}) => {
    return shallow(<Players {...props} />);
  };

  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      fppgPlayers: dummyArray,
      cachedPlayers: dummyArray,
      setCachedPlayers: dummyFunc
    });
  });

  test("shows Players component ", () => {
    const players = wrapper.find(".container-players");
    expect(players.length).toBe(1);
  });

  test("shows default message of zero score", () => {
    const scoreMessage = wrapper.find(".score");
    expect(scoreMessage.text()).toEqual("Your score: 0");
  });
});

describe("Show Player component", () => {
  const defaultProps = {
    fppgPlayers: dummyArray,
    cachedPlayers: dummyArray,
    setCachedPlayers: dummyFunc
  };

  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Players {...setupProps} />);
  };

  test("Player components renders new players", () => {
    const wrapper = setup({
      playerSelected: false
    });
    const playerPair = wrapper.find(".container-players");
    expect(playerPair.length).toBe(1);
  });

  test("Player components renders the same players before next round after selection", () => {
    const wrapper = setup({
      playerSelected: true
    });
    const playerPair = wrapper.find(".selected-players");
    expect(playerPair.length).toBe(1);
  });
});

// describe('player is selected', () => {
//   test('state updates boolean to true upon player selection', () => {
//     const mockSetPlayerSelected = jest.fn()
//     React.useState = jest.fn(() => ["", mockSetPlayerSelected])

//     const wrapper = setup()
//     const
//   });
// });

// describe("Score text", () => {
//   const onClickChange = jest.fn();
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<Players onClickChange={onClickChange} />);
//   });

//   test("shows default message of zero score", () => {
//     const scoreMessage = wrapper.find(".score");
//     expect(scoreMessage.text()).toEqual("Your score: 0");
//   });

//   test("correctly increments count by 1", () => {
//     expect(wrapper.find(".player").length).toBe(2);
//     // const scoreMessage = wrapper.find(".score");
//     // expect(scoreMessage.length).toBe(1);
//   });

//   // test('shows fppg score upon clicking a player', () => {
//   //   const correctGuesses = wrapper.find(".score");
//   //   expect(correctGuesses.length).toBe(1);
//   // });
// });

// describe("Players component", () => {
//   // let wrapper;
//   // beforeEach(() => {
//   //   wrapper = shallow(<Players />);
//   // });

//   test("should render a <div/>", () => {
//     const wrapper = shallow(<Players />);
//     const containerPlayers = wrapper.find(".container-players");
//     expect(containerPlayers.length).toBe(1);
//   });

//   // const setup = (props = {}) => {
//   //   return shallow(<Players {...props} />);
//   // };

//   // test("shows Players component", () => {
//   //   const wrapper = setup({});
//   //   const loadingIndicator = wrapper.find(".container-players");
//   //   expect(loadingIndicator.length).toBe(1);
//   // });
// });
