import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Button } from "../src/components/Button";

storiesOf("Buttons", module)
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
  ));
