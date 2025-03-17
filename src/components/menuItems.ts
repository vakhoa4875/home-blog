import { Button } from 'primereact/button';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Sidebar } from 'primereact/sidebar';
import React, { useState, JSX } from 'react';
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