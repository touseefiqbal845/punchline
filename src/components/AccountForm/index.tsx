'use client';

import React, { useState, useRef, useEffect } from "react";
import "primereact/resources/themes/lara-light-blue/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css"; // PrimeReact core
import "primeicons/primeicons.css"; // PrimeReact icons
import "tailwindcss/tailwind.css"; // Tailwind

import { InputText } from 'primereact/inputtext';
import { Dropdown } from "primereact/dropdown";
import { Image } from "primereact/image";
import { FileUpload } from "primereact/fileupload";

import { RxAvatar } from "react-icons/rx";



import {
  GetCountries,
  GetState,
} from "react-country-state-city";

import '@/styles/custom.scss';

interface Props {
  className?: string;
}

const AccountForm: React.FC<Props> = ({ }) => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [countriesList, setCountriesList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [avatar, setAvatar] = useState<string | null>(null);

  const changeCountry = (new_country: any) => {
    setCountry(new_country);
    GetState(new_country.id).then((result: any) => {
      setStateList(result);
    });
  }

  const onUpload = (e: any) => {
    const file = e.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setAvatar(reader.result as string);
    };

    reader.readAsDataURL(file);
  };


  useEffect(() => {
    GetCountries().then((result: any) => {
      setCountriesList(result);
    });
  }, []);

  return (
    <div className="w-full p-2">
      <label
        className="mb-[6px] block text-[16px]  font-semibold text-[#252525]"
        htmlFor="first_name"
      >
        First Name
      </label>
      <div className="relative pb-[10px]">
        <InputText
          className="peer block w-full border border-[#E3E3E3] py-2 pl-2 rounded-[10px]"
          id="first_name"
          name="first_name"
          placeholder="First Name"
          required
          validateOnly
        />
      </div>

      <label
        className="mb-[6px] block text-[16px]  font-semibold text-[#252525]"
        htmlFor="last_name"
      >
        Last Name
      </label>
      <div className="relative pb-[10px]">
        <InputText
          className="peer block w-full border border-[#E3E3E3] py-2 pl-2 rounded-[10px]"
          id="last_name"
          name="last_name"
          placeholder="Last Name"
          required
          validateOnly
        />
      </div>

      <label
        className="mb-[6px] block text-[16px]  font-semibold text-[#252525]"
        htmlFor="user_name"
      >
        Username
      </label>
      <div className="relative pb-[10px]">
        <InputText
          className="peer block w-full border border-[#E3E3E3] py-2 pl-2 rounded-[10px]"
          id="user_name"
          name="user_name"
          placeholder="UserABC"
          required
          validateOnly
        />
      </div>

      <label
        className="mb-[6px] block text-[16px]  font-semibold text-[#252525]"
        htmlFor="email"
      >
        email
      </label>
      <div className="relative pb-[10px]">
        <InputText
          className="peer block w-full border border-[#E3E3E3] py-2 pl-2 rounded-[10px]"
          id="user_name"
          name="user_name"
          placeholder="UserABC"
          type="email"
          required
          validateOnly
        />
      </div>

      <label
        className="mb-[6px] block text-[16px]  font-semibold text-[#252525]"
        htmlFor="account_id"
      >
        AccountID
      </label>
      <div className="relative pb-[10px]">
        <InputText
          className="peer block w-full border border-[#E3E3E3] py-2 pl-2 rounded-[10px]"
          id="account_id"
          name="account_id"
          placeholder="1234567899"
          type="number"
          required
          validateOnly
        />
      </div>

      <label
        className="mb-[6px] block text-[16px]  font-semibold text-[#252525]"
        htmlFor="country"
      >
        Country
      </label>
      <div className="relative pb-[10px]">
        <Dropdown
          value={country}
          onChange={(e) => changeCountry(e.value)}
          options={countriesList}
          optionLabel="name"
          placeholder="Select Content Type"
          className="w-full border-[1px]"
        />
      </div>

      <label
        className="mb-[6px] block text-[16px]  font-semibold text-[#252525]"
        htmlFor="state"
      >
        State
      </label>
      <div className="relative pb-[10px]">
        <Dropdown
          value={state}
          onChange={(e) => setState(e.value)}
          options={stateList}
          optionLabel="name"
          placeholder="Select Content Type"
          className="w-full border-[1px]"
        />
      </div>



      <div className='w-full flex flex-col justify-center items-start gap-2 mb-10 p-5 border rounded-lg shadow-md'>
        <h2 className="text-lg font-semibold mb-2">Avatar</h2>
        <div className="w-full flex flex-row justify-center items-center gap-2">
          <Image
            src={avatar || "/assets/LOGO.png"}
            alt="Avatar"
            width="100px"
            height="100px"
          />
          <div className="w-full flex flex-col">
            <span>Recommended dimensions of 100x100</span>
            {/* <span className="font-semibold">Upload Avatar</span> */}
            <FileUpload
              name="avatar"
              auto
              customUpload
              uploadHandler={onUpload}
              mode="basic"
              accept="image/*"
              chooseLabel="Upload Avatar"
              className="mt-2"
              chooseOptions={{
                label: 'Browse',
                icon: 'none',
                className: 'bg-white text-black text-left w-full p-0 mx-[-8px] focus:ring-0'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
