---
inject: true
to: src/Router.tsx
after: "//Routes Import"
skip_if: import <%= name.charAt(0).toUpperCase() + name.slice(1) %>Screen from './screens/<%= name.charAt(0).toUpperCase() + name.slice(1) %>/<%= name.charAt(0).toUpperCase() + name.slice(1) %>.screen';
---
import <%= name.charAt(0).toUpperCase() + name.slice(1) %>Screen from './screens/<%= name.charAt(0).toUpperCase() + name.slice(1) %>/<%= name.charAt(0).toUpperCase() + name.slice(1) %>.screen';