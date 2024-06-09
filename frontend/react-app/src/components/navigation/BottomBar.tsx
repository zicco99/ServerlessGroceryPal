import { useNavigate, useLocation } from "react-router-dom";
import { Button, Columns } from "react-bulma-components";
import { Home01Icon, BitcoinEllipseIcon, UserIcon, PlusMinus01Icon } from "hugeicons-react";
import "./BottomBar.css"; // Import CSS file for custom styles

const BottomBar = (isMobile: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const changePage = (page: string) => () => {
    navigate(`/${page}`);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <footer className={`navbar ${isMobile ? "is-fixed-bottom" : ""} has-background-dark bottom-bar`}>
      <Columns className="is-mobile is-centered is-gapless">
        <Columns.Column className="has-text-centered" size="one-quarter" onClick={changePage("")}>
          <div className={`icon-container ${isActive("/") ? "active-rect" : ""}`}>
            <Home01Icon size={32} className="has-text-white" />
          </div>
        </Columns.Column>
        <Columns.Column className="has-text-centered" size="one-quarter" onClick={changePage("bitcoin")}>
          <div className={`icon-container ${isActive("/bitcoin") ? "active-rect" : ""}`}>
            <BitcoinEllipseIcon size={32} className="has-text-white" />
          </div>
        </Columns.Column>
        <Columns.Column className="has-text-centered" size="one-quarter">
          <div className={`icon-container ${isActive("/scan") ? "active-circle" : ""}`}>
            <Button className="is-rounded circle-button" onClick={changePage("scan")}>
              <PlusMinus01Icon size={32} className="has-text-white" />
            </Button>
          </div>
        </Columns.Column>
        <Columns.Column className="has-text-centered" size="one-quarter" onClick={changePage("profile")}>
          <div className={`icon-container ${isActive("/profile") ? "active-rect" : ""}`}>
            
            <UserIcon size={32} className="has-text-white" />
          </div>
        </Columns.Column>
      </Columns>
    </footer>
  );
};

export default BottomBar;


