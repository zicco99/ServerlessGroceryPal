import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Image, Spinner } from 'react-bootstrap';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import ChangePassword from '../components/ChangePassword/ChangePassword';
import { FetchUserAttributesOutput, fetchUserAttributes } from 'aws-amplify/auth';

const Profile = () => {
  const { user } = useAuthenticator((context) => [context.user]);
  const [isLoading, setIsLoading] = useState(true);
  const [userAttributes, setUserAttributes] = useState<FetchUserAttributesOutput | null>(null);

  useEffect(() => {
    if (user) {
      const loadUserAttributes = async () => {
        setIsLoading(true);
        try {
          const attributes: FetchUserAttributesOutput = await fetchUserAttributes();
          if (attributes) {
            setUserAttributes(attributes);
          }
        } catch (error) {
          console.error('Error fetching user attributes:', error);
        } finally {
          setIsLoading(false);
        }
      };

      loadUserAttributes();
    }
  }, [user]);

  if (isLoading) {
    return (
      <Container className="mt-5 d-flex justify-content-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    userAttributes && (<Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="text-center">
            <Card.Header as="h5">Profile</Card.Header>
            <Card.Body>
              <Image
                src={userAttributes.picture || "https://avatar.iran.liara.run/public/boy?username=Ash"}
                roundedCircle
                fluid
                className="mb-3"
                style={{ width: '100px', height: '100px' }}
              />
              <Card.Title>{userAttributes.name || 'User Name'}</Card.Title>
              <Card.Text>{userAttributes.email || 'User Email'}</Card.Text>
              <Button variant="primary" className="me-2">
                Edit Profile
              </Button>
              <ChangePassword />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  ));
};

export default withAuthenticator(Profile);
