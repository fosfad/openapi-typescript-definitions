import { Reference as JsonSchemaReference } from '@fosfad/json-schema-typescript-definitions';

export interface Reference extends JsonSchemaReference {
  description?: string,
  summary?: string
}
