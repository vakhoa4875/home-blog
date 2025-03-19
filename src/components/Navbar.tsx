import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import { PanelMenu } from "primereact/panelmenu";
import { Sidebar } from "primereact/sidebar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "./menuItems";

const Navbar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const items = menuItems();

  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              The Good Trade
            </Link>
          </div>
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
        position="right"
        className="w-64"
      >
        <h2 className="mb-4 text-xl font-bold">The Good Trade</h2>
        <PanelMenu model={items}></PanelMenu>
      </Sidebar>
    </nav>
  );
};

export default Navbar;
