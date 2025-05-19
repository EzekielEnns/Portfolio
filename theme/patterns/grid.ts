import { definePattern } from "@pandacss/dev";

export const grid = definePattern({
  description: "TODO",
  properties: {
    spacing: {
      type: "property",
      value: "gridGap",
    },
    max: {
      type: "number",
    },
    minimum: {
      type: "number",
    },
  },
  defaultValues: {
    spacing: "1rem",
    minimum: 250,
    max: 1,
  },
  transform(props) {
    const { minimum, spacing, max, ...rest } = props;
    return {
      display: "grid",
      gridGap: spacing,
      [`@supports (width: min(${minimum}px, 100%))`]: {
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${minimum}px, 100%), ${max}fr))`,
      },
      ...rest,
    };
  },
});
