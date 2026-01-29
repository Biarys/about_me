import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createHtmlPlugin } from "vite-plugin-html";
import { PERSONAL_INFO } from "./src/constants/info";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  base: "/about_me/",
  plugins: [
    react(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: `${PERSONAL_INFO.firstName} | ${PERSONAL_INFO.title}`,
          description: PERSONAL_INFO.bio.split(".")[0] + ".",
          author: `${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName}`,
          ogTitle: `${PERSONAL_INFO.firstName} ${PERSONAL_INFO.lastName} | ${PERSONAL_INFO.title}`,
          ogDescription: `${PERSONAL_INFO.bio.split(".")[0]}.`,
          ogUrl: "https://biarys.github.io/about_me/",
          ogImage: `/about_me/icon.svg`,
        },
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
