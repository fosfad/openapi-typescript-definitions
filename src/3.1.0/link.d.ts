import { Server } from './server';

interface CommonLink {
  description?: string;
  parameters?: { [name: string]: string | any };
  requestBody?: string | any;
  server?: Server;
}

export interface LinkByOperationRef extends CommonLink {
  operationRef: string;
}

export interface LinkByOperationId extends CommonLink {
  operationId: string;
}

export type Link = LinkByOperationRef | LinkByOperationId;
