const resolve = require("resolve");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        {
            // Options for PostCSS as we reference these options twice
            // Adds vendor prefixing based on your specified browser support in
            // package.json
            loader: require.resolve("postcss-loader"),
        }
    ];
    if (preProcessor) {
        loaders.push(require.resolve(preProcessor));
    }
    return loaders;
};

module.exports = ({ config, mode }) => {
    config.module.rules.push(
        {
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", { flow: false, typescript: true }]]
            }
        },
        {
            test: cssRegex,
            exclude: cssModuleRegex,
            use: getStyleLoaders({
                importLoaders: 1
            })
        },
        {
            test: cssModuleRegex,
            use: getStyleLoaders({
                importLoaders: 1,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent
            })
        },
        {
            test: sassRegex,
            exclude: sassModuleRegex,
            use: getStyleLoaders({ importLoaders: 2 }, "sass-loader")
        },
        {
            test: sassModuleRegex,
            use: getStyleLoaders(
                {
                    importLoaders: 2,
                    modules: true,
                    getLocalIdent: getCSSModuleLocalIdent
                },
                "sass-loader"
            )
        }
    );
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
};
