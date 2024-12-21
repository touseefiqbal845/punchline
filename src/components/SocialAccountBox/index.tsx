'use client';

import { FC, useState } from 'react';
import { Button } from 'primereact/button';
import { Badge } from 'primereact/badge';
import { motion } from 'framer-motion';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { MdOutlineReplay } from "react-icons/md";
import { TbTrash } from "react-icons/tb";


interface Props {
  className?: string;
  mode?: string;
}

const SocialAccountBox: FC<Props> = ({ mode }) => {
  const [isConnect, setConnect] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const handleConnect = () => {
    setConnect(true);
  }

  return (
    <motion.div
      className={`w-full flex flex-col rounded-lg gap-4 p-4 ${isEdit ? 'bg-gray-200' : 'bg-white'}`}
      animate={{
        gap: isEdit ? '16px' : 0,
      }}
      initial={{
        gap: 0
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div className='flex flex-row items-center gap-4'>
          <div className='flex text-2xl bg-gray-200 p-2 rounded-lg'>
            {mode === 'Google' && <FcGoogle />}
            {mode === 'Facebook' && <FaFacebook />}
            {mode === 'Twitter' && <FaSquareXTwitter />}
          </div>
          <div className='w-full flex-col gap-1'>
            <h2 className="text-lg font-semibold">{mode}</h2>
            <span className="text-sm text-gray-500">{isConnect ? `You are connected to your ${mode} account` : `Sign in to Punchline using ${mode}`}</span>
          </div>
        </div>
        {!isConnect && <Button label={`Connect to ${mode}`} className="w-full sm:w-auto px-4 py-2 text-gray-500 border-2" onClick={handleConnect} />}
        {isConnect &&
          <Button className="w-full sm:w-auto flex flex-row justify-center gap-2 p-2 text-gray-500 border-2 focus:ring-0" onClick={() => setEdit(!isEdit)} >
            <span className='text-black'>Edit</span>
            <FaChevronDown />
          </Button>
        }
      </div>
      <motion.div
        className="w-full flex flex-col xl:flex-row gap-2 px-4 bg-white rounded-lg"
        animate={{
          height: isEdit ? "auto" : 0,
          opacity: isEdit ? 1 : 0,
          paddingTop: isEdit ? '16px' : 0,
          paddingBottom: isEdit ? '16px' : 0,
        }}
        initial={{
          height: 0,
          paddingLeft: '16px',
          paddingRight: '16px',
        }}
        transition={{
          // type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <div className='w-full h-full flex flex-col gap-1'>
          <span className='font-bold'>Profile photo</span>
          <div className='text-2xl'>
            <RxAvatar />
          </div>
        </div>
        <div className='w-full flex flex-col gap-1'>
          <span className='font-bold'>Username</span>
          <span>abcxy@gmail.com</span>
        </div>
        <div className='w-full flex flex-col gap-1'>
          <span className='font-bold'>Status</span>
          <Badge severity="success" />
        </div>
        <motion.div
          className='w-full flex flex-col gap-1'
          animate={{
            opacity: isEdit ? 1 : 0,
          }}
          initial={{
            opacity: 0,
          }}
          transition={{
            // type: "spring",
            stiffness: 100,
            damping: 15,
          }}
        >
          <Button className="flex flex-row justify-center items-center gap-2 p-2 text-black border-2 focus:ring-0" onClick={() => setEdit(!isEdit)} >
            <MdOutlineReplay />
            <span>Reconnect</span>
          </Button>
          <Button className="flex flex-row justify-center items-center gap-2 p-2 border-[#BE416A] text-[#BE416A] border-2 focus:ring-0" onClick={() => setEdit(!isEdit)} >
            <TbTrash />
            <span>Disconnect</span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SocialAccountBox;