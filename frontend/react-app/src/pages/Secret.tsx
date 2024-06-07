import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import axios from "axios";


const Secret: React.FC = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [response, setResponse] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (authStatus === "authenticated") {
        const response = await axios.get(process.env.VITE_NESTJSBASEURL+'/recipes');
        setResponse(response.data);
      }
    }
    fetchData();
  }, [authStatus])

  return (
    <>
      {authStatus === "authenticated" ? "You are logged in!" : "Please Login!"}
      <br></br>
      {authStatus === "authenticated" ? JSON.stringify(response) : <></>}
    </>
  );
};

export default Secret;
