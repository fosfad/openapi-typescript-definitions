import { Header } from './header';
import { Link } from './link';
import { MediaType } from './mediaType';
import { Reference } from './reference';

export interface Response {
  content?: { [mediaType: string]: MediaType };
  description: string;
  headers?: {
    [headerName: string]: Header | Reference;
  };
  links?: { [linkName: string]: Link | Reference };
}
