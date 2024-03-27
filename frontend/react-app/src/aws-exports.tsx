// copied from serviceWorker.js to know if it is localhost or not
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

console.log("isLocalhost: ", isLocalhost);

const awsExports = {
  aws_project_region: import.meta.env.VITE_STACKREGION || "",
  aws_cognito_region: import.meta.env.VITE_STACKREGION || "",
  aws_user_pools_id: import.meta.env.VITE_USERPOOLID || "",
  aws_user_pools_web_client_id: import.meta.env.VITE_USERPOOLCLIENTID || "",
  oauth: {
    domain: import.meta.env.VITE_USERPOOLDOMAIN || "",
    scope: [ "aws.cognito.signin.user.admin","email", "openid", "profile"],
    redirectSignIn: isLocalhost ? import.meta.env.VITE_USERPOOLCLIENTCALLBACKURLLOCAL : import.meta.env.VITE_USERPOOLCLIENTCALLBACKURLREMOTE || "",
    redirectSignOut: isLocalhost ? import.meta.env.VITE_USERPOOLCLIENTLOGOUTURLLOCAL : import.meta.env.USERPOOLCLIENTLOGOUTURLREMOTE || "",
    responseType: "code",
  },
  
  federationTarget: "COGNITO_USER_POOLS", // This remains the same; it indicates that Cognito is the federation target
  aws_cognito_username_attributes: ["EMAIL"], // Username attributes
  aws_cognito_social_providers: ["GOOGLE"],
  aws_cognito_signup_attributes: ["EMAIL"], // Signup attributes
  aws_cognito_mfa_configuration: "OFF", // MFA configuration
  aws_cognito_mfa_types: [], // MFA types
  aws_cognito_password_protection_settings: {
    passwordPolicyMinLength: 8,
    passwordPolicyCharacters: [
      "REQUIRES_LOWERCASE",
      "REQUIRES_UPPERCASE",
      "REQUIRES_NUMBERS",
      "REQUIRES_SYMBOLS",
    ],
  },
  aws_cognito_verification_mechanisms: ["EMAIL"],
};

export default awsExports;


/*
  "federationTarget": "COGNITO_USER_POOLS",
  "aws_cognito_username_attributes": [
    "EMAIL"
  ],
  "aws_cognito_social_providers": [
    "GOOGLE",
    "AMAZON"
  ],
  "aws_cognito_signup_attributes": [
    "EMAIL"
  ],
  "aws_cognito_mfa_configuration": "OFF",
  "aws_cognito_mfa_types": [],
  "aws_cognito_password_protection_settings": {
    "passwordPolicyMinLength": 8,
    "passwordPolicyCharacters": [
      "REQUIRES_LOWERCASE",
      "REQUIRES_UPPERCASE",
      "REQUIRES_NUMBERS",
      "REQUIRES_SYMBOLS"
    ]
  },
  "aws_cognito_verification_mechanisms": [
    "EMAIL"
  ]
  */
