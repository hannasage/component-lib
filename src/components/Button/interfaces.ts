type Shape = "rounded" | "squared" | "pill" | undefined;
type TextStyle = "uppercase" | "lowercase" | "capitalize" | undefined;
type Size = "small" | "large";

const borderRadius = (propBorder: Shape) => {
  if (propBorder === "pill") return 500;
  if (propBorder === "squared") return 0;
  return 5;
};

const padding = (size: Size | undefined) => {
  if (size === "small") return ".66rem 1rem";
  return ".88rem 1.4rem";
};

export { borderRadius, Shape, TextStyle, padding, Size };
