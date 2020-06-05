import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Typography } from "../src";

storiesOf("Welcome", module).add("Introduction", () => (
  <div style={{ padding: "2rem" }}>
    <Typography styleAs="display2">Component Library</Typography>
    <div>
      <Typography variant="h1" styleAs="h4">
        A bespoke component library by Kevin Haube
      </Typography>
    </div>
  </div>
));
