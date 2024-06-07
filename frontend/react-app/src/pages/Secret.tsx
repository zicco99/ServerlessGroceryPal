import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { useAxios } from "../providers/axios";
import RecipeSwiper from "../components/RecipeSwiper/RecipeSwiper";

const Secret: React.FC = () => {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [response, setResponse] = useState([]);

  const axios = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      if (authStatus === "authenticated") {
        const response = await axios.get(axios.defaults.baseURL + '/recipes');
        setResponse(response.data);
      }
    }
    fetchData();
  }, [authStatus])

  return (
    <>
      {authStatus === "authenticated" ? "You are logged in!" : "Please Login!"}
      <br></br>
      {authStatus === "authenticated" && response.length > 0 && (
        <RecipeSwiper recipes={response} />
      )}
    </>
  );
};

export default Secret;
