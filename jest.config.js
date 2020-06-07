const { defaults } = require("jest-config");

module.exports = {
  ...defaults,
  verbose: true,
  transform: {
    "^.+\\.js?$": "babel-jest",
    "^.+\\.svelte$": "svelte-jester",
  },
  moduleFileExtensions: ["js", "svelte"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  collectCoverageFrom: [
    "**/src/**.*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**",
  ],
};
