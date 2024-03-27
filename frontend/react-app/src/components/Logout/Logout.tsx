import { useAuthenticator } from "@aws-amplify/ui-react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Logout: React.FC = () => {
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    signOut();
    navigate("/");
  }

  return <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>;
};

export default Logout;
