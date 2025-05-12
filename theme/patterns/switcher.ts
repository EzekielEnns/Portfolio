import { definePattern } from "@pandacss/dev";

export const switcher = definePattern({
  description: "TODO",
  properties: {
    spacing: {
      type: "property",
      value: "gap",
    },
    threshold: {
      type: "number",
    },
    limit: {
      type: "number",
    },
  },
  defaultValues: {
    maxItem: 5,
    spacing: "1rem",
    threshold: "30rem",
    limit: 4,
  },
  transform(props) {
    const { spacing, threshold, limit, ...rest } = props;
    return {
      gap: spacing,
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        flexGrow: 1,
        flexBasis: `calc((${threshold} - 100%) * 999)`,
      },
      [`& > :nth-last-child(n+ ${limit}), & > :nth-last-child(n+ ${limit}) ~ *`]:
        {
          flexBasis: "100%",
        },
      ...rest,
    };
  },
});
