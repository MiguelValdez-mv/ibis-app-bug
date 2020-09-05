---
inject: true
append: true
to: src/hooks/index.js
---
export * from './<%= h.changeCase.camel(name) %>';
