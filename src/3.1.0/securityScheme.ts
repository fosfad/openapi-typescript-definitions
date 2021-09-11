import { OAuthFlows } from './oauthFlows';

interface CommonSecurityScheme {
  description?: string;
}

export interface ApiKeySecurityScheme extends CommonSecurityScheme {
  in: 'query' | 'header' | 'cookie';
  name: string;
  type: 'apiKey';
}

export interface HttpSecurityScheme extends CommonSecurityScheme {
  bearerFormat?: string;
  scheme: string;
  type: 'http';
}

export interface OAuth2SecurityScheme extends CommonSecurityScheme {
  flows: OAuthFlows;
  type: 'oauth2';
}

export interface OpenIdConnectSecurityScheme extends CommonSecurityScheme {
  openIdConnectUrl: string;
  type: 'openIdConnect';
}

export type SecurityScheme =
  | ApiKeySecurityScheme
  | HttpSecurityScheme
  | OAuth2SecurityScheme
  | OpenIdConnectSecurityScheme;
