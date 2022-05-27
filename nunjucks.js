const slugify = require("slugify");
const _shuffle = require("lodash/shuffle");

module.exports = function (environment) {
  environment.addFilter(
    "await",
    async function (functionPromise, callback) {
      try {
        // The called function is a Promise
        const result = await functionPromise;
        callback(null, result);
      } catch (error) {
        callback(error);
      }
    },
    true
  );

  environment.addFilter("findObjByKeyValue", function (array, key, value) {
    return array.find((obj) => obj[key] === value);
  });

  environment.addFilter("each", function (items, filter) {
    return items.map((i) => {
      return environment.filters[filter](i);
    });
  });

  environment.addFilter("skip", function (array, count) {
    return array.slice(count);
  });

  environment.addFilter("take", function (array, count) {
    return array.slice(0, count);
  });

  environment.addFilter("slug", function (string) {
    return slugify(string, { lower: true });
  });

  environment.addFilter("shuffle", function (array) {
    return _shuffle(array);

    // let currentIndex = array.length,
    //   randomIndex;

    // // While there remain elements to shuffle.
    // while (currentIndex != 0) {
    //   // Pick a remaining element.
    //   randomIndex = Math.floor(Math.random() * currentIndex);
    //   currentIndex--;

    //   // And swap it with the current element.
    //   [array[currentIndex], array[randomIndex]] = [
    //     array[randomIndex],
    //     array[currentIndex],
    //   ];
    // }

    // return array;
  });

  environment.addGlobal("getVars", function () {
    return this.getVariables();
  });
};
