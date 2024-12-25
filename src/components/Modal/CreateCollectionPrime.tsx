import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import EmojiPicker from "emoji-picker-react";

interface CreateCollectionPrimeProps {
  onClose: () => void;
}

const CreateCollectionPrime: React.FC<CreateCollectionPrimeProps> = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [privacy, setPrivacy] = useState(null);
  const [emoji, setEmoji] = useState(null);
  const [isEmojiPickerVisible, setIsEmojiPickerVisible] = useState(false);

  const privacyOptions = [
    { label: "🔗 Shareable", value: "Shareable" },
    { label: "🔒 Private ", value: "Private" },
  ];

  const handleEmojiSelect = (emojiObject: any) => {
    setEmoji(emojiObject.emoji);
    setIsEmojiPickerVisible(false);
  };

  const isFormValid = title && privacy && emoji;

  return (
    <div className="max-w-full mx-auto bg-white rounded-lg">
      <div className="flex items-center justify-between mb-6 pb-5 border-b">
        <h2 className="text-3xl font-normal text-gray-800">Edit Collection</h2>
        <span
          className="text-gray-400 text-xl cursor-pointer"
          onClick={onClose}
        >
          ✕
        </span>
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Title
        </label>
        <div className="flex gap-4 items-center">
          <InputText
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Collection Name..."
            className="w-full p-2 border bg-[#f3f4f6] border-gray-300 rounded-[50px]"
          />
          {emoji ? (
            <div className="relative flex items-center">
              <span className="text-4xl">{emoji}</span>
              <span
                className="absolute top-0 right-0 text-red-500 cursor-pointer"
                onClick={() => setEmoji(null)}
              >
                ✕
              </span>
            </div>
          ) : (
            <button
              onClick={() => setIsEmojiPickerVisible(!isEmojiPickerVisible)}
              className="text-blue-500 underline"
            >
              Add Emoji
            </button>
          )}
        </div>
        {isEmojiPickerVisible && (
          <div className="absolute z-10 mt-2 ">
            <EmojiPicker onEmojiClick={handleEmojiSelect} />
          </div>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Description (optional)
        </label>
        <InputTextarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="A space for discussing latest tech insights..."
          rows={5}
          className="w-full p-2 border bg-[#f3f4f6] border-gray-300 rounded-md"
        />
      </div>

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
          placeholder="Select Privacy"
        />
      </div>

      <div className="flex justify-end">
        <Button
          label="Update"
          onClick={() => alert("Collection Updated")}
          className="p-button-primary px-6 py-3 bg-blue-500 text-white"
          disabled={!isFormValid}
        />
      </div>
    </div>
  );
};

export default CreateCollectionPrime;
