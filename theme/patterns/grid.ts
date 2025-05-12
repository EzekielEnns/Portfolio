import { definePattern } from "@pandacss/dev";

export const grid = definePattern({
  description: "TODO",
  properties: {
    spacing: {
      type: "property",
      value: "gridGap",
    },
    minimum: {
      type: "number",
    },
  },
  defaultValues: {
    spacing: "1rem",
    minimum: 250,
  },
  transform(props) {
    const { minimum, spacing, ...rest } = props;
    return {
      display: "grid",
      gridGap: spacing,
      [`@supports (width: min(${minimum}px, 100%))`]: {
        gridTemplateColumns: `repeat(auto-fit, minmax(min(${minimum}px, 100%), 1fr))`,
      },
      ...rest,
    };
  },
});
