const defaultTheme = require('tailwindcss/defaultTheme');


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        screens: {
            '2xl': {'max': '2000px'},
            // => @media (max-width: 2000px) { ... }
            'xl': {'max': '1400px'},
            // => @media (max-width: 1400px) { ... }
            'med': {'max': '1000px'},
            // => @media (max-width: 1000px) { ... }

            'tablet': {'max': '800px'},
            // => @media (max-width: 800px) { ... }

            'phone': {'max': '500px'}
            // => @media (max-width: 400 { ... }
        
        },
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
