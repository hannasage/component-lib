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

  it("Renders children", () => {
    const wrapper = shallow(<Surface>Test</Surface>);
    const element = wrapper.find(HTMLDivElement);
    expect(element.text().trim()).toEqual("Test");
  });

  it("Takes style and className props, and styles accordingly", () => {
    const sWrapper = shallow(<Surface style={{ background: "#000" }} />);
    const cnWrapper = shallow(<Surface className="surface-test-class" />);
    expect(cnWrapper.find(HTMLDivElement).prop("className")).toBe(
      "surface-test-class"
    );
    expect(sWrapper.find(HTMLDivElement).get(0).props.style).toHaveProperty(
      "background",
      "#000"
    );
  });
});
