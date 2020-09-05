---
inject: true
append: true
to: src/containers/index.js
---
export * from './<%= h.changeCase.pascal(name) %>';
