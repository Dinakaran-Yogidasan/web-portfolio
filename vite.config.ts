import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          emailjs: ["@emailjs/browser"],
          lucide: ["lucide-react"],
        },
        chunkFileNames: "assets/[name].[hash].js",
        entryFileNames: "assets/[name].[hash].js",
        assetFileNames: "assets/[name].[hash][extname]",
      },
    },
    cssCodeSplit: true,
    cssMinify: "lightningcss",
    sourcemap: false,
    chunkSizeWarningLimit: 600,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
