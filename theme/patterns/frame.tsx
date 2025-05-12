import { definePattern } from "@pandacss/dev";

export const frame = definePattern({
  description: "TODO",
  properties: {
    numerator: {
      type: "number",
    },
    denominator: {
      type: "number",
    },
    objectFit: {
      type: "property",
      value: "objectFit",
    },
    objectPosition: {
      type: "property",
      value: "objectPosition",
    },
  },
  defaultValues: {
    numerator: 16,
    denominator: 9,
    objectFit: "cover",
    objectPosition: undefined,
  },

  transform(props) {
    const { objectPosition, objectFit, numerator, denominator, ...rest } =
      props;
    return {
      aspectRatio: `${numerator.toString()} / ${denominator.toString()}`,
      display: "flex",
      overflow: "hidden",
      justifyContent: "center",
      alignItems: "center",
      "& > img, & > video": {
        inlineSize: "100%",
        blockSize: "100%",
        objectFit,
        objectPosition,
      },
      ...rest,
    };
  },
});
