'use client';

import type { FC } from 'react';
import { useState } from 'react';

import { motion } from 'framer-motion';

import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';

import { MdOutlineFilterAltOff } from "react-icons/md";


import '@/styles/custom.scss';

import {
  languages,
  displayTypes,
  matches,
  contents,
} from '@/constants/index';

interface Props {
  isFilters?: boolean;
  className?: string;
}

const Filters: FC<Props> = ({ isFilters = false }) => {
  const [currentLanguage, SetLanguage] = useState(languages[0]);
  const [displayType, setDisplayType] = useState(displayTypes[0]);
  const [matchType, setMatchType] = useState(matches[0]);
  const [contentType, setContentType] = useState<string[]>([contents[0]]);
  const panelHeaderTemplate = (options: any) => {
    return (
      <div className="p-multiselect-header p-multiselect-panel-custom justify-start">
        {options.element?.props?.children?.[0] ?? options.element}
        <span>Any Content</span>
      </div>
    );
  };

  return (
    <motion.div
      className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-end gap-2"
      animate={{
        opacity: isFilters ? 0 : 1,
      }}
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <motion.div
        className="w-full row-span-1 lg:row-span-2 col-span-2 lg:col-span-1 flex flex-row items-center justify-center"
        animate={{
          opacity: isFilters ? 1 : 1,
          height: isFilters ? 0 : '100%',
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <Button className="w-full flex flex-row justify-center items-center" >
          <MdOutlineFilterAltOff />
          <span className="text-nowrap">Reset All</span>
        </Button>
      </motion.div>
      <motion.div className="w-full overflow-clip"
        animate={{
          height: isFilters ? 0 : '100%',
        }}
        initial={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <Dropdown
          value={currentLanguage}
          onChange={(e) => SetLanguage(e.value)}
          options={languages}
          className="w-full bg-gray-200"
        />
      </motion.div>
      <motion.div className="w-full overflow-clip"
        animate={{
          height: isFilters ? 0 : '100%',
        }}
        initial={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <Dropdown
          value={displayType}
          onChange={(e) => setDisplayType(e.value)}
          options={displayTypes}
          className="w-full bg-gray-200"
        />
      </motion.div>
      <motion.div className="w-full overflow-clip"
        animate={{
          height: isFilters ? 0 : '100%',
        }}
        initial={{
          opacity: 1,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <Dropdown
          value={matchType}
          onChange={(e) => setMatchType(e.value)}
          options={matches}
          className="w-full bg-gray-200"
        />
      </motion.div>
      <motion.div className="w-full overflow-clip"
        animate={{
          opacity: isFilters ? 1 : 1,
          height: isFilters ? 0 : '100%',
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <MultiSelect
          value={contentType}
          onChange={(e: MultiSelectChangeEvent) => setContentType(e.value)}
          options={contents}
          className="max-w-[20rem] w-full md:w-20rem bg-gray-200"
          panelClassName='bg-gray-100'
          panelHeaderTemplate={panelHeaderTemplate}
          placeholder="Please Select a Content"
        />
      </motion.div>
    </motion.div>
  );

}

export default Filters;
