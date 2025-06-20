import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { cloudflare } from "@cloudflare/vite-plugin";
import { resolve } from "node:path";
// https://vite.dev/config/
//
export default defineConfig({
  resolve: {
    alias: {
      "@styled-system": resolve(__dirname, "./styled-system"),
      "@styled-system/types": resolve(
        __dirname,
        "./styled-system/types/index.d.ts",
      ),
      //      "@styled-system/*": resolve(_dirname, "./styled-system/*"),
    },
  },
  plugins: [react(), tsconfigPaths(), cloudflare()],
});
