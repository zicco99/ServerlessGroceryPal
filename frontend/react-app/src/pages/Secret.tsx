import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect } from "react";
import axios from "axios";
const Secret: React.FC = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  useEffect(() => {
    if (authStatus === "unauthenticated") {
      axios.get(process.env.VITE_NESTJSBASEURL+'/recipes').then((response) => {
        console.log(response.data);
      })
    }
    
  },[])
  console.log(authStatus);
  return (
    <>
      {authStatus === "authenticated" ? "You are logged in!" : "Please Login!"}
      {authStatus === "authenticated" ? <>Contenuto segreto</> : <></>}
    </>
  );
};

export default Secret;
