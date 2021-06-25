interface CommonOAuthFlow {
  refreshUrl?: string;
  scopes: { [scopeName: string]: string };
}

export interface AuthorizationCodeOAuthFlow extends CommonOAuthFlow {
  authorizationUrl: string;
  tokenUrl: string;
}

export interface ClientCredentialsOAuthFlow extends CommonOAuthFlow {
  tokenUrl: string;
}

export interface ImplicitOAuthFlow extends CommonOAuthFlow {
  authorizationUrl: string;
}

export interface ResourceOwnerPasswordOAuthFlow extends CommonOAuthFlow {
  tokenUrl: string;
}

export interface OAuthFlows {
  authorizationCode?: AuthorizationCodeOAuthFlow;
  clientCredentials?: ClientCredentialsOAuthFlow;
  implicit?: ImplicitOAuthFlow;
  password?: ResourceOwnerPasswordOAuthFlow;
}
