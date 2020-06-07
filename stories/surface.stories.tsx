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
      <Surface darkMode style={{ margin: "0 1rem" }}></Surface>
    </div>
  ))
  .add("Class & Style Override", () => (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Surface className="surface-test-class"></Surface>
      <Surface
        style={{
          backgroundColor: "#1EA7FD",
          boxShadow: "-4px 4px 10px 4px rgba(0,0,0,0.2)",
        }}
      ></Surface>
    </div>
  ));
