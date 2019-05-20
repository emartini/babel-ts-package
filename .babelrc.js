const productionPlugins = [
  "@babel/plugin-transform-react-constant-elements",
  [
    "babel-plugin-transform-react-remove-prop-types",
    {
      mode: "unsafe-wrap"
    }
  ]
];

module.exports = {
  presets: [
    "@babel/preset-react",
    [
      "@babel/env",
      {
        modules: false
      }
    ],
    "@babel/typescript"
  ],
  plugins: [
    "babel-plugin-optimize-clsx",
    ["@babel/proposal-class-properties", { loose: true }],
    ["@babel/proposal-object-rest-spread", { loose: true }],
    ["@babel/plugin-transform-runtime", {}]
  ],
  settings: {
    react: {
      version: "detect"
    }
  }
};
