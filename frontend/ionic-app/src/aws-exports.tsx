// src/aws-exports.ts
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );
  
  const awsExports = {
    aws_project_region: process.env.REACT_APP_STACKREGION || "",
    aws_cognito_region: process.env.REACT_APP_STACKREGION || "",
    aws_user_pools_id: process.env.REACT_APP_USERPOOLID || "",
    aws_user_pools_web_client_id: process.env.REACT_APP_USERPOOLCLIENTID || "",
    oauth: {
      domain: process.env.REACT_APP_USERPOOLDOMAIN || "",
      scope: ["aws.cognito.signin.user.admin", "email", "openid", "profile"],
      redirectSignIn: isLocalhost ? process.env.REACT_APP_USERPOOLCLIENTCALLBACKURLLOCAL : process.env.REACT_APP_USERPOOLCLIENTCALLBACKURLREMOTE || "",
      redirectSignOut: isLocalhost ? process.env.REACT_APP_USERPOOLCLIENTLOGOUTURLLOCAL : process.env.REACT_APP_USERPOOLCLIENTLOGOUTURLREMOTE || "",
      responseType: "code",
    },
    federationTarget: "COGNITO_USER_POOLS",
    aws_cognito_username_attributes: ["EMAIL"],
    aws_cognito_social_providers: ["GOOGLE"],
    aws_cognito_signup_attributes: ["EMAIL"],
    aws_cognito_mfa_configuration: "OFF",
    aws_cognito_mfa_types: [],
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

  console.log("Settati i valori")
  console.log("awsExports", awsExports)
  
  export default awsExports;
  