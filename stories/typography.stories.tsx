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
  .add("Samples", () => (
    <div>
      <Typography styleAs="display1">Display 1</Typography>
      <Typography styleAs="display2">Display 2</Typography>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <Typography>p Paragraph Text</Typography>
    </div>
  ))
  .add("className & Style", () => (
    <div>
      <Typography styleAs="display2">Styling</Typography>
      <div style={{ marginTop: "1rem" }}>
        <Typography variant="h1" styleAs="h3">
          {"ClassName & Style"}
        </Typography>
        <Typography variant="h5">
          A lesson on styling with style and className
        </Typography>
      </div>
      <Typography style={{ marginTop: "1rem" }}>
        You can style any <code>Typography</code> element using props such as{" "}
        <code>style</code> and <code>className</code>. Each variant has a
        default style associated with it via the JSS functionality of the
        @Material-UI/style library. However, <code>style</code> can be useful
        for adding additional styling for instances such as this paragraph
        needing a top margin for spacing.
      </Typography>
      <Typography className="test-class">
        Note: you are not locked in to the default CSS styles by any means. With
        a simple <code>className</code> prop, you can change styles completely,
        like this.
      </Typography>
    </div>
  ));
