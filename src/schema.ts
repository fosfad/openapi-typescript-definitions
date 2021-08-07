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
import { Reference } from './reference';
import { XML } from './xml';

export interface NullOasSchema extends NullJsonSchema {
  allOf?: Array<NullOasSchema | Reference>;
  anyOf?: Array<NullOasSchema | Reference>;
  externalDocs?: ExternalDocumentation,
  not?: NullOasSchema | Reference;
  oneOf?: Array<NullOasSchema | Reference>;
  xml?: XML;
}

export interface BooleanOasSchema extends BooleanJsonSchema {
  allOf?: Array<BooleanOasSchema | Reference>;
  anyOf?: Array<BooleanOasSchema | Reference>;
  externalDocs?: ExternalDocumentation,
  not?: BooleanOasSchema | Reference;
  oneOf?: Array<BooleanOasSchema | Reference>;
  xml?: XML;
}

export interface StringOasSchema extends StringJsonSchema {
  allOf?: Array<StringOasSchema | Reference>;
  anyOf?: Array<StringOasSchema | Reference>;
  externalDocs?: ExternalDocumentation,
  not?: StringOasSchema | Reference;
  oneOf?: Array<StringOasSchema | Reference>;
  xml?: XML;
}

export interface NumberOasSchema extends NumberJsonSchema {
  allOf?: Array<NumberOasSchema | Reference>;
  anyOf?: Array<NumberOasSchema | Reference>;
  externalDocs?: ExternalDocumentation,
  not?: NumberOasSchema | Reference;
  oneOf?: Array<NumberOasSchema | Reference>;
  xml?: XML;
}

export interface IntegerOasSchema extends IntegerJsonSchema {
  allOf?: Array<IntegerOasSchema | Reference>;
  anyOf?: Array<IntegerOasSchema | Reference>;
  externalDocs?: ExternalDocumentation,
  not?: IntegerOasSchema | Reference;
  oneOf?: Array<IntegerOasSchema | Reference>;
  xml?: XML;
}

export interface ArrayOasSchema extends ArrayJsonSchema {
  allOf?: Array<ArrayOasSchema | Reference>;
  anyOf?: Array<ArrayOasSchema | Reference>;
  contains?: OasSchema | Reference;
  externalDocs?: ExternalDocumentation,
  items?: OasSchema | Reference;
  not?: ArrayOasSchema | Reference;
  oneOf?: Array<ArrayOasSchema | Reference>;
  prefixItems?: Array<OasSchema | Reference>;
  xml?: XML;
}

export interface ObjectOasSchema extends ObjectJsonSchema {
  allOf?: Array<ObjectOasSchema | Reference>;
  anyOf?: Array<ObjectOasSchema | Reference>;
  discriminator?: Discriminator;
  externalDocs?: ExternalDocumentation,
  not?: ObjectOasSchema | Reference;
  oneOf?: Array<ObjectOasSchema | Reference>;
  patternProperties?: {
    [propertyNameRegex: string]: OasSchema | Reference;
  };
  properties?: {
    [propertyName: string]: OasSchema | Reference;
  };
  propertyNames?: OasSchema | Reference;
  xml?: XML;
}

export interface AnyOasSchema extends AnyJsonSchema {
  allOf?: Array<OasSchema | Reference>;
  anyOf?: Array<OasSchema | Reference>;
  externalDocs?: ExternalDocumentation,
  not?: OasSchema | Reference;
  oneOf?: Array<OasSchema | Reference>;
  xml?: XML;
}

export type OasSchema = NullOasSchema | BooleanOasSchema | StringOasSchema | NumberOasSchema | IntegerOasSchema | ArrayOasSchema | ObjectOasSchema | AnyOasSchema;
