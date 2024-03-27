import { useEffect, useState } from 'react';
import { Authenticator } from "@aws-amplify/ui-react";
import { useNavigate } from 'react-router-dom';
import { AuthUser } from 'aws-amplify/auth';
import { Spinner } from 'react-bootstrap';
import "@aws-amplify/ui-react/styles.css";


const Login: React.FC = () => {
  const [user, setUser] = useState<AuthUser | undefined>(); // Initialize user state
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/profile', { replace: true });
    }
  }, [user, navigate]);

  return (
    <>
      <br />
      <br />
      <br />
      <Authenticator>
        {({ user }) => {
          setUser(user);
          //return spinner or loading component
          return <main><Spinner/></main>;
        }}
      </Authenticator>
    </>
  );
};

export default Login;
