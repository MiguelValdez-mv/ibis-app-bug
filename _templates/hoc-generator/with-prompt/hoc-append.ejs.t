---
inject: true
append: true
to: src/hocs/index.js
---
export * from './<%= h.changeCase.camel(name) %>';
