import { useAuthenticator } from "@aws-amplify/ui-react";
const Secret: React.FC = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  console.log(authStatus);
  return (
    <>
      {authStatus === "authenticated" ? "You are logged in!" : "Please Login!"}
      {authStatus === "authenticated" ? <>Contenuto segreto</> : <></>}
    </>
  );
};

export default Secret;
