---
inject: true
append: true
to: src/components/index.js
---
export * from './<%= h.changeCase.pascal(name) %>';
