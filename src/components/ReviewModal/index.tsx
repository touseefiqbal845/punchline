import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

const ReviewModal = ({
  book,
  title,
  author,
  onClose
}: {
  book: string;
  title: string;
  author: string;
  onClose: () => void;
}) => {
  const [rate, setRate] = useState<number | null>(0);
  const [isClosing, setIsClosing] = useState(false);
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      triggerClose();
    }
  };
  const triggerClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
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
            <p className="text-xl">Review this Item</p>
            <IoMdClose
              className="cursor-pointer text-gray-500 hover:text-gray-700"
              size={24}
              onClick={triggerClose}
            />
          </div>
        </div>
        <hr className="border-t border-gray-200 w-full" />
        <div className="p-6 flex flex-col gap-4">
          <div className="flex">
            <div className="w-[150px]">
              {book && <Image src={book} alt={title} fill />}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xl">The Art of Reading Minds</p>
              <p className="text-gray-500">
                By <strong>Ray Dailo</strong>
              </p>
            </div>
          </div>
          <hr className="border-t border-gray-200 w-full" />
          <div className="p-4 justify-center bg-[#e7f4ff] rounded-md">
            <p className="items-center">
              To help us improve this item, please leave a reason and a comment
              for your rating
            </p>
          </div>
          <div className="flex gap-1">
            Your rating <strong className="text-red-400">*</strong>
          </div>
          <Rating
            name="simple-controlled"
            value={rate}
            onChange={(event, newValue) => {
              setRate(newValue);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <div className="flex gap-1">
            Main reason for your rating{' '}
            <strong className="text-red-400">*</strong>
          </div>
          <div className="relative inline-block w-full">
            <select className="block w-full px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 appearance-none">
              <option value="" disabled>
                -- Select --
              </option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <div className="flex gap-1">
            Comments <p className="text-gray-600 text-md">(optional)</p>
          </div>
          <textarea
            className="mb-1 block w-full h-24 px-3 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            placeholder="Please describe the reason for your rating.."
          ></textarea>
          <p className="text-sm">
            Your rating will be <strong>publicly visible</strong>; comments are
            private.
          </p>
        </div>
        <hr className="border-t border-gray-200 w-full" />
        <div className="flex justify-end p-6 space-x-3">
          <button
            className="p-2 px-4 bg-gray-100 rounded-md"
            onClick={triggerClose}
          >
            Cancel
          </button>
          <button className="p-2 px-4 bg-sky-500 text-white rounded-md">
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
