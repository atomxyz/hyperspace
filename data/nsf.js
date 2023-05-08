const url = "https://beta.nsf.gov/rss/rss_www_funding.xml";

let Parser = require("rss-parser");
let parser = new Parser();

(async () => {
  let feed = await parser.parseURL(url);

  console.log(feed.items.length);

  feed.items.forEach((item, i) => {
    console.log(item);
  });
})();
