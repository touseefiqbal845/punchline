import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { DataTable } from "primereact/datatable";
import { Column } from 'primereact/column';
import { ProgressBar } from 'primereact/progressbar';
import { TieredMenu } from "primereact/tieredmenu";
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';

import { format as DateFormat } from 'date-fns';


import { TeamMember, TeamMembers } from '@/constants/account';

const TeamTable = () => {
  const [Team, setTeam] = useState<TeamMember[]>([]);
  const [selectedMembers, setSelectedMembers] = useState<TeamMember[] | null>(null);
  const bulk_actions: MenuItem[] = [
    {
      label: "Edit"
    },
    {
      label: "Delete"
    },
    {
      label: "Resend Invitation"
    }
  ];
  const bulk_menu = useRef<TieredMenu>(null);
  const [isBulk, setIsBulk] = useState(false);

  const handleClickBulk = (e: any) => {
    bulk_menu.current?.toggle(e);
    setIsBulk(!isBulk);
  }

  const accountBodyTemplate = (rowData: any) => {
    return (
      <div className="w-full flex flex-row justify-center items-center gap-2">
        <Image
          src={rowData.name.url || "/assets/LOGO.png"}
          alt="Avatar"
          width={40}
          height={40}
        />
        <div className="w-full flex flex-col">
          <span>{rowData.name.username}</span>
          <span>{rowData.name.email}</span>
        </div>
      </div>
    );
  };

  const statusBodyTemplate = (rowData: any) => {
    return (
      <span className={`p-2 rounded-full
      ${rowData.status === 'Accepted' ? 'bg-[#DFFAEB] text-[#597F6B]' :
          (rowData.status === 'Pending' ? 'bg-[#FAF1C7] text-[#8C784E]' :
            'bg-[#FBE2E2] text-[#A17A74]')}`
      }>
        {rowData.status}
      </span>
    );
  };

  const lastActivityBodyTemplate = (rowData: any) => {
    const formattedDate = DateFormat(rowData.last_active, 'MMMM dd, yyyy');

    return (
      <span>
        {formattedDate}
      </span>
    );
  };

  const usageBodyTemplate = (rowData: any) => {
    const value = rowData.usage.used / rowData.usage.total * 100;

    const valueTemplate = (value: any) => {
      return (
        <React.Fragment>
        </React.Fragment>
      );
    };

    return (
      <span>
        <div className='w-full text-right'>{rowData.usage.used}/{rowData.usage.total}</div>
        <ProgressBar
          className='h-[12px] min-w-[200px]'
          value={value}
          displayValueTemplate={valueTemplate}
        ></ProgressBar>
      </span>
    );
  }

  const actionBodyTemplate = (rowData: any) => {
    const [isAction, setIsAction] = useState(false);

    const handleClickBulk = (e: any) => {
      bulk_menu.current?.toggle(e);
      setIsAction(!isAction);
    }

    return (
      <span>
        <TieredMenu model={bulk_actions} popup ref={bulk_menu} id="menu" />
        <Button
          label="Manage"
          iconPos='right'
          icon={`pi ${isAction ? 'pi-angle-up' : 'pi-angle-down'}`}
          onClick={(e) => handleClickBulk(e)}
          className='font-normal p-3 gap-4 border-[1px] focus:ring-0'
        />
      </span>
    );
  }

  useEffect(() => {
    setTeam(TeamMembers);
  }, []);

  return (
    <DataTable
      value={Team}
      selectionMode={'multiple'}
      selection={selectedMembers!}
      onSelectionChange={(e: any) => setSelectedMembers(e.value)}
      dataKey="id"
      tableStyle={{ minWidth: '50rem' }}
      className='w-full p-checkbox-support'
    >
      <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
      <Column field="name" header="NAME" body={accountBodyTemplate}></Column>
      <Column field="status" header="STATUS" body={statusBodyTemplate}></Column>
      <Column field="last_active" header="LAST ACTIVE" body={lastActivityBodyTemplate}></Column>
      <Column field="usage" header="USAGE" body={usageBodyTemplate}></Column>
      <Column field="actions" header="ACTIONS" body={actionBodyTemplate}></Column>
    </DataTable>
  );
};

export default TeamTable;
