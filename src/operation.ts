import {ExternalDocumentation} from "./externalDocumentation";
import {Reference} from "./reference";
import {SecurityRequirement} from "./securityRequirement";
import {Server} from "./server";

export interface Operation {
  tags?: Array<string>,
  summary?: string,
  description?: string,
  externalDocs?: ExternalDocumentation,
  operationId?: string,
  parameters?: Array<Parameter | Reference>,
  requestBody?: RequestBody | Reference,
  responses?: Responses,
  callbacks?: {[callbackIdentifier: string]: Callback | Reference}
  deprecated?: boolean
  security?: Array<SecurityRequirement>
  servers?: Array<Server>
}
