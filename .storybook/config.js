import React from "react";
import { configure, addParameters, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "../src/styles.css";

addDecorator(withInfo);

addDecorator((Story) => <Story />);

addParameters({
  options: {
    name: "Component Library",
    url: "https://github.com/kevinhaube/component-lib",
    showPanel: false,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /\.stories\.tsx$/);

function loadStories() {
  require("../stories/welcome");
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
