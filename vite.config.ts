import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import { config } from "dotenv";
import tsconfigPaths from "vite-tsconfig-paths"

config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
