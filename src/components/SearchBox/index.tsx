'use client';

import type { FC } from 'react';
import { useState } from 'react';

import { FaArrowRight } from "react-icons/fa6";

import { Button } from 'primereact/button';
import { AutoComplete } from 'primereact/autocomplete';
import { Dropdown } from 'primereact/dropdown';


import {
  category,
  categories
} from '@/constants/index';

import '@/styles/custom.scss';
//import { CiSearch } from "react-icons/ci";

interface Props {
  className?: string;
}

const SearchBox: FC<Props> = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectedCategoryTemplate = (option: category) => {
    if (option) {
      return (
        <div className="flex items-center gap-2 ">
          {option.icon}
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>Select a Category</span>;
  };

  const categoryOptionTemplate = (option: category) => {
    return (
      <div className="flex items-center gap-2">
        {option.icon}
        <div>{option.name}</div>
      </div>
    );
  };


  return (
    <div className="w-full h-full flex flex-row justify-center">
      <div className='w-full p-inputgroup flex flex-row justify-center border-2 rounded-lg'>
        <span className="p-inputgroup-addon bg-white">
          <i className='pi pi-search'></i>
        </span>
        <AutoComplete placeholder="Search" inputClassName='px-3' className='w-full' />
        <div className="max-w-[220px] w-full text-sm my-1 rounded-xl">
          <Dropdown
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.value)}
            options={categories}
            optionLabel="name"
            placeholder="Select a Category"
            valueTemplate={selectedCategoryTemplate}
            itemTemplate={categoryOptionTemplate}
            checkmark
            // dropdownIcon={(opts) => {
            //   return opts.iconProps['data-pr-overlay-visible'] ? <ChevronRightIcon {...opts.iconProps} /> : <ChevronDownIcon {...opts.iconProps} />;
            // }}
            className="w-full bg-gray-200 p-dropdown-custom"
          />

        </div>
        <div className="h-full">
          <Button className='h-full text-white text-[20px] px-3 bg-blue-950'>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div >
  );

}

export default SearchBox;
