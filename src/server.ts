import { ServerVariable } from './serverVariable';

export interface Server {
  description?: string,
  url: string,
  variables: { [variableName: string]: ServerVariable }
}
