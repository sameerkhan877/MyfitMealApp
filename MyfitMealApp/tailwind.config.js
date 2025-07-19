///** @type {import('tailwindcss').Config} */
//module.exports = {
//    content: [
//        './Views/**/*.cshtml',
//        './wwwroot/js/**/*.js'    ],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./Views/**/*.cshtml",
        "./wwwroot/**/*.html",
        "./**/*.cshtml"
    ],
    theme: {
        extend: {
            colors: {
                greenish: "#518023",
                red: "#ff4d4d",
            },
            backgroundImage: {
                'btn-border-gradient': 'linear-gradient(90deg, #e8cbc0, #636fa4)',
            }
        },
    },
    plugins: [],
    important: true,
}
