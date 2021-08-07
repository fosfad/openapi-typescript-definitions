import { Encoding } from './encoding';
import { Example } from './example';
import { Reference } from './reference';
import { OasSchema } from './schema';

export interface MediaType {
  encoding?: { [propertyName: string]: Encoding },
  example?: any;
  examples?: { [key: string]: Example | Reference },
  schema?: OasSchema;
}
