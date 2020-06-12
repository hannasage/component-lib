import { shallow } from "enzyme";
import * as React from "react";
import "jest-styled-components";
import * as sinon from "sinon";
import { Button, FilledButton, OutlinedButton } from "../src";

describe("Button", () => {
  it("renders filled without crashing, and by default", () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper.find(FilledButton)).toHaveLength(1);
  });

  it("renders outlined without crashing, through props", () => {
    const wrapper = shallow(<Button filled={false}>Test</Button>);
    expect(wrapper.find(OutlinedButton)).toHaveLength(1);
  });

  it("renders text passed between its tags", () => {
    const wrapper = shallow(<Button>Test</Button>);
    expect(wrapper.find(FilledButton).text().trim()).toEqual("Test");
  });

  it("becomes disabled when disabled prop is true", () => {
    const wrapper = shallow(<Button disabled>Disabled</Button>);
    expect(wrapper.find(FilledButton).prop("disabled")).toEqual(true);
  });

  it("changes shape based on shape prop", () => {
    const squaredWrapper = shallow(<Button shape="squared">Squared</Button>);
    const roundedWrapper = shallow(<Button shape="rounded">Rounded</Button>);
    const pillWrapper = shallow(<Button shape="pill">Pill</Button>);
    expect(squaredWrapper.find(FilledButton)).toHaveStyleRule(
      "border-radius",
      "0px"
    );
    expect(roundedWrapper.find(FilledButton)).toHaveStyleRule(
      "border-radius",
      "5px"
    );
    expect(pillWrapper.find(FilledButton)).toHaveStyleRule(
      "border-radius",
      "500px"
    );
  });

  it("changes size with the size prop", () => {
    const defaultWrapper = shallow(<Button size="large">Large</Button>);
    const smallWrapper = shallow(<Button size="small">Small</Button>);
    expect(defaultWrapper.find(FilledButton)).toHaveStyleRule(
      "padding",
      ".88rem 1.4rem"
    );
    expect(smallWrapper.find(FilledButton)).toHaveStyleRule(
      "padding",
      ".66rem 1rem"
    );
  });

  it("changes background color if filled, or border color if outlined, using the color prop", () => {
    const filledWrapper = shallow(<Button color="#fff">Test</Button>);
    // const outlinedWrapper = shallow(
    //   <Button filled={false} color="#fff">
    //     Test
    //   </Button>
    // );
    expect(filledWrapper.find(FilledButton)).toHaveStyleRule(
      "background",
      "#fff"
    );
    /**
     * Currently adjusting how Outlined Buttons are styled
     */
    // expect(outlinedWrapper.find(OutlinedButton)).toHaveStyleRule(
    //   "border",
    //   "2px solid #fff"
    // );
  });

  it("changes text color through textColor prop", () => {
    const wrapper = shallow(<Button textColor="#fff">Test</Button>);
    expect(wrapper.find(FilledButton)).toHaveStyleRule("color", "#fff");
  });

  it("changes the text-transform property based on textStyle prop", () => {
    const capitalizeWrapper = shallow(
      <Button textStyle="capitalize">test</Button>
    );
    const uppercaseWrapper = shallow(
      <Button textStyle="uppercase">test</Button>
    );
    const lowercaseWrapper = shallow(
      <Button textStyle="lowercase">test</Button>
    );
    expect(capitalizeWrapper.find(FilledButton)).toHaveStyleRule(
      "text-transform",
      "capitalize"
    );
    expect(uppercaseWrapper.find(FilledButton)).toHaveStyleRule(
      "text-transform",
      "uppercase"
    );
    expect(lowercaseWrapper.find(FilledButton)).toHaveStyleRule(
      "text-transform",
      "lowercase"
    );
  });

  it("carries out action designated in onClick when clicked", () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Button onClick={onButtonClick}>Click</Button>);
    wrapper.find(FilledButton).simulate("click");
    expect(onButtonClick).toHaveProperty("callCount", 1);
  });
});
