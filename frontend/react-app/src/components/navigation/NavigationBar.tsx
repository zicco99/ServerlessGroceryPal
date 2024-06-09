import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Image, Offcanvas, Button, ListGroup } from 'react-bootstrap';
import { Text, useAuthenticator } from '@aws-amplify/ui-react';
import { FetchUserAttributesOutput, fetchUserAttributes } from 'aws-amplify/auth';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const { user, signOut } = useAuthenticator((context) => [context.user]);
  const [showMenu, setShowMenu] = useState(false);
  const [userAttributes, setUserAttributes] = useState<FetchUserAttributesOutput | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserAttributes = async () => {
      if (user) {
        try {
          const attributes = await fetchUserAttributes();
          setUserAttributes(attributes);
        } catch (error) {
          console.error('Error fetching user attributes:', error);
        }
      }
    };

    loadUserAttributes();
  }, [user]);

  const handleToggleMenu = () => setShowMenu(!showMenu);
  const isActive = (path: string) => location.pathname === path;

  function handleLogout() {
    localStorage.clear();
    signOut();
    handleToggleMenu();
    navigate("/");
  }

  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <Nav className="me-auto">
            {user ? (
              <Nav.Link onClick={handleToggleMenu}>
                <Image src={userAttributes?.picture || 'https://via.placeholder.com/30'} roundedCircle style={{ width: '30px', height: '30px' }} />
              </Nav.Link>
            ) : (
              <Button onClick={() => navigate("/login")} variant="outline-light">
                <Text>Login</Text>
              </Button>
            )}
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={showMenu} onHide={handleToggleMenu} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{user ? 'User Menu' : 'Menu'}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup>
            <ListGroup.Item action onClick={() => navigate("/profile")} active={isActive('/profile')}>Profile</ListGroup.Item>
            {user && (
              <>
                <ListGroup.Item action onClick={() => navigate("/settings")} active={isActive('/settings')}>Settings</ListGroup.Item>
                <ListGroup.Item action onClick={handleLogout}>Logout</ListGroup.Item>
              </>
            )}
            {!user && (
              <ListGroup.Item action onClick={() => navigate('/login')} active={isActive('/login')}>Login</ListGroup.Item>
            )}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
