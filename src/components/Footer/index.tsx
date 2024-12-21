'use client';

import { FC } from 'react';
import { Button } from 'primereact/button';

import { FooterMenuItems } from '@/constants/menuItems';

const Footer: FC = () => {

  return (
    <footer className="fixed md:hidden bottom-0 left-0 w-full bg-blue-800 text-white shadow-md rounded-b-3xl">
      <div className="flex justify-around py-2">
        {FooterMenuItems.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <Button
              className="flex flex-col p-button-text text-white text-2xl focus:ring-0 focus:text-cyan-500"
            >
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </Button>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;