/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
        keyframes: {
              'pulse-soft': {
                '0%, 100%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.1)' },
              },
            },
            animation: {
              'pulse-soft': 'pulse-soft 1.5s ease-in-out infinite',
            },
          
      colors: {
        // Modo oscuro
        'dark-bg': '#1e293b',
        'dark-text': '#ffffff',
        'dark-primary': '#38bdf8', // Cyan-400

        // Modo claro
        'light-bg': '#95b3e7',       // fondo principal
        'light-section': '#FFFFFF',   // secciones / tarjetas
        'light-header-footer': '#E0E7FF', // header/footer
        'light-text': '#111827',     // texto principal
        'light-title': '#1E40AF',    // títulos
        'light-primary': '#4F46E5',  // botones y links
        'light-primary-hover': '#6366F1', // hover botones/links
        'light-cta': '#22D3EE',      // botones secundarios
      },
      fontSize: {
        'section-text': ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        'section-title': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
      },
      fontWeight: {
        'section': '700', // negrita
      },
    },
  },
  plugins: [],
}
