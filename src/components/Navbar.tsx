import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { PanelMenu } from 'primereact/panelmenu';
import { Sidebar } from 'primereact/sidebar';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const menuItems: MenuItem[] = [
  {
    label: 'Style',
    icon: 'pi pi-tag',
    items: [
      {
        label: 'Fashion',
        icon: 'pi pi-shopping-cart',
        url: '/fashion',
      },
      {
        label: 'Beauty',
        icon: 'pi pi-sparkles',
        url: '/jewelry',
      },
    ]
  },
  {
    label: 'Self',
    icon: 'pi pi-user',
    items: [
      {
        label: 'Wellness',
        icon: 'pi pi-heart',
        url: '/wellness',
      },
      {
        label: 'Work & Money',
        icon: 'pi pi-money-bill',
        url: '/work-money',
      },
      {
        label: 'Relationships',
        icon: 'pi pi-users',
        url: '/relationships',
      },
      {
        label: 'Parenthood',
        icon: 'pi pi-users',
        url: '/parenthood',
      },
    ]
  },
  {
    label: 'Lifestyle',
    icon: 'pi pi-globe',
    url: '/lifestyle',
  },
  {
    label: 'Home',
    icon: 'pi pi-home',
    url: '/',
  },
  {
    label: 'Travel',
    icon: 'pi pi-map',
    url: '/travel',
  },
  {
    label: 'Shop',
    icon: 'pi pi-shopping-cart',
    url: '/shop',
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle',
    url: '/about',
  },
];
const Navbar: React.FC = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              The Good Trade
            </Link>
          </div>
          <div className="hidden custom:block">
            <Menubar
              model={menuItems}
            />
          </div>
          <div className="custom:hidden">
            <Button
              icon="pi pi-bars"
              className="p-button-text p-button-plain text-gray-700"
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
        <h2 className="text-xl font-bold mb-4">The Good Trade</h2>
        <PanelMenu model={menuItems}></PanelMenu>
      </Sidebar>
    </nav>
  );
};

export default Navbar;