import {
  AnyJsonSchema,
  ArrayJsonSchema,
  BooleanJsonSchema,
  IntegerJsonSchema, isArrayJsonSchema,
  isBooleanJsonSchema, isIntegerJsonSchema,
  isNullJsonSchema,
  isNumberJsonSchema, isObjectJsonSchema,
  isStringJsonSchema,
  JsonSchema,
  NullJsonSchema,
  NumberJsonSchema,
  ObjectJsonSchema,
  StringJsonSchema,
} from '@fosfad/json-schema-typescript-definitions';
import { Discriminator } from './discriminator';
import { ExternalDocumentation } from './externalDocumentation';
import { Reference } from './reference';
import { XML } from './xml';

export interface OasSchema<T = any> extends JsonSchema<T> {
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export interface NullOasSchema extends NullJsonSchema, OasSchema {
  allOf?: Array<NullOasSchema | Reference>;
  anyOf?: Array<NullOasSchema | Reference>;
  not?: NullOasSchema | Reference;
  oneOf?: Array<NullOasSchema | Reference>;
}

export function isNullOasSchema(schema: any): schema is NullOasSchema {
  return isNullJsonSchema(schema);
}

export interface BooleanOasSchema extends BooleanJsonSchema, OasSchema<boolean> {
  allOf?: Array<BooleanOasSchema | Reference>;
  anyOf?: Array<BooleanOasSchema | Reference>;
  not?: BooleanOasSchema | Reference;
  oneOf?: Array<BooleanOasSchema | Reference>;
}

export function isBooleanOasSchema(schema: any): schema is BooleanOasSchema {
  return isBooleanJsonSchema(schema);
}

export interface StringOasSchema extends StringJsonSchema, OasSchema<string> {
  allOf?: Array<StringOasSchema | Reference>;
  anyOf?: Array<StringOasSchema | Reference>;
  not?: StringOasSchema | Reference;
  oneOf?: Array<StringOasSchema | Reference>;
}

export function isStringOasSchema(schema: any): schema is StringOasSchema {
  return isStringJsonSchema(schema);
}

export interface NumberOasSchema extends NumberJsonSchema, OasSchema<number> {
  allOf?: Array<NumberOasSchema | Reference>;
  anyOf?: Array<NumberOasSchema | Reference>;
  not?: NumberOasSchema | Reference;
  oneOf?: Array<NumberOasSchema | Reference>;
}

export function isNumberOasSchema(schema: any): schema is NumberOasSchema {
  return isNumberJsonSchema(schema);
}

export interface IntegerOasSchema extends IntegerJsonSchema, OasSchema<number> {
  allOf?: Array<IntegerOasSchema | Reference>;
  anyOf?: Array<IntegerOasSchema | Reference>;
  not?: IntegerOasSchema | Reference;
  oneOf?: Array<IntegerOasSchema | Reference>;
}

export function isIntegerOasSchema(schema: any): schema is IntegerOasSchema {
  return isIntegerJsonSchema(schema);
}

export interface ArrayOasSchema extends ArrayJsonSchema, OasSchema<Array<any>> {
  allOf?: Array<ArrayOasSchema | Reference>;
  anyOf?: Array<ArrayOasSchema | Reference>;
  contains?: OasSchema | Reference;
  items?: OasSchema | Reference;
  not?: ArrayOasSchema | Reference;
  oneOf?: Array<ArrayOasSchema | Reference>;
  prefixItems?: Array<OasSchema | Reference>;
}

export function isArrayOasSchema(schema: any): schema is ArrayOasSchema {
  return isArrayJsonSchema(schema);
}

export interface ObjectOasSchema extends ObjectJsonSchema, OasSchema<Record<string, any>> {
  additionalProperties?: OasSchema;
  allOf?: Array<ObjectOasSchema | Reference>;
  anyOf?: Array<ObjectOasSchema | Reference>;
  discriminator?: Discriminator;
  not?: ObjectOasSchema | Reference;
  oneOf?: Array<ObjectOasSchema | Reference>;
  patternProperties?: {
    [propertyNameRegex: string]: OasSchema | Reference;
  };
  properties?: {
    [propertyName: string]: OasSchema | Reference;
  };
  propertyNames?: OasSchema | Reference;
}

export function isObjectOasSchema(schema: any): schema is ObjectOasSchema {
  return isObjectJsonSchema(schema);
}

export interface AnyOasSchema extends AnyJsonSchema, OasSchema {
  allOf?: Array<OasSchema | Reference>;
  anyOf?: Array<OasSchema | Reference>;
  not?: OasSchema | Reference;
  oneOf?: Array<OasSchema | Reference>;
}
