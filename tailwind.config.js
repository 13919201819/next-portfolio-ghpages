// module.exports = {
//     content: [
//         "./pages/**/*.{js,ts,jsx,tsx}",
//         "./components/**/*.{js,ts,jsx,tsx}",
//         "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//         extend: {},
//     },
//     plugins: [],
// };

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}", // if you use app directory
        "./public/index.html" // just in case you include raw HTML
    ],
    safelist: [
        "text-purple-500",
        "text-white",
        "bg-gradient-to-r",
        "from-black",
        "to-purple-900",
        "shadow-lg",
        "hover:scale-105",
        "text-glow", // custom classes
        "gradient-text", // if used
        "rounded-full",
        "border-purple-500",
        "hover:bg-white",
        "hover:text-black",
        "backdrop-blur-xl",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
};