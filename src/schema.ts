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
  allOf?: Array<NullOasSchema>;
  anyOf?: Array<NullOasSchema>;
  externalDocs?: ExternalDocumentation,
  not?: NullOasSchema;
  oneOf?: Array<NullOasSchema>;
  xml?: XML;
}

export interface BooleanOasSchema extends BooleanJsonSchema {
  allOf?: Array<BooleanOasSchema>;
  anyOf?: Array<BooleanOasSchema>;
  externalDocs?: ExternalDocumentation,
  not?: BooleanOasSchema;
  oneOf?: Array<BooleanOasSchema>;
  xml?: XML;
}

export interface StringOasSchema extends StringJsonSchema {
  allOf?: Array<StringOasSchema>;
  anyOf?: Array<StringOasSchema>;
  externalDocs?: ExternalDocumentation,
  not?: StringOasSchema;
  oneOf?: Array<StringOasSchema>;
  xml?: XML;
}

export interface NumberOasSchema extends NumberJsonSchema {
  allOf?: Array<NumberOasSchema>;
  anyOf?: Array<NumberOasSchema>;
  externalDocs?: ExternalDocumentation,
  not?: NumberOasSchema;
  oneOf?: Array<NumberOasSchema>;
  xml?: XML;
}

export interface IntegerOasSchema extends IntegerJsonSchema {
  allOf?: Array<IntegerOasSchema>;
  anyOf?: Array<IntegerOasSchema>;
  externalDocs?: ExternalDocumentation,
  not?: IntegerOasSchema;
  oneOf?: Array<IntegerOasSchema>;
  xml?: XML;
}

export interface ArrayOasSchema extends ArrayJsonSchema {
  allOf?: Array<ArrayOasSchema>;
  anyOf?: Array<ArrayOasSchema>;
  contains?: OasSchema;
  externalDocs?: ExternalDocumentation,
  items?: OasSchema;
  not?: ArrayOasSchema;
  oneOf?: Array<ArrayOasSchema>;
  prefixItems?: Array<OasSchema>;
  xml?: XML;
}

export interface ObjectOasSchema extends ObjectJsonSchema {
  allOf?: Array<ObjectOasSchema>;
  anyOf?: Array<ObjectOasSchema>;
  discriminator?: Discriminator;
  externalDocs?: ExternalDocumentation,
  not?: ObjectOasSchema;
  oneOf?: Array<ObjectOasSchema>;
  patternProperties?: {
    [propertyNameRegex: string]: OasSchema;
  };
  properties?: {
    [propertyName: string]: OasSchema;
  };
  propertyNames?: OasSchema;
  xml?: XML;
}

export interface AnyOasSchema extends AnyJsonSchema {
  allOf?: Array<OasSchema>;
  anyOf?: Array<OasSchema>;
  externalDocs?: ExternalDocumentation,
  not?: OasSchema;
  oneOf?: Array<OasSchema>;
  xml?: XML;
}

export type OasSchema = NullOasSchema | BooleanOasSchema | StringOasSchema | NumberOasSchema | IntegerOasSchema | ArrayOasSchema | ObjectOasSchema | AnyOasSchema;
