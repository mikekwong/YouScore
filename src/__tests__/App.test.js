import React from "react";
import { render } from "@testing-library/react";
import { shallow, mount } from "enzyme";

import App from "../App";

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  // it("renders", () => {
  //   shallow(<App />);
  // });
});
