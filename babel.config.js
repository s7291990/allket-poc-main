module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [ 
        'module-resolver',
        {
          extensions: ['.ts', '.tsx'],
          root: [ '.' ],
          alias: {
            '@features': "./features",
            '@assets': "./assets"
          }
        }
      ],
    ]
  };
};
