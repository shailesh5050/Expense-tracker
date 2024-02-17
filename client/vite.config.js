import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Replace '/api' with your API base path if different
      "/api": {
        target: "http://localhost:3000", // Replace with your backend server URL
        changeOrigin: true, // Change the origin in the response to match your frontend
        secure: false, // Only needed if targeting an HTTPS server
        // Optional additional options here:
        // - rewrite: (path) => { ... }, // Rewrite request paths
        // - bypass: (req) => { ... }, // Bypass proxying for certain requests
        // - ... (refer to http-proxy documentation for more options)
      },
    },
  },
});
