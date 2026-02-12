const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy("src/.css");
    eleventyConfig.addPassthroughCopy("src/.fonts");
    eleventyConfig.addPassthroughCopy("src/.images");
    eleventyConfig.addPassthroughCopy("src/.well-known");
    eleventyConfig.addPassthroughCopy({ "src/.favicon": "/" });

    return {
        dir: {
            input: "src",
            output: "out",
            includes: ".includes",
        },
    };
};
