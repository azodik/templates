# @azodik/templates

A comprehensive collection of React Email templates for the Azodik platform, featuring internationalization support and modern design patterns.

## Features

- 🎨 **Modern Email Templates** - Beautiful, responsive email templates built with React Email
- 🌍 **Internationalization** - Support for multiple languages (English, Hindi)
- 🔧 **TypeScript Support** - Fully typed with Zod schemas for validation
- 📱 **Responsive Design** - Mobile-first approach for all email clients
- 🎯 **Template Variety** - Covers common use cases like welcome, password reset, verification, etc.
- 🚀 **Easy Integration** - Simple API for rendering templates with variables

## Installation

```bash
npm install @azodik/templates
# or
yarn add @azodik/templates
# or
pnpm add @azodik/templates
```

## Quick Start

```typescript
import { getTemplate, getSubject } from '@azodik/templates';

// Render a welcome email
const html = await getTemplate({
  template: 'welcome',
  variables: {
    name: 'John Doe',
    url: 'https://example.com',
    plan: 'Pro',
    region: 'US',
    nextBillingDate: '2024-01-15'
  },
  lang: 'en',
  appInfo: {
    name: 'MyApp',
    address: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001',
    country: 'USA'
  }
});

// Get the email subject
const subject = getSubject('welcome', 'en');
```

## Available Templates

| Template | Description | Variables |
|----------|-------------|-----------|
| `welcome` | Welcome email for new users | `name`, `url`, `plan`, `region`, `nextBillingDate` |
| `verify-email` | Email verification | `name`, `url` |
| `reset-password` | Password reset request | `name`, `url` |
| `password-changed` | Password change confirmation | `name`, `url`, `updateTime`, `ipAddress`, `userAgent` |
| `profile-updated` | Profile update notification | `name`, `url`, `updateTime`, `ipAddress`, `userAgent` |
| `login-alert` | New login notification | `name`, `url`, `loginTime`, `ipAddress`, `userAgent` |
| `email-changed` | Email change notification | `name`, `oldEmail`, `newEmail`, `changeTime`, `ipAddress`, `location`, `accountSettingsUrl` |
| `phone-changed` | Phone number change notification | `name`, `oldPhone`, `newPhone`, `changeTime`, `ipAddress`, `location`, `accountSettingsUrl` |

## API Reference

### `getTemplate(opts: GetTemplate)`

Renders an email template with the provided options.

**Parameters:**
- `template`: The template type to render
- `variables`: Template-specific variables
- `lang`: Language code ('en' or 'hi')
- `appInfo`: Application information object

**Returns:** Promise<string> - HTML string of the rendered email

### `getSubject(template: EmailTemplate, lang: TemplateLanguage)`

Gets the localized subject line for a template.

**Parameters:**
- `template`: The template type
- `lang`: Language code

**Returns:** string - Localized subject line

## AppInfo Schema

```typescript
interface AppInfo {
  name: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}
```

## Supported Languages

- **English (en)** - Default language
- **Hindi (hi)** - Hindi language support

## Development

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Setup

```bash
# Install dependencies
pnpm install

# Build the package
pnpm run build

# Start development server
pnpm run dev

# Export templates
pnpm run export
```

### Scripts

- `build` - Build TypeScript to dist/
- `dev` - Start React Email development server
- `export` - Export templates to HTML files
- `clean` - Clean build artifacts

## Building for Production

```bash
# Build the package
pnpm run build

# The dist/ directory will contain the compiled JavaScript and TypeScript declarations
```

## Publishing

This package uses Changesets for version management:

```bash
# Create a new changeset
pnpm run changeset

# Version packages
pnpm run version

# Publish to npm
pnpm run publish:changeset
```

## License

MIT © [Azodik](https://github.com/azodik)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For support and questions, please open an issue on GitHub or contact the Azodik team.