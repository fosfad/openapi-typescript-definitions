import { Contact } from './contact';
import { License } from './license';

export interface Info {
  contact?: Contact,
  description?: string,
  license?: License,
  summary?: string,
  termsOfService?: string,
  title: string,
  version: string,
}
