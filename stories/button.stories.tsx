import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import * as React from "react";

import { Button } from "../src";

storiesOf("Button", module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: "center" }}>{storyFn()}</div>
  ))
  .add("Button", () => (
    <div>
      <Button>Default</Button>
      <Button disabled>Disabled</Button>
    </div>
  ))
  .add("Styles (beta)", () => (
    <div>
      <Button size="small" filled={false}>
        Unfilled
      </Button>
      <Button size="small" shape="pill" filled={false}>
        Pill Unfilled
      </Button>
    </div>
  ))
  .add("Shapes", () => (
    <div>
      <Button shape={"pill"}>Pill Shape</Button>
      <Button shape={"rounded"}>Rounded</Button>
      <Button shape={"squared"}>Squared</Button>
    </div>
  ))
  .add("Sizes", () => (
    <>
      <div>
        <Button>Large</Button>
        <Button size="small">Small</Button>
      </div>
      <div>
        <Button shape="squared">Large</Button>
        <Button shape="squared" size="small">
          Small
        </Button>
      </div>
      <div>
        <Button shape="pill">Large</Button>
        <Button shape="pill" size="small">
          Small
        </Button>
      </div>
    </>
  ))
  .add("Colors", () => (
    <div>
      <Button color="#d68c42" textColor="#fff">
        Color
      </Button>
      <Button disabled color="#d68c42" textColor="#fff">
        Color
      </Button>
    </div>
  ))
  .add("Actions", () => (
    <div>
      <Button onClick={action("Clicked!")} color="#E50914" textColor="#fff">
        Login
      </Button>
      <Button
        disabled
        onClick={action("Clicked!")}
        color="#E50914"
        textColor="#fff"
      >
        Login
      </Button>
    </div>
  ));
