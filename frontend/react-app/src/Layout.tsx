import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/Footer/Footer";

export function Layout() {
  return (
    <>
      <div className="d-flex flex-column h-100">
        <NavigationBar />

        <Container>
          <Outlet />
        </Container>

        <Footer />
      </div>
    </>
  );
}
