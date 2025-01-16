const path = require('path');

module.exports = {
    // ...other configurations
    resolve: {
        alias: {
            '@style': path.resolve(__dirname, 'src/style'),
        },
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
};
