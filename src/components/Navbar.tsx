import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { PanelMenu } from "primereact/panelmenu";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../modules/home-page/components/menuItems";
import { isAuthenticated } from "../config/tokenStorage";

const Navbar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const items = menuItems();
  const KEYCLOAK_URL = "http://localhost:8080";
  const REDIRECT_URI = "http://localhost:5173/oauth/callback";
  const KEYCLOAK_CLIENT_ID = "blog-app";
  const login = () => {
    window.location.href = `${KEYCLOAK_URL}/realms/blog-realm/protocol/openid-connect/auth?client_id=${KEYCLOAK_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;
  }
  const logout = () => {
    window.location.href = `${KEYCLOAK_URL}/auth/realms/hyper/protocol/openid-connect/logout?client_id=hyper&redirect_uri=http://localhost:3000/`;
  };

  const toggleLogin = () => {
    if (isAuthenticated()) {
      logout();
    } else {
      login();
    }
  }


  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900 logo-font">
              Home Blog
            </Link>
          </div>
          <Button label="loginwg" onClick={toggleLogin}></Button>
          <div className="hidden custom:block">
            <Menubar model={items} />
          </div>
          <div className="custom:hidden">
            <Button
              icon="fi fi-rr-menu-burger"
              className="text-gray-700 p-button-text p-button-plain"
              onClick={() => setSidebarVisible(true)}
            />
          </div>
        </div>
      </div>
      <Sidebar
        visible={sidebarVisible}
        onHide={() => setSidebarVisible(false)}
        header={<h2 className="text-xl font-bold">Home Blog</h2>}
        position="right"
        className="w-64"
      >
        <PanelMenu model={items}></PanelMenu>
      </Sidebar>
    </nav>
  );
};

export default Navbar;
