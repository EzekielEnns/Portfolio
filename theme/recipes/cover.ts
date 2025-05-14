import { defineSlotRecipe } from "@pandacss/dev";
export const cover = defineSlotRecipe({
  className: "cover",
  slots: ["root", "body", "header", "footer"],
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      minBlockSize: "100vh",
      padding: "1rem",
    },
    body: {
      marginBlock: "auto",
    },
    header: {
      marginBlock: "1rem",
      marginBlockStart: "0",
    },
    footer: {
      marginBlockEnd: "0",
      marginBlockStart: "1rem",
    },
  },
  defaultVariants: {},
  variants: {},
});
