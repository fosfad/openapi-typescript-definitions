import { JsonSchemaBoolean, JsonSchemaObject } from '@fosfad/json-schema-typescript-definitions/2020-12';

export interface Callback {
  [expression: string]: PathItem | Reference;
}

export interface Components {
  callbacks?: { [key: string]: Callback | Reference };
  examples?: { [key: string]: Example | Reference };
  headers?: { [key: string]: Header | Reference };
  links?: { [key: string]: Link | Reference };
  parameters?: { [key: string]: Parameter | Reference };
  pathItems?: { [key: string]: PathItem | Reference };
  requestBodies?: { [key: string]: RequestBody | Reference };
  responses?: { [key: string]: Response | Reference };
  schemas?: { [key: string]: Schema };
  securitySchemes?: { [key: string]: SecurityScheme | Reference };
}

export interface Contact {
  email?: string;
  name?: string;
  url?: string;
}

export interface Discriminator {
  mapping?: { [discriminatorValue: string]: string };
  propertyName: string;
}

export interface Encoding {
  allowReserved?: boolean;
  contentType?: string;
  explode?: boolean;
  headers?: { [headerName: string]: Header | Reference };
  style?: string;
}

export interface Example {
  description?: string;
  externalValue?: string;
  summary?: string;
  value?: any;
}

export interface ExternalDocumentation {
  description?: string;
  url: string;
}

export type Header = Omit<HeaderParameter, 'in' | 'name'>;

export interface Info {
  contact?: Contact;
  description?: string;
  license?: License;
  summary?: string;
  termsOfService?: string;
  title: string;
  version: string;
}

export interface License {
  identifier?: string;
  name: string;
  url?: string;
}

export interface Link {
  description?: string;
  operationId?: string;
  operationRef?: string;
  parameters?: { [name: string]: string | any };
  requestBody?: string | any;
  server?: Server;
}

export interface MediaType {
  encoding?: { [propertyName: string]: Encoding };
  example?: any;
  examples?: { [key: string]: Example | Reference };
  schema?: Schema;
}

interface CommonOAuthFlow {
  refreshUrl?: string;
  scopes: { [scopeName: string]: string };
}

export interface AuthorizationCodeOAuthFlow extends CommonOAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
}

export interface ClientCredentialsOAuthFlow extends CommonOAuthFlow {
  tokenUrl: string;
}

export interface ImplicitOAuthFlow extends CommonOAuthFlow {
  authorizationUrl: string;
}

export interface ResourceOwnerPasswordOAuthFlow extends CommonOAuthFlow {
  tokenUrl: string;
}

export interface OAuthFlows {
  authorizationCode?: AuthorizationCodeOAuthFlow;
  clientCredentials?: ClientCredentialsOAuthFlow;
  implicit?: ImplicitOAuthFlow;
  password?: ResourceOwnerPasswordOAuthFlow;
}

export const openapiVersion = '3.1.0';

export interface OpenAPI {
  components?: Components;
  externalDocs?: ExternalDocumentation;
  info: Info;
  jsonSchemaDialect?: string;
  openapi: typeof openapiVersion;
  paths: Paths;
  security?: SecurityRequirement[];
  servers?: Server[];
  tags?: Tag[];
  webhooks?: { [webhookName: string]: PathItem | Reference };
}

export interface Operation {
  callbacks?: { [callbackIdentifier: string]: Callback | Reference };
  deprecated?: boolean;
  description?: string;
  externalDocs?: ExternalDocumentation;
  operationId?: string;
  parameters?: Array<Parameter | Reference>;
  requestBody?: RequestBody | Reference;
  responses?: Responses;
  security?: Array<SecurityRequirement>;
  servers?: Array<Server>;
  summary?: string;
  tags?: Array<string>;
}

interface CommonParameter {
  content?: { [mediaType: string]: MediaType };
  deprecated?: boolean;
  description?: string;
  example?: any;
  examples?: { [key: string]: Example | Reference };
  explode?: boolean;
  name: string;
  required?: boolean;
  schema?: Schema;
  style?: string;
}

export interface QueryParameter extends CommonParameter {
  allowEmptyValue?: boolean;
  allowReserved?: boolean;
  in: 'query';
}

export interface HeaderParameter extends CommonParameter {
  in: 'header';
}

export interface PathParameter extends CommonParameter {
  in: 'path';
  required: true;
}

export interface CookieParameter extends CommonParameter {
  in: 'cookie';
}

export type Parameter = QueryParameter | HeaderParameter | PathParameter | CookieParameter;

export interface PathItem {
  $ref?: string;
  delete?: Operation;
  description?: string;
  get?: Operation;
  head?: Operation;
  options?: Operation;
  parameters?: Array<Parameter | Reference>;
  patch?: Operation;
  post?: Operation;
  put?: Operation;
  servers?: Server[];
  summary?: string;
  trace?: Operation;
}

export interface Paths {
  [path: string]: PathItem;
}

export interface Reference {
  $ref: string;
  description?: string;
  summary?: string;
}

export interface RequestBody {
  content: { [mediaType: string]: MediaType };
  description?: string;
  required?: boolean;
}

export interface Response {
  content?: { [mediaType: string]: MediaType };
  description: string;
  headers?: {
    [headerName: string]: Header | Reference;
  };
  links?: { [linkName: string]: Link | Reference };
}

export interface Responses {
  [httpStatusCode: string]: Response | Reference;
}

export interface SchemaObject extends JsonSchemaObject {
  $defs?: { [key: string]: Schema };
  additionalProperties?: Schema;
  allOf?: Array<Schema>;
  anyOf?: Array<Schema>;
  contains?: Schema;
  dependentSchemas?: { [key: string]: Schema };
  discriminator?: Discriminator;
  else?: Schema;
  externalDocs?: ExternalDocumentation;
  if?: Schema;
  items?: Schema;
  not?: Schema;
  oneOf?: Array<Schema>;
  patternProperties?: { [propertyNameRegex: string]: Schema };
  prefixItems?: Array<Schema>;
  properties?: { [propertyName: string]: Schema };
  propertyNames?: Schema;
  then?: Schema;
  unevaluatedItems?: Schema;
  unevaluatedProperties?: Schema;
  xml?: XML;
}

export type Schema = JsonSchemaBoolean | SchemaObject;

export interface SecurityRequirement {
  [name: string]: string[];
}

interface CommonSecurityScheme {
  description?: string;
}

export interface ApiKeySecurityScheme extends CommonSecurityScheme {
  in: 'query' | 'header' | 'cookie';
  name: string;
  type: 'apiKey';
}

export interface HttpSecurityScheme extends CommonSecurityScheme {
  bearerFormat?: string;
  scheme: string;
  type: 'http';
}

export interface OAuth2SecurityScheme extends CommonSecurityScheme {
  flows: OAuthFlows;
  type: 'oauth2';
}

export interface OpenIdConnectSecurityScheme extends CommonSecurityScheme {
  openIdConnectUrl: string;
  type: 'openIdConnect';
}

export type SecurityScheme =
  | ApiKeySecurityScheme
  | HttpSecurityScheme
  | OAuth2SecurityScheme
  | OpenIdConnectSecurityScheme;

export interface Server {
  description?: string;
  url: string;
  variables?: { [variableName: string]: ServerVariable };
}

export interface ServerVariable {
  default: string;
  description?: string;
  enum?: string[];
}

export interface Tag {
  description?: string;
  externalDocs?: ExternalDocumentation;
  name: string;
}

export interface XML {
  attribute?: boolean;
  name?: string;
  namespace?: string;
  prefix?: string;
  wrapped?: boolean;
}
