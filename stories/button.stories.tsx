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
  .add("Shapes", () => (
    <div>
      <Button shape={"pill"}>Pill Shape</Button>
      <Button shape={"rounded"}>Rounded</Button>
      <Button shape={"squared"}>Squared</Button>
    </div>
  ))
  .add("Colors", () => (
    <div>
      <Button textColor="rgb(250, 250, 250)" color="rgb(29, 161, 242)">
        Tweet
      </Button>
      <Button disabled textColor="rgb(250, 250, 250)" color="rgb(29, 161, 242)">
        Tweet
      </Button>
    </div>
  ))
  .add("Sizes", () => (
    <>
      <div>
        <Button color="#000" textColor="#fff">
          Large
        </Button>
        <Button color="#000" textColor="#fff" size="small">
          Small
        </Button>
      </div>
      <div>
        <Button shape="squared" color="#000" textColor="#fff">
          Large
        </Button>
        <Button shape="squared" color="#000" textColor="#fff" size="small">
          Small
        </Button>
      </div>
      <div>
        <Button shape="pill" color="#000" textColor="#fff">
          Large
        </Button>
        <Button shape="pill" color="#000" textColor="#fff" size="small">
          Small
        </Button>
      </div>
    </>
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
