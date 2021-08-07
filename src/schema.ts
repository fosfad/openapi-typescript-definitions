import {
  AnyJsonSchema,
  ArrayJsonSchema,
  BooleanJsonSchema, IntegerJsonSchema,
  NullJsonSchema,
  NumberJsonSchema, ObjectJsonSchema,
  StringJsonSchema,
} from '@fosfad/json-schema-typescript-definitions';
import { Discriminator } from './discriminator';
import { ExternalDocumentation } from './externalDocumentation';
import { XML } from './xml';

export interface NullOasSchema extends NullJsonSchema {
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export interface BooleanOasSchema extends BooleanJsonSchema {
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export interface StringOasSchema extends StringJsonSchema {
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export interface NumberOasSchema extends NumberJsonSchema {
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export interface IntegerOasSchema extends IntegerJsonSchema {
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export interface ArrayOasSchema extends ArrayJsonSchema {
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export interface ObjectOasSchema extends ObjectJsonSchema {
  discriminator?: Discriminator;
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export interface AnyOasSchema extends AnyJsonSchema {
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export type OasSchema = NullOasSchema | BooleanOasSchema | StringOasSchema | NumberOasSchema | IntegerOasSchema | ArrayOasSchema | ObjectOasSchema | AnyOasSchema;
