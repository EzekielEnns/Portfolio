import { definePattern } from "@pandacss/dev";

export const stack = definePattern({
  description: "TODO",
  properties: {
    justify: {
      type: "property",
      value: "justifyContent",
    },
    spacing: {
      type: "property",
      value: "marginBlockStart",
    },
  },
  defaultValues: {
    stack: "flex-start",
    spacing: "1.5rem",
  },
  transform(props) {
    const { justify, spacing, ...rest } = props;
    return {
      display: "flex",
      justifyContent: justify,
      flexDirection: "column",
      "& > *": {
        marginBlock: "0",
      },
      ["& > * + *"]: {
        marginBlockStart: spacing,
      },
      ...rest,
    };
  },
});
