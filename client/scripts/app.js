const githubID = 'jiye-7';

const app = {
  server: `http://3.36.72.17:3000/${githubID}/messages`,
  init: () => {
  },
  fetch: () => {
  }
};

app.init();

if (window.isNodeENV) {
  module.exports = app;
}