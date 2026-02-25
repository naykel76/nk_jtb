import purgecss from '@fullhuman/postcss-purgecss';

export default {
    plugins: [
        // purgecss({
        //     content: [
        //         './src/**/*.scss',
        //         './docs/**/*.md',
        //         './index.html',
        //         './dev.html',
        //     ],
        //     safelist: {
        //         standard: [
        //             'primary', 'secondary', /^m-/, /^p-/, /^btn/, /^input/, /^form/, /^container/, /^row/, /^col/  // sample, tune as needed
        //         ],
        //         deep: [/^btn-/, /^col-/, /^container-/, /^row-/, /^primary$/],
        //         greedy: [],
        //     },
        //     rejected: false
        // })
    ],
};
