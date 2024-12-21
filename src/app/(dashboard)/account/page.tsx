'use client';

import React, { useState } from 'react';
import { Button } from 'primereact/button';

import { MdOutlineLock } from "react-icons/md";

import AccountForm from '@/components/AccountForm';


const Account_Details: React.FC = () => {
  const [changePasswordModalVisible, setChangePasswordModalVisible] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full flex flex-row justify-between items-center gap-2 mb-4">
        <div className="flex flex-row items-center gap-2">
          <span className="text-2xl font-bold ">Account Details</span>
        </div>
        <button className="bg-[#1E222D] text-white px-4 py-2 rounded-md hover:bg-gray-600">
          Save
        </button>
      </div>

      <div className='w-full flex flex-col 2xl:flex-row justify-center items-start gap-5 mb-10'>
        <div className='2xl:max-w-[30%] w-full flex-col gap-2'>
          <h2 className="text-lg font-semibold mb-2">Details</h2>
          <p className="text-sm text-gray-600 mb-4">
            Edit your account information here
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-5 border rounded-lg shadow-md">
          <AccountForm />
        </div>
      </div>

      {/* Save Button */}
      <div className="w-full text-right">
        <button className="bg-[#1E222D] text-white px-4 py-2 rounded-md hover:bg-gray-600">
          Save
        </button>
      </div>
    </div>
  );
};

export default Account_Details;
