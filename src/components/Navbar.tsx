import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Sidebar } from 'primereact/sidebar';
import React, { JSX, useState } from 'react';
import { Link } from 'react-router-dom';

export type navbarProps = {
  label: string;
  url: string;
  template: (item: MenuItem) => JSX.Element;
};

export const menuItems: navbarProps[] = [
  { label: 'Style', url: '#', template: (item: MenuItem) => <Link to={item.url ?? '#'} className="p-menuitem-link text-gray-700 hover:text-gray-900 font-medium px-4 py-2">{item.label}</Link> },
  { label: 'Beauty', url: '#', template: (item: MenuItem) => <Link to={item.url ?? '#'} className="p-menuitem-link text-gray-700 hover:text-gray-900 font-medium px-4 py-2">{item.label}</Link> },
  { label: 'Lifestyle', url: '#', template: (item: MenuItem) => <Link to={item.url ?? '#'} className="p-menuitem-link text-gray-700 hover:text-gray-900 font-medium px-4 py-2">{item.label}</Link> },
  { label: 'Home', url: '#', template: (item: MenuItem) => <Link to={item.url ?? '#'} className="p-menuitem-link text-gray-700 hover:text-gray-900 font-medium px-4 py-2">{item.label}</Link> },
  { label: 'Travel', url: '#', template: (item: MenuItem) => <Link to={item.url ?? '#'} className="p-menuitem-link text-gray-700 hover:text-gray-900 font-medium px-4 py-2">{item.label}</Link> },
  { label: 'Shop', url: '#', template: (item: MenuItem) => <Link to={item.url ?? '#'} className="p-menuitem-link text-gray-700 hover:text-gray-900 font-medium px-4 py-2">{item.label}</Link> },
  { label: 'About', url: '#', template: (item: MenuItem) => <Link to={item.url ?? '#'} className="p-menuitem-link text-gray-700 hover:text-gray-900 font-medium px-4 py-2">{item.label}</Link> },
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
          <div className="hidden md:block">
            <Menubar
              model={menuItems}
              className="border-none bg-transparent p-0"
            />
          </div>
          <div className="md:hidden">
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
        <ul className="flex flex-col gap-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.url}
                className="text-gray-700 hover:text-gray-900 font-medium"
                onClick={() => setSidebarVisible(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Sidebar>
    </nav>
  );
};

export default Navbar;