import { ExternalDocumentation } from './externalDocumentation';

export interface Tag {
  description?: string;
  externalDocs?: ExternalDocumentation;
  name: string;
}
