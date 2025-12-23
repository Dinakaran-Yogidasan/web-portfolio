import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Target modern browsers
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    } as never,
    // Code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          react: ["react", "react-dom", "react-router-dom"],
          emailjs: ["@emailjs/browser"],
          lucide: ["lucide-react"],
        },
        // Optimize chunk names for caching
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },
    // Optimize CSS
    cssCodeSplit: true,
    cssMinify: "lightningcss",
    // Enable source maps for production debugging
    sourcemap: false,
    // Increase chunk size warning threshold
    chunkSizeWarningLimit: 600,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
