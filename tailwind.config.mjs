import daisyui from 'daisyui';

export default {
    content: [
        './src/**/*.{html,js,vue,css}',
        './src/*.{html,js,vue,css}',
        './src/components/*.{html,js,vue,css}',
        './index.html',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        daisyui,
    ],
    daisyui: {
        themes: ['light'],
    }
}
