---
inject: true
to: src/Router.tsx
before: "</Stack.Navigator>"
skip_if:         <Stack.Screen name={RoutesEnum.<%= name.toUpperCase()%>} component={<%= name.charAt(0).toUpperCase() + name.slice(1) %>Screen} />
---
        <Stack.Screen name={RoutesEnum.<%= name.toUpperCase()%>} component={<%= name.charAt(0).toUpperCase() + name.slice(1) %>Screen} />