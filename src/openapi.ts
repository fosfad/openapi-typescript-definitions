import { Components } from './components';
import { ExternalDocumentation } from './externalDocumentation';
import { Info } from './info';
import { PathItem } from './pathItem';
import { Paths } from './paths';
import { Reference } from './reference';
import { SecurityRequirement } from './securityRequirement';
import { Server } from './server';
import { Tag } from './tag';

export const openapiVersion = '3.1.0';

export interface OpenAPI {
  components?: Components,
  externalDocs?: ExternalDocumentation,
  info: Info,
  jsonSchemaDialect?: string,
  openapi: typeof openapiVersion,
  paths: Paths,
  security?: SecurityRequirement[],
  servers?: Server[],
  tags?: Tag[]
  webhooks?: { [webhookName: string]: PathItem | Reference }
}
