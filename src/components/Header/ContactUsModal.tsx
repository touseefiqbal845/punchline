'use client';

import React, { useState, useRef, useEffect } from "react";
import "primereact/resources/themes/lara-light-blue/theme.css"; // PrimeReact theme
import "primereact/resources/primereact.min.css"; // PrimeReact core
import "primeicons/primeicons.css"; // PrimeReact icons
import "tailwindcss/tailwind.css"; // Tailwind

import Image from "next/image";

import { FileUpload, ItemTemplateOptions } from 'primereact/fileupload';
import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox';
import { Panel } from 'primereact/panel';
import { IoMdCloudUpload } from "react-icons/io";

import '@/styles/custom.scss';

interface ContactUsModalProps {
  visible: boolean;
  onHide: () => void;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ visible = false, onHide }) => {
  const fileUploadRefs = useRef<{ [key: string]: FileUpload | null }>({});
  const refDebug = useRef<Panel>(null);
  const refScreenShot = useRef<Panel>(null);
  const refFileUpload = useRef<Panel>(null);
  const [message, setMessage] = useState<string>("");
  const [debugInfo] = useState<string>(`
    Using Beta: No
    Screen Resolution: 1920×1200
    Detected device type: normal
    User Agent string: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:124.0)
  `);
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(visible);

  const onIngredientsChange = (e: CheckboxChangeEvent) => {
    let _ingredients = [...ingredients];

    if (e.checked)
      _ingredients.push(e.value);
    else
      _ingredients.splice(_ingredients.indexOf(e.value), 1);

    setIngredients(_ingredients);

    if (e.value == "Send debug information together with my message.")
      refDebug.current?.toggle(undefined);
    else if (e.value == "Upload Screenshot.")
      refScreenShot.current?.toggle(undefined);
    else if (e.value == "Upload File.")
      refFileUpload.current?.toggle(undefined);
  }

  const handleSend = () => {
    console.log("Message Sent:", message);
    onHide();
  };

  const DebugHeader = (name: any) => {
    return (
      <div className={`flex flex-row justify-start gap-2 p-4 ${ingredients.includes(name) ? 'rounded-t-xl' : 'rounded-xl'} bg-white`}>
        <Checkbox
          inputId={name}
          value={name}
          onChange={onIngredientsChange}
          checked={ingredients.includes(name)}
          className="p-checkbox-support"
        />
        <label htmlFor={name} className="ml-2">{name}</label>
      </div>
    );
  }

  const itemTemplate = (inFile: object, props: ItemTemplateOptions) => {
    const file = inFile as File;
    return (
      <div className="w-full h-full flex items-center justify-center overflow-auto">
        <div className="max-h-[136px] w-full h-full flex justify-center items-center">
          <Image
            src={URL.createObjectURL(file)}
            alt="image"
            width={200}
            height={200}
          />
        </div>
      </div>
    );
  };

  const handleEmptyTemplateClick = (key: string) => {
    // Get the specific file input using its key
    const inputElement = fileUploadRefs.current[key]?.getInput();
    if (inputElement) {
      inputElement.click(); // Trigger the file input click
    }
  };

  const emptyTemplate = (key: string) => {
    return (
      <button
        className="w-full h-full flex flex-col justify-center items-center"
        onClick={() => handleEmptyTemplateClick(key)}
      >
        <span className="text-lg p-text-secondary">
          Image Preview
        </span>
        <span className="text-[5em]">
          <IoMdCloudUpload />
        </span>
        <span className="text-lg p-text-secondary">
          Choose a file to upload
        </span>
      </button>
    );
  };

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  return (
    <div className="h-full fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      {isVisible &&
        <div className=" bg-white rounded-lg shadow-lg w-3/4 min-w-[600px] max-w-lg pt-4">
          <div className="py-3 border-b border-gray-300 flex justify-between items-center mx-10">
            <h2 className="text-2xl font-bold">Contact us</h2>
            <button onClick={onHide} className="text-gray-600 hover:text-gray-800">
              ✕
            </button>
          </div>
          <div className="flex flex-col gap-4 px-10">
            <div>
              <label className="block text-gray-700 text-sm font-semibold pt-4">
                Your Message:
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border-gray-300 rounded-md p-2 text-gray-700 border-[1px]"
                placeholder="Please write your message in English and allow us up to 3 business days for a response."
                rows={4}
              />
            </div>

            <Panel
              ref={refDebug}
              headerTemplate={DebugHeader("Send debug information together with my message.")}
              className="rounded-xl border-2 bg-gray-100 panel-body-debug"
              toggleable
              collapsed
            >
              <p className="m-0 bg-transparent">
                {debugInfo}
              </p>
            </Panel>

            <Panel
              ref={refScreenShot}
              headerTemplate={DebugHeader("Upload Screenshot.")}
              className="rounded-xl border-2 panel-body-upload"
              toggleable
              collapsed
            >
              <FileUpload
                ref={(el) => {
                  fileUploadRefs.current["screenshot"] = el; // Assign the ref
                }}
                mode="advanced"
                name="screenshot"
                accept="image/*"
                className="mt-2"
                chooseLabel="Upload Screenshot"
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate("screenshot")}
                headerClassName="hidden"
                customUpload
              />
            </Panel>

            <Panel
              ref={refFileUpload}
              headerTemplate={DebugHeader("Upload File.")}
              className="rounded-xl border-2 panel-body-upload"
              toggleable
              collapsed
            >
              <FileUpload
                ref={(el) => {
                  fileUploadRefs.current["files"] = el; // Assign the ref
                }}
                mode="advanced"
                name="files"
                accept="image/*"
                className="mt-2"
                chooseLabel="Upload files"
                itemTemplate={itemTemplate}
                emptyTemplate={emptyTemplate("files")}
                headerClassName="hidden"
                customUpload
              />
            </Panel>
          </div>

          <div className="flex flex-row justify-between items-center mt-4 bg-gray-300 px-10 py-4 rounded-b-lg ">
            <a href="/" className="underline text-blue-500">
              Check service status
            </a>
            <div className="flex justify-end gap-4 items-center">
              <button
                onClick={handleSend}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Send
              </button>
              <button
                onClick={onHide}
                className="bg-white hover:bg-gray-400 text-blue-500 px-4 py-2 rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default ContactUsModal;
