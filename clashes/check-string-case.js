m=readline(),m.includes("_")?t="snake_case":m.charAt(0)==m.charAt(0).toUpperCase()?t="PascalCase":t="camelCase";print(t)