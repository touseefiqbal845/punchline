'use client';

import React, { useState } from 'react';
import { Button } from 'primereact/button';

import { MdOutlineLock } from "react-icons/md";

import SocialAccountBox from '@/components/SocialAccountBox';

import ChangePasswordModal from "@/components/ChangePasswordModal";

const SignInSecurityPage: React.FC = () => {
  const [changePasswordModalVisible, setChangePasswordModalVisible] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center">
      <h1 className="w-full text-3xl font-bold mb-4 text-left">Sign In & Security</h1>

      <div className='w-full flex flex-col 2xl:flex-row justify-center items-center gap-5 mb-10'>
        <div className='2xl:max-w-[30%] w-full flex-col gap-2'>
          <h2 className="text-lg font-semibold mb-2">Password</h2>
          <p className="text-sm text-gray-600 mb-4">
            Keep your security secure by changing your password at least every 120 days
          </p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 p-5 border rounded-lg shadow-md">
          <div className='flex flex-row items-center gap-4 sm:pl-4'>
            <div className='flex text-2xl bg-gray-200 p-2 rounded-lg'>
              <MdOutlineLock />
            </div>
            <div className='w-full flex-col gap-1'>
              <h2 className="text-lg font-semibold">Password</h2>
              <span className="text-sm text-gray-500">Last changed October 22nd, 2023 03:10</span>
            </div>
          </div>
          <Button
            label="Change Password"
            className="w-full sm:w-[164px] px-4 py-2 bg-gray-900 text-white"
            onClick={() => setChangePasswordModalVisible(true)}
          />
        </div>
      </div>

      <div className='w-full flex flex-col 2xl:flex-row justify-center items-start gap-5'>
        <div className='2xl:max-w-[30%] w-full flex-col gap-2'>
          <h2 className="text-lg font-semibold mb-2">Social Accounts</h2>
          <p className="text-sm text-gray-600 mb-4">
            Connect your social media accounts to make sign in easier.
          </p>
        </div>
        <div className="w-full flex flex-col justify-between items-center p-5 border rounded-lg shadow-md">
          <div className='w-full py-2 border-b'>
            <SocialAccountBox mode="Google" />
          </div>
          <div className='w-full py-2 border-b'>
            <SocialAccountBox mode="Facebook" />
          </div>
          <div className='w-full py-2'>
            <SocialAccountBox mode="Twitter" />
          </div>
        </div>
      </div>

      {changePasswordModalVisible && <ChangePasswordModal visible={changePasswordModalVisible} onHide={() => setChangePasswordModalVisible(false)} />}
    </div>
  );
};

export default SignInSecurityPage;
