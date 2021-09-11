import { Callback } from './callback';
import { Example } from './example';
import { Header } from './header';
import { Link } from './link';
import { Parameter } from './parameter';
import { PathItem } from './pathItem';
import { Reference } from './reference';
import { RequestBody } from './requestBody';
import { Response } from './response';
import { OasSchema } from './schema';
import { SecurityScheme } from './securityScheme';

export interface Components {
  callbacks?: { [key: string]: Callback | Reference };
  examples?: { [key: string]: Example | Reference };
  headers?: { [key: string]: Header | Reference };
  links?: { [key: string]: Link | Reference };
  parameters?: { [key: string]: Parameter | Reference };
  pathItems?: { [key: string]: PathItem | Reference };
  requestBodies?: { [key: string]: RequestBody | Reference };
  responses?: { [key: string]: Response | Reference };
  schemas?: { [key: string]: OasSchema };
  securitySchemes?: { [key: string]: SecurityScheme | Reference };
}
