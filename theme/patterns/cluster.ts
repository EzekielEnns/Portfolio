import { definePattern } from "@pandacss/dev";

export const cluster = definePattern({
  properties: {
    justify: {
      type: "property",
      value: "justifyContent",
    },
    align: {
      type: "property",
      value: "alignItems",
    },
    spacing: {
      type: "property",
      value: "gap",
    },
  },
  defaultValues: {
    justify: "flex-start",
    align: "center",
    spacing: "1rem",
  },

  transform(props) {
    const { justify, spacing, align, ...rest } = props;
    return {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: justify,
      gap: spacing,
      alignItems: align,
      ...rest,
    };
  },
});
