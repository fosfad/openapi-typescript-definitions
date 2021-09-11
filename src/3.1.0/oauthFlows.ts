import {
  AuthorizationCodeOAuthFlow,
  ClientCredentialsOAuthFlow,
  ImplicitOAuthFlow,
  ResourceOwnerPasswordOAuthFlow,
} from './oauthFlow';

export interface OAuthFlows {
  authorizationCode?: AuthorizationCodeOAuthFlow;
  clientCredentials?: ClientCredentialsOAuthFlow;
  implicit?: ImplicitOAuthFlow;
  password?: ResourceOwnerPasswordOAuthFlow;
}
