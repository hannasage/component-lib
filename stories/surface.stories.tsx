import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Surface } from "../src";

storiesOf("Surface", module)
  .addParameters({
    info: {
      inline: true,
    },
  })
  .addDecorator((storyFn) => <div>{storyFn()}</div>)
  .add("Default", () => (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Surface style={{ margin: "0 1rem" }}></Surface>
      <Surface defaultDark style={{ margin: "0 1rem" }}></Surface>
    </div>
  ));
