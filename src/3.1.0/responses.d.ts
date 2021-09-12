import { Reference } from './reference';
import { Response } from './response';

export interface Responses {
  [httpStatusCode: string]: Response | Reference;
}
