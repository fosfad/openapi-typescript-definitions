import { JsonSchema } from '@fosfad/json-schema-typescript-definitions';
import { Discriminator } from './discriminator';
import { ExternalDocumentation } from './externalDocumentation';
import { XML } from './xml';

export type Schema = JsonSchema & {
  discriminator?: Discriminator;
  externalDocs?: ExternalDocumentation,
  xml?: XML
};
