const env = process.env.NODE_ENV || process.env.BABEL_ENV;
const isEnvProduction = env === "production";
const isEnvDevelopment = env === "development";
const isEnvTest = env === "test";

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
    [
      "@babel/preset-react",
      {
        development: isEnvDevelopment || isEnvTest,
        useBuiltIns: true
      }
    ],
    [
      "@babel/env",
      {
        modules: false,
        exclude: ["transform-typeof-symbol"]
      }
    ],
    "@babel/typescript"
  ],
  plugins: [
    "babel-plugin-optimize-clsx",
    [
      "@babel/plugin-transform-destructuring",
      {
        loose: false,
        selectiveLoose: [
          "useState",
          "useEffect",
          "useContext",
          "useReducer",
          "useCallback",
          "useMemo",
          "useRef",
          "useImperativeHandle",
          "useLayoutEffect",
          "useDebugValue"
        ]
      }
    ],
    ["@babel/proposal-class-properties", { loose: true }],
    ["@babel/proposal-object-rest-spread", { useBuiltIns: true }],
    ["@babel/plugin-transform-runtime", {}]
  ].concat(isEnvProduction ? productionPlugins : [])
};
