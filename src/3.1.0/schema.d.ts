import { Discriminator } from './discriminator';
import { ExternalDocumentation } from './externalDocumentation';
import {JsonSchema} from '@fosfad/json-schema-typescript-definitions/2020-12';
import { XML } from './xml';

export type OasSchema = JsonSchema & {
  $defs?: { [key: string]: OasSchema };
  additionalProperties?: OasSchema;
  allOf?: Array<OasSchema>;
  anyOf?: Array<OasSchema>;
  contains?: OasSchema;
  dependentSchemas?: { [key: string]: OasSchema };
  discriminator?: Discriminator;
  else?: OasSchema;
  externalDocs?: ExternalDocumentation;
  if?: OasSchema;
  items?: OasSchema;
  not?: OasSchema;
  oneOf?: Array<OasSchema>;
  patternProperties?: { [propertyNameRegex: string]: OasSchema };
  prefixItems?: Array<OasSchema>;
  properties?: { [propertyName: string]: OasSchema };
  propertyNames?: OasSchema;
  then?: OasSchema;
  unevaluatedItems?: OasSchema;
  unevaluatedProperties?: OasSchema;
  xml?: XML;
};
