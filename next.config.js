module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/autumn',
        permanent: true,
      },
    ]
  },
  // webpack(config, options) {
  //   config.resolve.modules.push(path.resolve("./"));
  //   return config;
  // },
  // basePath: "/xxx",
  assetPrefix: "./"
};