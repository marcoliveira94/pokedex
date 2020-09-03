---
inject: true
to: src/models/routes.enum.ts
before: "}"
skip_if: <%= name.toUpperCase()%> = '<%= name.charAt(0).toUpperCase() + name.slice(1) %>'
---
  <%= name.toUpperCase()%> = '<%= name.charAt(0).toUpperCase() + name.slice(1) %>',