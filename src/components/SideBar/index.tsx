'use client';

import type { FC } from 'react';
import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from 'primereact/button';
import { FaPauseCircle } from 'react-icons/fa';
import { IoMdNotificationsOutline } from 'react-icons/io';

import SideMenu from './SideMenu';
import SideMenuBelow from "./SideMenuBelow";
import { useFilter } from '@/app/context/FilterContext';
import Icon from '@/molecules/Icon';

interface Props {
  className?: string;
  mode?: string;
}

const SideBar: FC<Props> = ({ mode = 'light' }) => {
  const { isFilterSettings, setFilterSetting } = useFilter();
  const [iscollapse, setCollapsed] = useState(false);
  const [height, setHeight] = useState('210px');

  useEffect(() => {
    const updateHeight = () => {
      if (isFilterSettings) {
        setHeight('69px');
      } else if (window.innerWidth >= 1280) {
        setHeight('130px'); // xl
      } else if (window.innerWidth >= 1024) {
        setHeight('178px'); // lg
      } else {
        setHeight('210px'); // default
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return () => window.removeEventListener('resize', updateHeight);
  }, [isFilterSettings]);

  useEffect(() => {}, [iscollapse]);

  return (
    <motion.div
      className=" hidden md:flex border-r-[1px] w-full"
      animate={{
        minWidth: iscollapse ? '90px' : '260px',
        width: iscollapse ? '90px' : '260px',
        maxWidth: iscollapse ? '90px' : '260px'
      }}
      initial={{
        minWidth: '260px',
        maxWidth: '260px'
      }}
      transition={{
        // type: "spring",
        stiffness: 100,
        damping: 15
      }}
    >
      <div className="w-full h-full container flex flex-col justify-between">
        <div className="w-full h-full flex flex-col justify-start">
          <motion.div
            className={`w-full flex flex-row justify-between items-center p-4`}
            animate={{
              height: height
            }}
            initial={{
              opacity: 1
            }}
            transition={{
              duration: 0.3
            }}
          >
            <div className="w-full flex flex-row justify-start items-center pl-3 gap-2 overflow-clip">
              <Image
                src="/assets/LOGO.png"
                alt="drone"
                width={35}
                height={35}
              />
              <motion.span
                className="uppercase text-[25px] font-bold text-cyan-950 text-nowrap"
                animate={{
                  opacity: iscollapse ? 0 : 1
                }}
                initial={{
                  opacity: 1,
                  width: 'auto'
                }}
                transition={{
                  duration: 0.3
                }}
              >
                Punch
                <span className="underline text-cyan-700 decoration-yellow-700 pl-1">
                  Line
                </span>
              </motion.span>
            </div>
            <motion.div
              className={`flex items-center justify-center h-full`}
              animate={{
                opacity: iscollapse ? 0 : 1
              }}
              initial={{
                opacity: 1
              }}
              transition={{
                duration: 0.3
              }}
            >
              <Button
                className="w-full h-full"
                onClick={() => setCollapsed(true)}
              >
                <Icon icon="sidebar-collapse" size={12} />
              </Button>
            </motion.div>
          </motion.div>
          <div className="flex justify-center w-full pt-4 px-4 border-t-[1px] overflow-clip">
          <SideMenu ishidden={iscollapse}  />

          </div>
        </div>
        <div className="relative w-full flex flex-col justify-start items-center border-t-[1px] gap-2 px-4 pb-3">
          <Button
            className={`absolute top-[-50px] ${!iscollapse && 'hidden'} p-4`}
            onClick={() => setCollapsed(false)}
          >
            <Icon icon="sidebar-expand" size={12} />
          </Button>

          <div className={`w-full pt-2`}>
          <SideMenuBelow ishidden={iscollapse}  />


            {/* <Button
              className={`w-full flex flex-row justify-start items-center pl-5  gap-3 overflow-clip text-[16px] focus:ring-0`}
            >
              <div>
                <FaPauseCircle />
              </div>
              <motion.span
                className="text-nowrap"
                animate={{
                  opacity: iscollapse ? 0 : 1
                  // width: iscollapse ? 0 : 'auto',
                }}
                initial={{
                  opacity: 1,
                  width: 'auto'
                }}
                transition={{
                  duration: 0.3
                }}
              >
                Audio Player
              </motion.span>
            </Button> */}

          </div>
          {/* <div className={`w-full pt-2`}>
            <Button
              className={`w-full flex flex-row justify-start items-center pl-5  gap-3 overflow-clip text-[16px] focus:ring-0`}
            >
              <div>
                <IoMdNotificationsOutline />
              </div>
              <motion.span
                className="text-nowrap"
                animate={{
                  opacity: iscollapse ? 0 : 1
                }}
                initial={{
                  opacity: 1,
                  width: 'auto'
                }}
                transition={{
                  duration: 0.3
                }}
              >
                Notification
              </motion.span>
            </Button>
          </div>
          <div className={`w-full pt-2`}>
            <Button
              className={`w-full flex flex-row justify-start items-center pl-5  gap-3 overflow-clip text-[16px] focus:ring-0`}
            >
              <div>
                <Icon icon="setting_s" size={16} />
              </div>
              <motion.span
                className="text-nowrap"
                animate={{
                  opacity: iscollapse ? 0 : 1
                }}
                initial={{
                  opacity: 1,
                  width: 'auto'
                }}
                transition={{
                  duration: 0.3
                }}
              >
                Settings
              </motion.span>
            </Button>
          </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default SideBar;
