module.exports = {
  env: {
    // USED FOR NODE/RUNTIME
    // maybe we should differenciate both cases because
    // we mostly need to transpile some features so that node does not crash...
    lib: {
      presets: [
        ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
      ],
      // Useful to transpile for older node versions
      plugins: [
        "@babel/plugin-transform-modules-commonjs",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        "@babel/plugin-proposal-optional-chaining",
      ],
    },
  },
};
