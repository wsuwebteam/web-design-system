const minimist = require("minimist");

const args = minimist(process.argv.slice(2), {
  default: {
    env: "development",
  },
});

module.exports = {
  env: args.env,
  outputDir: args.env === "production" ? "dist" : "test",
};
