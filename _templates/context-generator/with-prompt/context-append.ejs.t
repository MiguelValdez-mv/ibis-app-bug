---
inject: true
append: true
to: src/contexts/index.js
---
export * from './<%= h.changeCase.pascal(name) %>';