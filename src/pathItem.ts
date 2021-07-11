import { Operation } from './operation';
import { Parameter } from './parameter';
import { Reference } from './reference';
import { Server } from './server';

export interface PathItem {
  $ref?: string,
  delete?: Operation,
  description?: string,
  get?: Operation,
  head?: Operation,
  options?: Operation,
  parameters?: Array<Parameter | Reference>,
  patch?: Operation,
  post?: Operation,
  put?: Operation,
  servers?: Server[],
  summary?: string,
  trace?: Operation
}
