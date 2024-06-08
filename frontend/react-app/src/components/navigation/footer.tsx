import { Button } from "react-bulma-components";
import { Home01Icon, BitcoinEllipseIcon, UserIcon, PlusMinus01Icon} from "hugeicons-react";

const Footer = () => {
  return (
    <footer className="navbar is-fixed-bottom has-background-dark">
      <div className="container">
        <div className="columns is-mobile is-centered">
          <div className="column is-narrow">
            <Home01Icon size={32} className="has-text-white" />
          </div>
          <div className="column is-narrow">
            <BitcoinEllipseIcon size={32} className="has-text-white" />
          </div>
          <div className="column is-narrow">
            <div className="circle-container">
              <Button className="is-rounded circle-button">
                <PlusMinus01Icon size={32} className="has-text-white" />
              </Button>
            </div>
          </div>
          <div className="column is-narrow">
            <UserIcon size={32} className="has-text-white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
