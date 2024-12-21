import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

const CreateCollectionPrime = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [privacy, setPrivacy] = useState("Shareable");

  const privacyOptions = [
    { label: "Shareable", value: "Shareable" },
    { label: "Private", value: "Private" },
  ];

  return (
    <div className="max-w-full mx-auto bg-white rounded-lg">
      {/* Header with Title and Emoji */}
      <div className="flex items-center justify-between mb-6 pb-5 border-b">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Create Collection
          </h2>
        </div>
        <div>
            <span className="text-gray-400 text-xl">X</span>
        </div>
      </div>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Title
        </label>
        <div className="flex gap-4">
          <InputText
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Collection Name.."
            className="w-full p-2 border bg-[#f3f4f6] border-gray-300 rounded-[50px]"
          />
          <span className="text-4xl text-yellow-500">😊</span>
        </div>
      </div>

      {/* Description Input */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Description
        </label>
        <InputTextarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="A space for discussing latest tech insights..."
          rows={5}
          className="w-full p-2 border bg-[#f3f4f6] border-gray-300 rounded-md"
        />
      </div>

      {/* Privacy Dropdown */}
      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Privacy
        </label>
        <Dropdown
          value={privacy}
          options={privacyOptions}
          onChange={(e) => setPrivacy(e.value)}
          optionLabel="label"
          className="w-full border border-gray-300 rounded-md"
        />
      </div>

      {/* Update Button */}
      <div className="flex justify-end">
        <Button
          label="Update"
          onClick={() => alert("Collection Updated")}
          className="p-button-primary px-6 py-3 bg-blue-500 text-white"
        />
      </div>
    </div>
  );
};

export default CreateCollectionPrime;
