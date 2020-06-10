import { storiesOf } from "@storybook/react";
import * as React from "react";
import { useMediaQuery } from "../src/hooks";

import { Surface, Typography, Button } from "../src";

const ExampleOne = () => {
  const isSmall = useMediaQuery("(max-width: 640px");
  const isMedium = useMediaQuery("(max-width: 840px");
  const isMobile = useMediaQuery("only screen and (max-width: 840)");

  return (
    <Surface
      elevation={2}
      size={
        isSmall || isMedium || isMobile ? ["100%", "auto"] : ["50%", "auto"]
      }
      style={{ maxWidth: "700px", padding: "1rem" }}
    >
      <Typography variant="h3">Title</Typography>
      <Typography variant="h5">Subtitle</Typography>
      <Typography style={{ marginTop: "1rem" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget
        felis leo. Donec sit amet finibus lorem, sit amet vehicula quam.
        Maecenas nec justo dictum, lobortis tortor in, vulputate nulla. Aenean
        urna tortor, efficitur posuere ultrices ut, auctor ut odio. Phasellus
        ultricies ac magna in bibendum. Ut vitae magna vitae nibh varius
        imperdiet.
      </Typography>
    </Surface>
  );
};

const ExampleTwo = () => {
  const isSmall = useMediaQuery("(max-width: 640px");
  const isMedium = useMediaQuery("(max-width: 840px");

  return (
    <Surface
      size={isSmall || isMedium ? ["100%", "auto"] : ["33%", "auto"]}
      style={{
        color: "white",
        maxWidth: "700px",
        padding: "1rem",
        backgroundColor: "#1EA7FD",
        boxShadow: "-4px 4px 10px 4px rgba(0,0,0,0.2)",
      }}
    >
      <Typography variant="h3">Alert</Typography>
      <Typography style={{ marginTop: "1rem" }}>
        You have created an example component on top of the Surface component
        and API. You have also added a button to the surface.
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1rem",
        }}
      >
        <Button style={{ margin: 0 }} color="#f7f7f7" textColor="#1EA7FD">
          Confirm
        </Button>
      </div>
    </Surface>
  );
};

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
      <Surface
        className="surface-test-class"
        size={["200px", "200px"]}
      ></Surface>
      <Surface
        style={{
          backgroundColor: "#1EA7FD",
          boxShadow: "-4px 4px 10px 4px rgba(0,0,0,0.2)",
        }}
      ></Surface>
    </div>
  ))
  .add("Size", () => (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Surface size={["200px", "150px"]}></Surface>
      <Surface darkMode size={["10rem", "16rem"]}></Surface>
      <Surface
        darkMode
        size={["100%", "16rem"]}
        style={{ maxWidth: "200px" }}
      ></Surface>
    </div>
  ))
  .add("Elevation", () => (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Surface elevation={1} size={["200px", "200px"]}></Surface>
      <Surface size={["200px", "200px"]}></Surface>
      <Surface elevation={4} size={["200px", "200px"]}></Surface>
    </div>
  ))
  .add("Examples", () => (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <ExampleOne />
      <ExampleTwo />
    </div>
  ));
