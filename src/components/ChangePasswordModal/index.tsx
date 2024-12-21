'use client';

import React, { useState, useRef, useEffect } from "react";
import "primereact/resources/themes/lara-light-blue/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css"; // PrimeReact core
import "primeicons/primeicons.css"; // PrimeReact icons
import "tailwindcss/tailwind.css"; // Tailwind

import Image from "next/image";

import { FileUpload, ItemTemplateOptions } from 'primereact/fileupload';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { Panel } from 'primereact/panel';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import { IoMdCloudUpload } from "react-icons/io";

import '@/styles/custom.scss';

interface Props {
  visible: boolean;
  onHide: () => void;
}

const ChangePasswordModal: React.FC<Props> = ({ visible = false, onHide }) => {
  const [originalPassword, setOriginalPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const ChangePassword = () => {
    onHide();
  }

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <div className="h-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      {isVisible &&
        <div className=" bg-white rounded-lg shadow-lg w-full md:w-3/4 md:min-w-[600px] max-w-lg mx-4 pt-4">
          <div className="py-3 flex justify-between items-center mx-10">
            <h2 className="text-2xl font-bold">Set New Password</h2>
            <button onClick={onHide} className="text-gray-600 hover:text-gray-800">
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-4 px-10 py-4">
            <InputText
              className="py-4 px-4 border-2"
              placeholder="Current password"
              value={originalPassword}
              type="password"
              onChange={(e) => setOriginalPassword(e.target.value)}
            />
            <InputText
              className="py-4 px-4 border-2"
              placeholder="New password"
              value={newPassword}
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <InputText
              className="py-4 px-4 border-2"
              placeholder="Retype new password"
              value={retypePassword}
              type="password"
              onChange={(e) => setRetypePassword(e.target.value)}
            />
            <div className="flex flex-row justify-end">
              <Button
                label="Save Password"
                className="text-white font-normal bg-[#1AA9FB] p-3"
                onClick={ChangePassword}
              />
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ChangePasswordModal;
