// https://ui.docs.amplify.aws/react/connected-components/account-settings/change-password
// https://react-bootstrap.netlify.app/docs/components/modal/
import {
  AccountSettings,
  useAuthenticator,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { signOut } = useAuthenticator((context) => [context.signOut]);
  const navigate = useNavigate();

  const onSuccess = () => {
    alert("password is successfully changed!");
    localStorage.clear();
    signOut();
    navigate("/login");
  };

  return (
    <>
      <Button variant="secondary" className="ms-2" onClick={handleShow}>
        Change Password
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AccountSettings.ChangePassword onSuccess={onSuccess} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default withAuthenticator(ChangePassword);
