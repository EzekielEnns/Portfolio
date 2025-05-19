import { definePattern } from "@pandacss/dev";

export const box = definePattern({
  description: "TODO",
  properties: {},
  transform(props) {
    return {
      //TODO make a var for this
      padding: "1rem",
      //TODO make a var for this too
      border: "1px solid black",
      "& *": {
        //color: "inherit",
      },
      ...props,
    };
  },
});
