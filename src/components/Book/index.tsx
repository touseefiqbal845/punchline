import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import IconButton from '../IconButton';
import { GiSpellBook } from 'react-icons/gi';
import { HiMiniHandThumbUp } from 'react-icons/hi2';
import { formatNumber } from '@/utils/func';
import { FaStar } from 'react-icons/fa';
import { Tooltip } from '@nextui-org/react';
import { FiCopy } from 'react-icons/fi';
import { TbRectangleVertical } from 'react-icons/tb';
import { GrCheckmark } from 'react-icons/gr';

const Book = ({ book }: { book: any }) => {
  return (
    <div className="rounded-xl shadow-md justify-between flex flex-col min-w-[200px]">
      <div className="flex flex-col">
        <div className="flex justify-between items-center w-full bg-gray-200 p-2 pr-0.5 rounded-t-md">
          <p className="text-gray-600 text-xs truncate">{book.title}</p>
          <IconButton
            icon={<HiOutlineDotsHorizontal />}
            comment={''}
            w={15}
            h={30}
            fontsize={15}
          />
        </div>
        <div className="relative group">
          <div className="transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
            <div className="p-2 h-[220px]"></div>
            <div className="flex flex-col p-2.5 min-h-[165px]">
              <p className="text-lg font-bold leading-tight min-h-[45px]">
                {book.subtitle}
              </p>
              <p className="text-gray-500 text-sm italic mt-0.5">
                {book.author}
              </p>
              <p className="text-gray-700 text-sm mt-3">{book.content}</p>
            </div>
          </div>

          <div className="p-2 py-3 absolute inset-0 overflow-hidden">
            <div
              className="h-0 transition-all duration-300 ease-in-out group-hover:h-full"
              style={{ overflowY: 'hidden' }}
            >
              <p className="text-lg font-bold">{book.subtitle}</p>
              <div className="flex text-sm justify-between p-1 mt-1">
                <div className="flex items-center gap-1">
                  <FiCopy />
                  <Tooltip
                    content="Translated From Chinese"
                    classNames={{
                      content: [
                        'py-1 px-3 shadow-xl',
                        'text-white bg-gray-800 rounded-lg'
                      ]
                    }}
                  >
                    Chinese
                  </Tooltip>
                </div>
                <div className="flex items-center gap-1">
                  <TbRectangleVertical />
                  <Tooltip
                    content="71,423 enrolled"
                    classNames={{
                      content: [
                        'py-1 px-3 shadow-xl',
                        'text-white bg-gray-800 rounded-lg'
                      ]
                    }}
                  >
                    71,423 enrolled
                  </Tooltip>
                </div>
              </div>
              <p className="italic text-[16px] text-gray-500 mt-1 mx-1">
                By {book.author}
              </p>
              <hr className="w-full mt-4" />
              <div className="flex flex-col gap-2 mt-3 mx-1">
                <p className="font-black">Big Ideas Explored</p>
                <div className="inline-flex mx-1 gap-2 justify-start">
                  <GrCheckmark className="text-sky-400 text-3xl -mt-1" />
                  <p className="text-sm">
                    Be respectful: Show respect for the other person's
                    opinions...
                  </p>
                </div>
                <div className="inline-flex mx-1 gap-2 justify-start">
                  <GrCheckmark className="text-sky-400 text-3xl -mt-1" />
                  <p className="text-sm">
                    Be a good listener: Let the other person do most of the
                    talking
                  </p>
                </div>
              </div>
              <div className="flex mt-4 px-1 justify-between">
                <IconButton
                  icon={<p>More Info</p>}
                  comment={''}
                  w={110}
                  h={35}
                  color="#fff"
                  hover="#eee"
                  fontsize={14}
                  border
                />
                <IconButton
                  icon={<p className="text-white">Listen</p>}
                  comment={''}
                  w={70}
                  h={35}
                  color="#50BAE8"
                  hover="#46a2c9"
                  fontsize={14}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[50px] border-t rounded-b-xl text-xs text-gray-600 items-center px-2 bg-[#F9F9F9] gap-1 justify-center">
        <IconButton
          icon={<GiSpellBook />}
          comment={'Content Type'}
          w={35}
          h={20}
          disabled
          isIconOnly
          fontsize={15}
          color={'#e0f3e0'}
          hover="#c6d4c6"
        />
        <Tooltip
          content="Listening Time"
          classNames={{
            content: [
              'py-2 px-4 shadow-xl',
              'text-white bg-gray-800 rounded-lg'
            ]
          }}
        >
          <p>{book.time}m</p>
        </Tooltip>
        <Tooltip
          content="Reactions"
          classNames={{
            content: [
              'py-2 px-4 shadow-xl',
              'text-white bg-gray-800 rounded-lg'
            ]
          }}
        >
          <div className="flex gap-1 items-center">
            <div className="flex rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-sm text-white w-5 h-5 items-center justify-center">
              <HiMiniHandThumbUp />
            </div>
            <p>{formatNumber(book.reactions)}</p>
          </div>
        </Tooltip>
        <Tooltip
          content="Ratings"
          classNames={{
            content: [
              'py-2 px-4 shadow-xl',
              'text-white bg-gray-800 rounded-lg'
            ]
          }}
        >
          <div className="flex items-center gap-1">
            <FaStar className="text-sky-400 text-lg" />
            {book.rating.toFixed(1)} ({book.ratings})
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Book;
