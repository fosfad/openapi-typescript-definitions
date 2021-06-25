import {Server} from "./server";

interface CommonLink {
  parameters?: { [name: string]: string | any; };
  requestBody?: string | any,
  description?: string,
  server?: Server
}

export interface LinkByOperationRef extends CommonLink {
  operationRef: string,
}

export interface LinkByOperationId extends CommonLink {
  operationId: string,
}

export type Link = LinkByOperationRef | LinkByOperationId;
