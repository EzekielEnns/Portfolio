import { defineRecipe } from "@pandacss/dev";
export const imposter = defineRecipe({
  className: "imposter",
  base: {
    position: "fixed", //TODO make a variant
    insetBlockStart: "50%",
    insetInlineStart: "50%",
    transform: "translate(-50%,-50%)",
  },
  variants: {
    contain: {
      true: {
        "--margin": "0px",
        overflow: "auto",
        maxInlineSize: "calc(100% - (var(--margin) * 2))",
        maxBlockSize: "calc(100% - (var(--margin) * 2))",
      },
    },
  },
  defaultVariants: {
    contain: false,
  },
});
