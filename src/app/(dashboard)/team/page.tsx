'use client';

import React, { useEffect, useState, useRef } from 'react';

import { Button } from 'primereact/button';
import { Dropdown } from "primereact/dropdown";
import { TieredMenu } from "primereact/tieredmenu";
import { MenuItem } from 'primereact/menuitem';

import TeamTable from '@/components/TeamTable';
import AddTeamMemberModal from '@/components/TeamTable/AddTeamMemberModal';

const TeamPage: React.FC = () => {

  const States = ["All Status", "Accepted", "Pending", "Rejected"];
  const sortTypes = ["Sort by: Name A-Z", "Sort by: Email A-Z", "Sort by: Last Active"];
  const bulk_actions: MenuItem[] = [
    {
      label: "Delete"
    },
    {
      label: "Resend Invitation"
    }
  ];

  const [status, setStatus] = useState(States[0]);
  const [sortType, setSortType] = useState(sortTypes[0]);
  const bulk_menu = useRef<TieredMenu>(null);
  const [isBulk, setIsBulk] = useState(false);
  const [AddTeamMemberModalVisible, setAddTeamMemberModalVisible] = useState<boolean>(false);

  const handleClickBulk = (e: any) => {
    bulk_menu.current?.toggle(e);
    setIsBulk(!isBulk);
  }

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full flex flex-row justify-between items-center gap-2 mb-4">
        <div className="flex flex-row items-center gap-2">
          <span className="text-2xl font-bold ">Team Members</span>
        </div>
        <button
          className="bg-[#1E222D] text-white px-4 py-2 rounded-md hover:bg-gray-600"
          onClick={() => setAddTeamMemberModalVisible(true)}
        >
          <span className='underline' >Add Member</span>
        </button>
      </div>

      <div className="w-full flex flex-row justify-between items-center gap-2 mb-4">
        <div className="flex flex-row justify-center gap-4">
          <Dropdown
            value={status}
            onChange={(e) => setStatus(e.value)}
            options={States}
            optionLabel="name"
            placeholder="Select Content Type"
            className="w-full border-[1px]"
          />
          <Dropdown
            value={sortType}
            onChange={(e) => setSortType(e.value)}
            options={sortTypes}
            optionLabel="name"
            placeholder="Select Content Type"
            className="w-full border-[1px]"
          />
        </div>
        <TieredMenu model={bulk_actions} popup ref={bulk_menu} id="menu" />
        <Button
          label="Bulk Actions"
          iconPos='right'
          icon={`pi ${isBulk ? 'pi-angle-up' : 'pi-angle-down'}`}
          onClick={(e) => handleClickBulk(e)}
          className='font-normal p-3 gap-4 border-[1px] focus:ring-0'
        />
      </div>

      <div className="w-full flex flex-row justify-between items-center gap-2 mb-4">
        <TeamTable />
      </div>

      {AddTeamMemberModalVisible && <AddTeamMemberModal visible={AddTeamMemberModalVisible} onHide={() => setAddTeamMemberModalVisible(false)} />}
    </div>
  );
};

export default TeamPage;
