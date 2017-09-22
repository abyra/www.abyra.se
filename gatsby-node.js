exports.modifyWebpackConfig = ({ config, stage }) => {
    switch (stage) {
        //{ app: '/home/johanleino/abyra.se/.cache/production-app' }
        case "build-javascript":
            const app = config._config.entry.app;
            config._config.entry.app = [require.resolve("./polyfills"), app];

            break;
        default:
            break;
    }

    return config;
};
