const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  window.location.hostname === '[::1]' ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

const aws_project_region = import.meta.env.VITE_STACKREGION || '';
const aws_user_pools_id = import.meta.env.VITE_USERPOOLID || '';
const aws_user_pools_web_client_id = import.meta.env.VITE_USERPOOLCLIENTID || '';

const awsExports = {
  aws_project_region,
  aws_cognito_region: aws_project_region,
  aws_user_pools_id,
  aws_user_pools_web_client_id,
  oauth: {
    domain: import.meta.env.VITE_USERPOOLDOMAIN || '',
    scope: ["aws.cognito.signin.user.admin", "email", "openid", "profile"],
    redirectSignIn: isLocalhost ? import.meta.env.VITE_USERPOOLCLIENTCALLBACKURLLOCAL || '' : import.meta.env.VITE_USERPOOLCLIENTCALLBACKURLREMOTE || '',
    redirectSignOut: isLocalhost ? import.meta.env.VITE_USERPOOLCLIENTLOGOUTURLLOCAL || '' : import.meta.env.VITE_USERPOOLCLIENTLOGOUTURLREMOTE || '',
    responseType: 'code',
  },
  federationTarget: 'COGNITO_USER_POOLS',
  aws_cognito_username_attributes: ['EMAIL'],
  aws_cognito_social_providers: ['GOOGLE'],
  aws_cognito_signup_attributes: ['EMAIL'],
  aws_cognito_mfa_configuration: 'OFF',
  aws_cognito_mfa_types: [],
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [
      'REQUIRES_LOWERCASE',
      'REQUIRES_UPPERCASE',
      'REQUIRES_NUMBERS',
      'REQUIRES_SYMBOLS',
    ],
  },
  aws_cognito_verification_mechanisms: ['EMAIL'],
};

console.log('Settati i valori');
console.log('awsExports', awsExports);

export default awsExports;
