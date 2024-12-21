"use client";

import type { FC } from "react";
import { useState } from "react";

import { FaArrowRight } from "react-icons/fa6";
import { LuChevronsUpDown } from "react-icons/lu";

import { Button } from "primereact/button";
import { AutoComplete } from "primereact/autocomplete";
import { Dropdown } from "primereact/dropdown";

import { category, categories } from "@/constants/index";

import "@/styles/custom.scss";
//import { CiSearch } from "react-icons/ci";

interface Props {
  className?: string;
}

const SearchBox: FC<Props> = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  // Dummy suggestions for the search field
  const suggestions = [
    { label: "Alberto" },
    { label: "Ruka" },
    { label: "BenchMark" },
    { label: "Artificial Intelligence" },
    { label: "Latest version of super comuter" },
    { label: "Fig" },
    { label: "Grape" },
    { label: "Honeydew" },
    { label: "Indian Fig" },
    { label: "Jackfruit" },
    // Add more suggestions if needed
  ];

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
    const isSelected = selectedCategory === option.value;

    return (
      <div className="w-full flex flex-row justify-between items-center gap-2">
        <div className="flex flex-row justify-center items-center gap-2">
          {option.icon}
          <div>{option.name}</div>
        </div>
        {isSelected && <i className="pi pi-check text-blue-600" />}
      </div>
    );
  };

  return (
    <div className="md:min-w-[380px] lg:min-w-[500px] xl:min-w-[800px] w-full h-full flex flex-row justify-center">
      <div className="w-full h-full p-inputgroup flex flex-row justify-center border-[1px] bg-gray-100 border-blue-950 rounded-lg">
        <span className="p-inputgroup-addon bg-gray-100">
          <i className="pi pi-search"></i>
        </span>
        <AutoComplete
          value={searchValue}
          onChange={(e) => setSearchValue(e.value)}
          placeholder="Search"
          inputClassName="px-3 bg-gray-100"
          className="w-full"
          suggestions={suggestions} // Provide the suggestions prop
          field="label" // Ensure this field is correctly mapped to the label of the suggestions
          completeMethod={(e) => {
            // Filter the suggestions based on the search query
            e.query = e.query || "";
            setSearchValue(e.query); // Optional: Update the search value when the user types
          }}
          dropdown
          dropdownIcon={<LuChevronsUpDown />}
          panelClassName="p-dropdown-custom"
          itemTemplate={(item) => (
            <div>{item.label}</div> // Customize how each suggestion item is displayed
          )}
        />

        <div className="w-auto w-flex flex-row justify-end text-sm my-1 rounded-xl">
          <Dropdown
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.value)}
            options={categories}
            optionLabel="name"
            placeholder="Select a Category"
            valueTemplate={selectedCategoryTemplate}
            itemTemplate={categoryOptionTemplate}
            // checkmark
            dropdownIcon={<LuChevronsUpDown />}
            collapseIcon={<LuChevronsUpDown />}
            className="w-full h-full bg-white p-dropdown-custom"
            panelClassName="p-dropdown-custom"
          />
        </div>
        <div className="h-full">
          <Button className="h-full text-white text-[20px] px-3 bg-blue-950">
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
