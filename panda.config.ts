import { defineConfig } from "@pandacss/dev";
import { stack } from "./theme/patterns/stack";
import { frame } from "./theme/patterns/frame";
import { box } from "./theme/patterns/box";
import { grid } from "./theme/patterns/grid";
import { cluster } from "./theme/patterns/cluster";
import { switcher } from "./theme/patterns/switcher";
import { cover } from "./theme/recipes/cover";
import { imposter } from "./theme/recipes/imposter";

export default defineConfig({
  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  // Files to exclude
  exclude: [],

  patterns: {
    extend: {
      stack,
      frame,
      box,
      cluster,
      switcher,
      grid,
    },
  },
  theme: {
    extend: {
      recipes: {
        cover,
        imposter,
      },
      tokens: {},
    },
  },
});
