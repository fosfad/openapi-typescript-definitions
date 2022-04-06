# OpenAPI TypeScript definitions

This package contains TypeScript definitions for OpenAPI. It may be useful in all kind of TypeScript projects that work with OpenAPI directly, for example, in code generators, in documentation generators and other kinds of projects.

Supported OpenAPI versions:

- [3.1.0](https://spec.openapis.org/oas/v3.1.0)

Since OpenAPI specification relies on JSON Schema specification, this package also has [@fosfad/json-schema-typescript-definitions](https://github.com/fosfad/json-schema-typescript-definitions) package in its dependencies which provides type definitions for JSON Schema.

## Getting started

Install the definitions:

```bash
npm install @fosfad/openapi-typescript-definitions
```

Import `OpenAPI` (and other needed types):

```typescript
import { OpenAPI } from '@fosfad/openapi-typescript-definitions/3.1.0';
```
