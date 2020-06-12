import { shallow } from "enzyme";
import * as React from "react";

import { Surface } from "../src";

describe("Surface", () => {
  it("Renders without crashing", () => {
    const wrapper = shallow(<Surface />);
    const element = wrapper.find(HTMLDivElement);
    expect(element).toHaveLength(1);
  });

  it("Applies Dark Mode default styling through darkMode property", () => {
    const wrapper = shallow(<Surface darkMode={true} />);
    const element = wrapper.find(HTMLDivElement);
    expect(element.prop("darkMode")).toBeTruthy;
  });
});
