import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import BottomBar from "./components/navigation/BottomBar";
import NavigationBar from "./components/navigation/NavigationBar";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkMobile = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsMobile(!userAgent.match(/mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini|windows phone/i) !== null);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div>
      {isMobile ? <BottomBar isMobile /> : <NavigationBar />}
      <Outlet />
      {isMobile && <div style={{ height: "20rem" }}></div>} {/* Add empty div for padding */}
    </div>
  );
};

export { Layout };
