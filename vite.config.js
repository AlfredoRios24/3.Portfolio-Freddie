import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'  // <-- asegúrate de instalar este paquete

export default defineConfig({
  base: './',          // mantiene la ruta relativa para S3
  plugins: [react({
    jsxRuntime: 'automatic'   // habilita el JSX runtime automático
  })]
})
