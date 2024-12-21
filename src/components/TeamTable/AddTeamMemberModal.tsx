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

import { IoMdCloudUpload } from "react-icons/io";

import '@/styles/custom.scss';

interface AddTeamMemberModalProps {
  visible: boolean;
  onHide: () => void;
}

const AddTeamMemberModal: React.FC<AddTeamMemberModalProps> = ({ visible = false, onHide }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [isAdmin, setAdmin] = useState<boolean>(false);

  const handleSend = () => {
    onHide();
  };

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <div className="h-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      {isVisible &&
        <div className=" bg-white rounded-lg shadow-lg w-3/4 min-w-[600px] max-w-lg pt-4">
          <div className="py-3 flex justify-between items-center mx-10">
            <h2 className="text-2xl font-bold">Add Team Member</h2>
            <button onClick={onHide} className="text-gray-600 hover:text-gray-800">
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-4 px-10">
            <div className="flex flex-row justify-center gap-4">
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="first_name">First Name</label>
                <InputText
                  id="first_name"
                  className="border-[1px] border-gray-300 py-1 px-2"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="last_name">Last Name</label>
                <InputText
                  id="last_name"
                  className="border-[1px] border-gray-300 py-1 px-2"
                />
              </div>
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="email">Email</label>
              <InputText
                id="email"
                className="border-[1px] border-gray-300 py-1 px-2"
              />
            </div>
          </div>

          <div className="flex items-center pt-3 px-10">
            <Checkbox
              inputId="admin_access"
              name="admin_access"
              value="admin"
              onChange={() => setAdmin(!isAdmin)}
              checked={isAdmin}
              className="p-checkbox-support"
            />
            <label htmlFor="admin_access" className="ml-2">Admin Access</label>
          </div>

          <div className="w-full flex justify-end gap-4 items-center px-10 py-5">
            <button
              onClick={handleSend}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Send Invitation
            </button>
          </div>
        </div>
      }
    </div>
  );
};

export default AddTeamMemberModal;
