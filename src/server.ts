export interface ServerVariable {
  enum?: string[],
  default: string,
  description?: string,
}

export interface Server {
  url: string,
  description?: string,
  variables: {[variableName: string]: ServerVariable}
}
