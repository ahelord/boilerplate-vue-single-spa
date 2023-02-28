import { fileURLToPath, URL } from "url";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig, loadEnv } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default ({ mode }) => {
  // eslint-disable-next-line no-undef
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  // eslint-disable-next-line no-undef
  console.log("app_env ", process.env.VITE_APP_ENV);
  console.log("build_mode ", process.env.VITE_BUILD_MODE);
  console.log("base_url ", process.env.VITE_APP_BASE_URL);

  return defineConfig({
    // config with hash
    build: {
      outDir: "dist-mfe",
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].js`,
          chunkFileNames: `assets/[name].js`,
          assetFileNames: `assets/[name].[ext]`,
        },
      },
    },
    rollupOptions: {
      input: "src/main.js",
      format: "system",
      preserveEntrySignatures: true,
    },
    base: process.env.VITE_APP_BASE_URL,
    plugins: [
      cssInjectedByJsPlugin(),
      vue({
        template: {
          transformAssetUrls: {
            base: "/src",
          },
        },
      }),
      vueJsx(),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};
