// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "select",
    name: "category",
    choices: ["app", "atoms", "molecules", "organisms", "layout"],
    message: "Where should this component go?",
  },
  {
    type: "input",
    name: "name",
    message: "How you wanna name this new component?",
  },
];
