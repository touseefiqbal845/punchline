"use client";

import type { FC } from "react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { OverlayPanel } from "primereact/overlaypanel";

import { MdOutlineAccountCircle } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { RiGalleryView2 } from "react-icons/ri";
import { TbWriting } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

import ContactUsModal from "./ContactUsModal";

import Icon from "@/molecules/Icon";
import "@/styles/custom.scss";
import RequestNewModal from "./RequestNewModal";

interface AvatarProps {
  className?: string;
  mode?: string;
}

// // New RequestNewModal Component
// const RequestNewModal: FC<{ visible: boolean; onHide: () => void }> = ({
//   visible,
//   onHide,
// }) => (
//   <div
//     className={`fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 ${
//       visible ? "block" : "hidden"
//     }`}
//   >
//     <div className="bg-white rounded-lg shadow-lg w-96 p-5">
//       <h2 className="text-xl font-semibold mb-4">Request New Content</h2>
//       <p className="text-sm text-gray-700 mb-4">
//         Submit your request for new content here.
//       </p>
//       <textarea
//         rows={4}
//         className="w-full p-2 border rounded-md mb-4 focus:outline-none"
//         placeholder="Describe your content request..."
//       />
//       <div className="flex justify-end gap-2">
//         <Button
//           label="Cancel"
//           className="p-button-secondary"
//           onClick={onHide}
//         />
//         <Button label="Submit" className="p-button-primary" onClick={onHide} />
//       </div>
//     </div>
//   </div>
// );

const Avatars: FC<AvatarProps> = ({ mode = "light" }) => {
  const router = useRouter();
  const op = useRef<OverlayPanel>(null);
  const [supportModalVisible, setSupportModalVisible] =
    useState<boolean>(false);
  const [RequestNewModalVisible, setRequestNewModalVisible] =
    useState<boolean>(false);

  const menuItems = [
    {
      icon: <Icon icon="preferences" size={16} />,
      href: "/preferences",
      label: "Preferences",
    },
    {
      icon: <Icon icon="account_details" size={16} />,
      href: "/account",
      label: "Account Details",
    },
    {
      icon: <MdOutlineAccountCircle />,
      href: "/billing",
      label: "Billing",
    },
    {
      icon: <IoMdLock />,
      href: "/security",
      label: "Sign In & Security",
    },
    {
      icon: <GoQuestion />,
      href: "/support",
      label: "Support",
    },
    {
      icon: <Icon icon="teams" size={16} />,
      href: "/team",
      label: "Team",
    },
    {
      icon: <RiGalleryView2 />,
      href: "/request_new_content",
      label: "Request New Content",
    },
    {
      icon: <TbWriting />,
      href: "/highlighters",
      label: "Highlighters",
    },
    {
      icon: <MdLogout />,
      isTopBorder: true,
      href: "/",
      label: "Logout",
    },
  ];

  const handleButtons = (href: string, label: string) => {
    if (label === "Support") {
      setSupportModalVisible(true);
      op.current?.hide(); // Hide the OverlayPanel
    } else if (label === "Request New Content") {
      setRequestNewModalVisible(true);
      op.current?.hide(); // Hide the OverlayPanel
    } else {
      router.push(href);
    }
  };

  return (
    <div className="flex justify-center items-center px-3 border-l-2">
      <Avatar
        label="AZ"
        className="cursor-pointer rounded-full bg-indigo-200 shadow-lg w-[40px] h-[40px]"
        shape="circle"
        onClick={(e) => op.current?.toggle(e)}
      />

      {/* Overlay Panel */}
      <OverlayPanel
        ref={op}
        className="w-[300px] shadow-lg rounded-md p-overlaypanel-content-avatar"
      >
        {/* User Info */}
        <div className="border-b pb-3 px-5">
          <div className="text-base font-semibold">Daniel Lopez</div>
          <div className="text-sm text-gray-500">daniellopez@gmail.com</div>
          <div className="mt-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md inline-block">
            Professional until Apr 30, 2024
          </div>
        </div>

        {/* Menu Items */}
        <ul>
          {menuItems.map((item, index) => (
            <Button
              className={`w-full hover:bg-gray-100 active:bg-gray-300 focus:ring-0 ${
                item.isTopBorder && " border-t py-4"
              }`}
              onClick={() => handleButtons(item.href, item.label)}
              key={index}
            >
              <li
                key={index}
                className="flex items-center gap-3 py-2 px-5 cursor-pointer "
              >
                {item.icon}
                <span className="text-sm">{item.label}</span>
              </li>
            </Button>
          ))}
        </ul>
        {/* Logout Section */}
        <div className="border-t pt-3 px-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">Download</span>
            <div className="flex space-x-2">
              <Button className="flex flex-row items-center gap-1 text-gray-600 focus:ring-0">
                <FaApple />
                <span className="text-sm">iOS</span>
              </Button>
              <Button className="flex flex-row items-center gap-1 text-lg text-gray-600 focus:ring-0">
                <FaAndroid />
                <span className="text-sm">Android</span>
              </Button>
            </div>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold">Connect</span>
            <div className="flex gap-2">
              <Button className="flex flex-row items-center p-1 bg-gray-200 hover:bg-gray-400 active:bg-gray-700 text-lg text-gray-600 focus:ring-0">
                <FaXTwitter />
              </Button>
              <Button className="flex flex-row items-center p-1 bg-gray-200 hover:bg-gray-400 active:bg-gray-700 text-lg text-gray-600 focus:ring-0">
                <FaDiscord />
              </Button>
              <Button className="flex flex-row items-center p-1 bg-gray-200 hover:bg-gray-400 active:bg-gray-700text-lg text-gray-600 focus:ring-0">
                <FaFacebook />
              </Button>
              <Button className="flex flex-row items-center p-1 bg-gray-200 hover:bg-gray-400 active:bg-gray-700 text-lg text-gray-600 focus:ring-0">
                <FaTelegram />
              </Button>
            </div>
          </div>
        </div>
      </OverlayPanel>

      {/* Modals */}
      {supportModalVisible && (
        <ContactUsModal
          visible={supportModalVisible}
          onHide={() => setSupportModalVisible(false)}
        />
      )}
      {RequestNewModalVisible && (
        <RequestNewModal
          visible={RequestNewModalVisible}
          onHide={() => setRequestNewModalVisible(false)}
        />
      )}
    </div>
  );
};

export default Avatars;
