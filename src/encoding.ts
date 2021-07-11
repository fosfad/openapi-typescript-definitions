import { Header } from './header';
import { Reference } from './reference';

export interface Encoding {
  allowReserved?: boolean,
  contentType?: string,
  explode?: boolean,
  headers?: { [headerName: string]: Header | Reference },
  style?: string
}
