# Claude Code GitHub Actions Test Project

## Development Guidelines

### Code Style

- **JavaScript**: Use ES6+ syntax
- **Variable Declaration**: Prefer `const`, use `let` when necessary, avoid `var`
- **Semicolons**: Required
- **Indentation**: 2 spaces
- **Strings**: Prefer template literals (``)

### File Structure

```
├── index.js        # Main server file
├── package.json    # Project configuration
└── CLAUDE.md      # Development guide
```

### API Rules

- **Routes**: Use `/api/` prefix
- **Response**: JSON format
- **Error Handling**: Appropriate HTTP status codes and error messages

### Execution Commands

- **Development Server**: `npm run dev`
- **Production**: `npm start`
