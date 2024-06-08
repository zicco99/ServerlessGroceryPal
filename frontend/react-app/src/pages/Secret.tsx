import { useAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { useAxios } from "../providers/axios";
import RecipeSwiper from "../components/RecipeSwiper/RecipeSwiper";


const Secret: React.FC = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  const [response, setResponse] = useState<Recipe[]>([]);

  const axios = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(axios.defaults.baseURL + '/recipes');
      const recipes : Recipe[] = JSON.parse(response.data["body"]);
      setResponse(recipes);
    }
    fetchData();
  }, [axios])

  return (
    <>
      {authStatus === "authenticated" ? "You are logged in!" : "Please Login!"}
      <br></br>
      {authStatus === "authenticated" && (<RecipeSwiper recipes={response} />)}
    </>
  );
};

export default Secret;

