import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Typography } from "../src";

storiesOf("Typography", module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => (
    <div style={{ textAlign: "left", marginLeft: "2.5rem" }}>{storyFn()}</div>
  ))
  .add("Button", () => (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography>p Paragraph Text</Typography>
    </div>
  ));
