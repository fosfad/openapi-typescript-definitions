import { MediaType } from './mediaType';

export interface RequestBody {
  content: { [mediaType: string]: MediaType },
  description?: string,
  required?: boolean
}
