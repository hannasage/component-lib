import { makeStyles } from "@material-ui/styles";

const defaultFontSize = 16;
const pxToRem = (pxValue: number): string => {
  return `${pxValue / defaultFontSize}rem`;
};

const useStyles = makeStyles({
  h1: {
    fontSize: `${pxToRem(36)}`,
    lineHeight: "1.167",
    letterSpacing: "-1.3px",
    fontWeight: 600,
    margin: 0,
  },

  h2: {
    fontSize: `${pxToRem(30)}`,
    lineHeight: "1.2",
    letterSpacing: "-0.5px",
    fontWeight: 600,
    margin: 0,
  },

  h3: {
    fontSize: `${pxToRem(24)}`,
    lineHeight: "1.167",
    letterSpacing: "0px",
    fontWeight: 600,
    margin: 0,
  },

  h4: {
    fontSize: `${pxToRem(20)}`,
    lineHeight: "1.235",
    letterSpacing: "0.25px",
    fontWeight: 600,
    margin: 0,
  },

  h5: {
    fontSize: `${pxToRem(18)}`,
    lineHeight: "1.25",
    letterSpacing: ".66px",
    fontWeight: 400,
    margin: 0,
  },

  h6: {
    fontSize: `${pxToRem(16)}`,
    lineHeight: "1.25",
    letterSpacing: "0.5px",
    fontWeight: 400,
    margin: 0,
  },

  p: {
    fontSize: `${pxToRem(16)}`,
    lineHeight: "1.5",
    letterSpacing: "0.15px",
    margin: 0,
  },

  display1: {
    fontSize: `${pxToRem(56)}`,
    lineHeight: "1.167",
    letterSpacing: "-1.2px",
    fontWeight: 200,
    margin: 0,
  },

  display2: {
    fontSize: `${pxToRem(42)}`,
    lineHeight: "1.167",
    letterSpacing: "-1px",
    fontWeight: 200,
    margin: 0,
  },
});

export { useStyles };
