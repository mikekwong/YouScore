import React from "react";
import { shallow } from "enzyme";

import Players from "../Players";
import Player from "../../Player/Player";

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
  cachedPlayers: dummyArray,
  setCachedPlayers: dummyFunc,
  setPlayerSelected: dummyFunc,
  playerSelected: true
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Players {...setupProps} />);
};

describe("Players component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("shows Player component when playerSelected is true", () => {
    expect(wrapper.length).toBe(1);
  });

  test("shows default message of zero score", () => {
    const scoreMessage = wrapper.find(".score");
    expect(scoreMessage.text()).toEqual("Your score: 0");
  });
});

describe("renders status based upon player selection", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  test("shows `Correct!` if picking the player with the higher fppg score", () => {
    const wrapper = setup({
      correct: true
    });
    const youWin = wrapper.find(".correct");
    expect(youWin.length).toBe(1);
  });
  test("shows `Try Again!` if picking the player with the higher fppg score", () => {
    const wrapper = setup({
      correct: false
    });
    const youWin = wrapper.find(".incorrect");
    expect(youWin.length).toBe(1);
  });
});

describe("renders the next round button", () => {
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);

  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("shows the button for next round", () => {
    const nextRound = wrapper.find("button");
    expect(nextRound.length).toBe(1);
  });
  test("the button clicks", () => {
    const nextRoundBtn = wrapper.find("button");
    nextRoundBtn.props().onClick();
    expect(setState).toHaveBeenCalled();
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
