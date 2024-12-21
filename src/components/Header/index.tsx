'use client';

import type { FC } from 'react';
import { useState } from 'react';

import { motion } from 'framer-motion';
import { LuSlidersHorizontal } from "react-icons/lu";
import { Button } from 'primereact/button';

import Avatars from './Avatar';

import { useFilter } from '@/app/context/FilterContext';
import SearchBox from './SearchBox';
import Filters from './Filters';


interface HeaderProps {
  className?: string;
  mode?: string;
}

const Header: FC<HeaderProps> = ({ mode = 'light' }) => {
  const { isFilterSettings, setFilterSetting } = useFilter();

  return (
    <motion.div className="w-full hidden md:flex justify-end border-b-[1px]"
      animate={{
        height: isFilterSettings ? "70px" : "auto",
      }}
      initial={{
        height: "70px",
      }}
      transition={{
        // type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <div className="w-full md:w-1/2 container py-1.5">
        <div className="w-full h-full flex flex-row justify-end">
          <div className="h-full flex flex-col gap-2">
            <SearchBox />
            <Filters isFilters={isFilterSettings} />
          </div>
          <div className='flex flex-col justify-center items-center '>
            <div className='h-full flex justify-center items-start pt-2'>
              <div className="flex justify-center items-center px-3 ">
                <Button className="text-[16px] shadow-lg px-3 py-3 rounded-full" onClick={() => { setFilterSetting(!isFilterSettings) }}>
                  <LuSlidersHorizontal />
                </Button>
              </div>
              <Avatars />
            </div>
            <motion.div className='flex justify-center items-start '
              animate={{
                height: isFilterSettings ? 0 : '100%',
              }}
              initial={{
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
            />
          </div>
        </div>
      </div>
    </motion.div >
  );
}

export default Header;
