import { Example } from './example';
import { MediaType } from './mediaType';
import { Reference } from './reference';
import { OasSchema } from './schema';

interface CommonParameter {
  content?: { [mediaType: string]: MediaType };
  deprecated?: boolean;
  description?: string;
  example?: any;
  examples?: { [key: string]: Example | Reference };
  explode?: boolean;
  name: string;
  required?: boolean;
  schema?: OasSchema;
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
