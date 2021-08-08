import {
  AnyJsonSchema,
  ArrayJsonSchema,
  BooleanJsonSchema, IntegerJsonSchema, JsonSchema,
  NullJsonSchema,
  NumberJsonSchema, ObjectJsonSchema,
  StringJsonSchema,
} from '@fosfad/json-schema-typescript-definitions';
import { Discriminator } from './discriminator';
import { ExternalDocumentation } from './externalDocumentation';
import { Reference } from './reference';
import { XML } from './xml';

export interface OasSchema extends JsonSchema {
  externalDocs?: ExternalDocumentation,
  xml?: XML;
}

export interface NullOasSchema extends NullJsonSchema, OasSchema {
  allOf?: Array<NullOasSchema | Reference>;
  anyOf?: Array<NullOasSchema | Reference>;
  not?: NullOasSchema | Reference;
  oneOf?: Array<NullOasSchema | Reference>;
}

export interface BooleanOasSchema extends BooleanJsonSchema, OasSchema {
  allOf?: Array<BooleanOasSchema | Reference>;
  anyOf?: Array<BooleanOasSchema | Reference>;
  not?: BooleanOasSchema | Reference;
  oneOf?: Array<BooleanOasSchema | Reference>;
}

export interface StringOasSchema extends StringJsonSchema, OasSchema {
  allOf?: Array<StringOasSchema | Reference>;
  anyOf?: Array<StringOasSchema | Reference>;
  not?: StringOasSchema | Reference;
  oneOf?: Array<StringOasSchema | Reference>;
}

export interface NumberOasSchema extends NumberJsonSchema, OasSchema {
  allOf?: Array<NumberOasSchema | Reference>;
  anyOf?: Array<NumberOasSchema | Reference>;
  not?: NumberOasSchema | Reference;
  oneOf?: Array<NumberOasSchema | Reference>;
}

export interface IntegerOasSchema extends IntegerJsonSchema, OasSchema {
  allOf?: Array<IntegerOasSchema | Reference>;
  anyOf?: Array<IntegerOasSchema | Reference>;
  not?: IntegerOasSchema | Reference;
  oneOf?: Array<IntegerOasSchema | Reference>;
}

export interface ArrayOasSchema extends ArrayJsonSchema, OasSchema {
  allOf?: Array<ArrayOasSchema | Reference>;
  anyOf?: Array<ArrayOasSchema | Reference>;
  contains?: OasSchema | Reference;
  items?: OasSchema | Reference;
  not?: ArrayOasSchema | Reference;
  oneOf?: Array<ArrayOasSchema | Reference>;
  prefixItems?: Array<OasSchema | Reference>;
}

export interface ObjectOasSchema extends ObjectJsonSchema, OasSchema {
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

export interface AnyOasSchema extends AnyJsonSchema, OasSchema {
  allOf?: Array<OasSchema | Reference>;
  anyOf?: Array<OasSchema | Reference>;
  not?: OasSchema | Reference;
  oneOf?: Array<OasSchema | Reference>;
}
