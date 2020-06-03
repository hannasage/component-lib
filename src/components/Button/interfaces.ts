export type Shape = "rounded" | "squared" | "pill" | undefined;
export type TextStyle = "uppercase" | "lowercase" | "capitalize" | undefined;
export type Size = "small" | "large";

export const borderRadius = (propBorder: Shape) => {
  if (propBorder === "pill") return 500;
  if (propBorder === "squared") return 0;
  return 5;
};

export const padding = (size: Size | undefined) => {
  if (size === "small") return ".66rem 1rem";
  return ".88rem 1.4rem";
};
