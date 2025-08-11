import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Replace with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/workstream-flow/',
})
