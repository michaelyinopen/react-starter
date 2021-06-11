"use strict"

module.exports = function (api) {
  var env = process.env.BABEL_ENV || process.env.NODE_ENV || "development"
  var isEnvDevelopment = env === "development"
  var isEnvProduction = env === "production"
  var isEnvTest = env === "test"

  if (!isEnvDevelopment && !isEnvProduction && !isEnvTest) {
    throw new Error(
      'Please specify `NODE_ENV` or `BABEL_ENV` environment variables. ' +
      'Valid values are "development", "test", and "production". ' +
      'Instead, received: ' +
      JSON.stringify(env) +
      '.'
    )
  }

  // cache when environment is development or test, otherwise do not cache
  api.cache.using(() => {
    return isEnvDevelopment
      ? "development"
      : isEnvTest
        ? "test"
        : false
  })

  return {
    presets: [
      [
        "@babel/env",
        {
          "targets": isEnvProduction || isEnvDevelopment
            ? "defaults"
            : {
              "node": "current"
            },
          "useBuiltIns": "usage",
          "corejs": "3.13",
          "exclude": [
            "transform-typeof-symbol"
          ]
        }
      ],
      [
        "@babel/preset-react",
        {
          development: isEnvDevelopment || isEnvTest,
          runtime: "automatic",
        }
      ],
      ["@babel/preset-typescript"]
    ],
    plugins: [
      [
        "@babel/plugin-transform-runtime",
        {
          version: require("@babel/runtime/package.json").version,
        },
      ]
    ]
  }
}