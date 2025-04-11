import { Button } from "primereact/button";
import { Dialog } from 'primereact/dialog';
import { Menubar } from "primereact/menubar";
import { PanelMenu } from "primereact/panelmenu";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../config/tokenStorage";
import { logout } from "../modules/auth/services/authService";
import { menuItems } from "../modules/home-page/components/menuItems";

export type position = 'top' | 'center' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const Navbar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const items = menuItems();
  const KEYCLOAK_URL = "http://localhost:8080";
  const REDIRECT_URI = "http://localhost:5173/oauth/callback";
  const KEYCLOAK_CLIENT_ID = "blog-app";
  const login = () => {
    window.location.href = `${KEYCLOAK_URL}/realms/blog-realm/protocol/openid-connect/auth?client_id=${KEYCLOAK_CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`;
  }

  const toggleLogin = () => {
    if (isAuthenticated()) {
      logout();
    } else {
      login();
    }
  }
  const [visible, setVisible] = useState<boolean>(false);
  const [position, setPosition] = useState<position>('center');

  const show = (position: position) => {
    setPosition(position);
    setVisible(true);
  };


  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900 logo-font">
              Home Blog
            </Link>
          </div>
          <div className="hidden custom:block">
            <Menubar model={items} />
          </div>
          <Button icon="fi fi-rr-enter" label="Đăng nhập" className="btn-transparent" onClick={() => show('top')} ></Button>


          <Dialog visible={visible} position={position} style={{ width: 'auto' }} onHide={() => { if (!visible) return; setVisible(false); }} draggable={false} resizable={false}>
            <Button icon="fi fi-brands-google" label="Đăng nhập với Google" onClick={toggleLogin}></Button>
          </Dialog>
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
