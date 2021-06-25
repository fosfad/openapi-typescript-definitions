import {ExternalDocumentation} from "./externalDocumentation";

export interface Tag {
  name: string,
  description?: string,
  externalDocs?: ExternalDocumentation
}
