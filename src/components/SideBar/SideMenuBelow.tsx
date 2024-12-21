"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PanelMenu } from "primereact/panelmenu";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import { SidemenuItems ,SidemenuItemsBelow} from "@/constants/menuItems"; // Adjust import if needed
import CreateCollectionPrime from "../Modal/CreateCollectionPrime"; // Import the modal content
import Modal from "../Modal/Modal"

interface Props {
  className?: string;
  ishidden?: boolean;
  mode?: string;
}

// Item Renderer for the side menu
const itemRenderer = (
  item: any,
  options: any,
  ishidden: boolean,
  onPlusClick: () => void
) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (!item.items) {
      e.preventDefault();
      router.push(item.href);
    } else {
      options.onClick(e);
    }
  };

  return (
    <div onClick={handleClick}>
      <div className="flex flex-row justify-between items-center px-3 active:bg-[#A5ACE9] rounded-[30px]">
        <div
          className={`flex flex-row items-center mx-2 py-2 gap-3 overflow-clip ${
            !item.icon && "border-l-2 pl-2"
          }`}
        >
          {item.icon && item.icon}
          <motion.span
            className={`text-nowrap ${item.items && "font-semibold"}`}
            animate={{ opacity: ishidden ? 0 : 1 }}
            initial={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {item.label}
          </motion.span>
        </div>
        <div className="flex items-center gap-2">
          {item.label === "Collections" && !ishidden && (
            <FaPlus onClick={onPlusClick} />
          )}
          {item.group && !ishidden && <FaChevronDown />}
        </div>
      </div>
    </div>
  );
};

// SideMenu Component
const SideMenuBelow: React.FC<Props> = ({ ishidden = false, mode = "light" }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlePlusClick = () => {
    setIsModalVisible(true); // Show modal when the plus icon is clicked
  };

  const handleModalClose = () => {
    setIsModalVisible(false); // Close the modal
  };

  // Update SidemenuItems to return the template for each item
  const updatedMenuItems = SidemenuItemsBelow(ishidden).map((item) => {
    return {
      ...item,
      template: (options: any) =>
        itemRenderer(item, options, ishidden, handlePlusClick),
    };
  });

  return (
    <div className="w-full flex justify-center">
      <PanelMenu
        model={updatedMenuItems}
        className="w-full p-panel-menu-custom md:w-20rem"
      />
      {/* Modal Component that triggers when 'isModalVisible' is true */}
      <Modal isVisible={isModalVisible} onClose={handleModalClose}>
        <CreateCollectionPrime />
      </Modal>
    </div>
  );
};

export default SideMenuBelow;
