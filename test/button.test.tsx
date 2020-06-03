import { shallow } from "enzyme";
import * as React from "react";
import { Button } from "../src/components/Button/Button";

describe("Button", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper.find("Button")).toHaveLength(1);
  });
});
