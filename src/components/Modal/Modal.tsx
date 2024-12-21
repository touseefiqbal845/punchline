// src/components/Modal/Modal.tsx
import React from "react";

const Modal: React.FC<{
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[30%]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
