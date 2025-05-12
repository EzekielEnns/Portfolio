import { tabsAnatomy } from "@ark-ui/react";
import { defineSlotRecipe } from "@pandacss/dev";
export const tabStyles = defineSlotRecipe({
  className: "accordion",
  slots: tabsAnatomy.keys(),
  base: {
    root: {
      width: "100%",
      margin: ["0", "0 auto"],
      padding: ["8px"],
    },
    list: {
      display: "flex",
      borderBottom: "2px solid #ddd",
    },
    trigger: {
      flex: 1,
      padding: ["4px", "8px", "12px 16px"],
      border: "none",
      borderBottom: "2px solid transparent",
      cursor: "pointer",
      fontSize: ["12px", "16px"],
      transition: "all 0.1s ease",
      _selected: {
        borderColor: "#3182ce",
        fontWeight: "bold",
        color: "#3182ce",
      },
    },
    content: {
      padding: "16px",
      border: "1px solid #ddd",
      borderTop: "none",
      backgroundColor: "white",
    },
  },
  defaultVariants: {},
  variants: {},
});
