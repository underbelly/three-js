const withTM = require('next-transpile-modules')([
  '@react-three/drei',
  'three',
]);

module.exports = {
  target: 'serverless',
};

module.exports = withTM({
  webpack5: false,
});
