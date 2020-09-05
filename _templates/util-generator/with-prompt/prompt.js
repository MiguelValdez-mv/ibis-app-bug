// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "name",
    message: "Utility function name?"
  },
  // {
  //   type: "select",
  //   name: "platform",
  //   message: "Choose how many different platform files you want",
  //   choices: [
  //     "Universal (index.js)",
  //     "Web & Mobile (index.js & index.web.js)",
  //     "Web, Android & iOS (index.web.js, index.andoid.js, index.ios.js)"
  //   ]
  // }
];
