import React, { useState, useRef, useEffect } from "react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "tailwindcss/tailwind.css";
import { Panel } from "primereact/panel";
import { Button } from "primereact/button";
import { IoChevronUp, IoChevronDown } from "react-icons/io5"; // Corrected impor

import { Dropdown } from "primereact/dropdown";

interface RequestNewModalProps {
  visible: boolean;
  onHide: () => void;
}

const RequestNewModal: React.FC<RequestNewModalProps> = ({
  visible = false,
  onHide,
}) => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [contentType, setContentType] = useState<string | null>(null);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(visible);

  const contentTypeOptions = [
    { label: "Books", value: "books" },
    { label: "Articles", value: "articles" },
    { label: "Videos", value: "videos" },
  ];

  const matchingRequests = [
    {
      title: "How to Talk to Anyone",
      author: "Andy Cook",
      category: "Books",
      votes: 3,
      imageUrl: "https://via.placeholder.com/50", // Replace with actual image
    },
    {
      title: "How to Talk to Anyone",
      author: "Andy Cook",
      category: "Books",
      votes: 3,
      imageUrl: "https://via.placeholder.com/50", // Replace with actual image
    },
  ];

  const handleSubmit = () => {
    if (!isConfirmed) {
      alert("Please confirm your request is not already listed.");
      return;
    }
    console.log("Request Submitted:", { title, author, url, contentType });
    onHide();
  };

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <div className="h-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      {isVisible && (
        <div className="bg-white rounded-lg shadow-lg w-3/4 min-w-[600px] max-w-lg ">
          <div className="py-3 border-b border-gray-300 flex justify-between items-center ">
            <h2 className="text-2xl font-bold mx-10">Request New Content</h2>
            <button
              onClick={onHide}
              className="text-gray-600 hover:text-gray-800 mx-10"
            >
              ✕
            </button>
          </div>

          <div className="flex flex-col gap-4 px-10 py-4 h-[80vh] overflow-auto">
            <div>
              <label className="block text-gray-700 text-sm font-semibold">
                Content Type:
              </label>
              <Dropdown
                value={contentType}
                options={contentTypeOptions}
                onChange={(e) => setContentType(e.value)}
                placeholder="Select Content Type"
                className="w-full border border-gray-400 mt-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold pb-2">
                Title:
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2 text-gray-700 border-[1px]"
                placeholder="Enter the title"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold pb-2">
                Author (Optional):
              </label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2 text-gray-700 border-[1px]"
                placeholder="Enter the author's name"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-semibold pb-2">
                URL
              </label>
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2 text-gray-700 border-[1px]"
                placeholder="Enter the URL"
              />
            </div>

            <Panel header="Matching Requests" className="rounded-lg shadow-lg">
              <div className="space-y-4">
                {matchingRequests.map((request, index) => (
                  <div
                    key={index}
                    className="flex items-center border rounded-lg p-3 bg-white hover:bg-gray-50"
                  >
                    <img
                      src={request.imageUrl}
                      alt="Book Thumbnail"
                      className="w-12 h-12 rounded object-cover"
                    />
                    <div className="ml-4 flex-1">
                      <p className="font-bold text-gray-800">{request.title}</p>
                      <p className="text-gray-600 text-sm">{request.author}</p>
                      <p className="text-gray-500 text-xs flex items-center">
                        <span className="material-icons text-base mr-1">
                          book
                        </span>
                        {request.category}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        icon={<IoChevronUp />}
                        className="p-button-text p-button-rounded p-button-sm text-gray-600 hover:text-gray-800"
                      />
                      <span className="text-gray-800 font-semibold">
                        {request.votes}
                      </span>
                      <Button
                        icon={<IoChevronDown />}
                        className="p-button-text p-button-rounded p-button-sm text-gray-600 hover:text-gray-800"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </div>

          <div className="flex justify-between gap-4 px-10 py-2 border-t border-gray-300">
            <div className="flex items-center gap-2 ">
              <input
                type="checkbox"
                checked={isConfirmed}
                onChange={(e) => setIsConfirmed(e.target.checked)}
              />
              <label className="text-sm text-gray-600">
                I confirm my request is not in the list above.
              </label>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestNewModal;
