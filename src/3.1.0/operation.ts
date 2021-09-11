import { Callback } from './callback';
import { ExternalDocumentation } from './externalDocumentation';
import { Parameter } from './parameter';
import { Reference } from './reference';
import { RequestBody } from './requestBody';
import { Responses } from './responses';
import { SecurityRequirement } from './securityRequirement';
import { Server } from './server';

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
