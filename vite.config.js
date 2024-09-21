import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Calorie-Tracker/", // Set to your repo name
  plugins: [react()],
});
