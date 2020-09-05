---
inject: true
append: true
to: src/screens/index.js
---
export * from './<%= h.changeCase.pascal(name) %>';