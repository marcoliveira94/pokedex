---
inject: true
to: src/Router.tsx
after:  "RootStackParamList = {"
skip_if: "<%= name.charAt(0).toUpperCase() + name.slice(1) %>: undefined;"
---
  <%= name.charAt(0).toUpperCase() + name.slice(1) %>: undefined;