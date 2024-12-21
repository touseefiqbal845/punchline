import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { LuScroll } from 'react-icons/lu';
import { FaArrowDownShortWide, FaArrowUpShortWide } from 'react-icons/fa6';
import { BiSad } from 'react-icons/bi';
import { LuBadgeHelp } from 'react-icons/lu';
import { FaCheckCircle } from 'react-icons/fa';

const FeedbackModal = ({ onClose }: { onClose: () => void }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState('');

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      triggerClose();
    }
  };

  const toggleOption = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleSubmit = () => {
    console.log('Feedback submitted:', { selectedOptions, feedback });
    triggerClose();
  };

  return (
    <div
      className={`fixed inset-[-100px] modal-animation bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ease-in-out ${
        isClosing ? 'opacity-0' : 'opacity-100'
      }`}
      onClick={handleBackdropClick}
    >
      <div className="bg-white w-[640px] rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out scale-95">
        <div className="p-6 pb-2">
          <div className="flex justify-between items-center mb-4">
            <p className="text-3xl">Help us improve</p>
            <IoMdClose
              className="cursor-pointer text-gray-500 hover:text-gray-700"
              size={24}
              onClick={triggerClose}
            />
          </div>
          <p className="text-gray-500">
            Provide additional feedback on this content. Select all that apply.
          </p>
        </div>
        <hr className="border-t border-gray-200 w-full" />
        <div className="grid grid-cols-2 gap-4 mb-4 p-4 px-6">
          {[
            { icon: <IoCloseCircleOutline />, text: 'Inaccurate' },
            { icon: <LuScroll />, text: 'Out of date' },
            { icon: <FaArrowDownShortWide />, text: 'Too short' },
            { icon: <FaArrowUpShortWide />, text: 'Too long' },
            { icon: <BiSad />, text: 'Harmful or offensive' },
            { icon: <LuBadgeHelp />, text: 'Not helpful' }
          ].map((option) => (
            <div
              key={option.text}
              className={`flex items-center justify-between gap-2 py-2 px-4 border rounded-md cursor-pointer transition-all ${
                selectedOptions.includes(option.text)
                  ? 'text-sky-500'
                  : 'text-gray-700'
              }`}
              onClick={() => toggleOption(option.text)}
            >
              <div className="flex items-center gap-2">
                {option.icon}
                <span className="text-sm">{option.text}</span>
              </div>
              {selectedOptions.includes(option.text) && <FaCheckCircle />}
            </div>
          ))}
        </div>
        <div className="mb-6 px-6">
          <label
            htmlFor="feedback"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            How can the content be improved?{' '}
            <span className="text-gray-400">(optional)</span>
          </label>
          <input
            id="feedback"
            className="w-full border rounded-full px-4 py-2 text-sm text-gray-700 bg-gray-100 focus:outline-none focus:border-blue-500 resize-none"
            placeholder="Your feedback..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></input>
        </div>
        <hr className="border-t border-gray-300 w-full" />
        <div className="flex justify-end gap-4 px-6 py-2 rounded-b-lg bg-gray-100">
          <button
            className="px-4 py-2 text-sm text-gray-700 bg-gray-100 border rounded-md hover:bg-gray-300"
            onClick={triggerClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 text-sm text-white bg-sky-500 rounded-md hover:bg-sky-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
