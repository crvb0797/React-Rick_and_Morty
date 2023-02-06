import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://crvb0797.github.io/React-Rick_and_Morty/",
  plugins: [react()],
})
