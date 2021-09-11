import { PathItem } from './pathItem';
import { Reference } from './reference';

export interface Callback {
  [expression: string]: PathItem | Reference;
}
