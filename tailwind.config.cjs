/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'display': ['Edu QLD Beginner', 'cursive']
    },
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '52': 'repeat(52, minmax(auto, 1fr))',
      },
      gap: {
        'custom': '4px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
