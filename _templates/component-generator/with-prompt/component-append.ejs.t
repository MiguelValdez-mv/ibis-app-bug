---
inject: true
append: true
to: src/components/<%= category %>/index.js
---
export * from './<%= h.changeCase.pascal(name) %>';