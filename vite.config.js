import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //changing default port
  server: {
    port: 3000,
    proxy: {
      //setting default proxy http
      "/api": {
        target: "http://localhost:5001",
        changeOrigin: true,
      },
    },
  },
});
