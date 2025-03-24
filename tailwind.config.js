module.exports = {
  theme: {
    extend: {
      screens: {
        'custom': '961px', // Custom breakpoint at 961px
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), 
    require('@tailwindcss/container-queries'),
    function ({ addVariant }) {
      // Định nghĩa variant container-md
      addVariant('c-md', '@container (min-width: 768px)');
      // Thêm các breakpoint khác nếu cần
      addVariant('c-sm', '@container (min-width: 640px)');
      addVariant('c-lg', '@container (min-width: 1024px)');
      addVariant('c-xl', '@container (min-width: 1280px)');
    },
  ],
};