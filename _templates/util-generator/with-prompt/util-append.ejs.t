---
inject: true
append: true
to: src/utils/index.js
---
export * from './<%= h.changeCase.param(name) %>';
