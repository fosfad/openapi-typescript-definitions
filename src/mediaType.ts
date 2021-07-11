import { Encoding } from './encoding';
import { Example } from './example';
import { Reference } from './reference';
import { Schema } from './schema';

export interface MediaType {
  encoding?: { [propertyName: string]: Encoding },
  example?: any;
  examples?: { [key: string]: Example | Reference },
  schema?: Schema;
}
