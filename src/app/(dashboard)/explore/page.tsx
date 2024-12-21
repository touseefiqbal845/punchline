'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { GiSpellBook } from 'react-icons/gi';
import { FaSun } from 'react-icons/fa6';
import { MdOutlineKeyboardVoice } from 'react-icons/md';
import { FaRegEnvelope } from 'react-icons/fa6';
import { CgFileDocument } from 'react-icons/cg';
import TrendingBooks from '@/components/TrendingBooks';
import PopularCategories from '@/components/PopularCategories';
import { FaRegComment, FaStar } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';
import { Tooltip } from '@nextui-org/react';
import { HiMiniHandThumbUp } from 'react-icons/hi2';
import { formatNumber } from '@/utils/func';

let tabs = [
  { id: 'all', label: 'All' },
  { id: 'books', label: 'Books', icon: <GiSpellBook /> },
  { id: 'knowledge', label: 'Knowledge', icon: <FaSun /> },
  { id: 'podcasts', label: 'Podcasts', icon: <MdOutlineKeyboardVoice /> },
  { id: 'newsletters', label: 'Newsletters', icon: <FaRegEnvelope /> },
  { id: 'documents', label: 'Documents', icon: <CgFileDocument /> }
];

const explore = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <>
      <div className="flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${
              activeTab === tab.id ? '' : 'hover:text-gray-600'
            } relative flex items-center gap-1.5 rounded-full py-1.5 text-md font-medium outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: 'transparent'
            }}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="bubble"
                className="absolute inset-0 z-10 border-b-[2.5px] border-[#AB9A85]"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.icon && <span className="text-lg">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex gap-4 mt-10">
        <div className="w-2/3 space-y-10">
          <TrendingBooks title="Trending Books" />
          <PopularCategories />
          <TrendingBooks title="Trending Knowledge" />
        </div>
        <div className="w-1/3">
          <div className="rounded-t-lg p-3 py-4 text-lg border text-gray-600 font-medium border-gray-300 border-b-gray-200">
            <p>POPULAR SKILLS</p>
          </div>
          <div className="flex flex-col p-3 border border-gray-300 border-t-0 border-b-0">
            <div className="flex gap-3">
              <div className="w-20 h-20 border"></div>
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">
                      How to Raise Venture Capital
                    </p>
                    <p className="text-gray-600 text-sm">
                      Business {'>'} Entrepreneurship
                    </p>
                  </div>
                  <div>
                    <button className="border border-teal-800 text-teal-800 px-3 py-1 rounded-md">
                      LISTEN
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-gray-600">
                    <p className="mt-2">
                      Understand venture capital and its best practices.
                    </p>
                    <div className="flex justify-start gap-24 mt-3">
                      <div className="flex flex-col">
                        <p>12</p>
                        <p>Segments</p>
                      </div>
                      <div className="flex flex-col">
                        <p>131</p>
                        <p>Listeners</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-3" />
            <div className="flex gap-3 mt-4">
              <div className="w-[160px] border"></div>
              <div className="flex flex-col gap-3 pb-12">
                <div className="flex">
                  <div className="flex items-center gap-1 px-2 rounded-md text-sm py-1 bg-orange-500 text-white font-bold">
                    <FaRegComment />
                    <p>Podcast</p>
                  </div>
                </div>
                <p className="text-lg font-bold">
                  Creating Engaging Learning Journeys
                </p>
                <div className="flex gap-3">
                  <Tooltip
                    content="Listening Time"
                    classNames={{
                      content: [
                        'py-2 px-4 shadow-xl',
                        'text-white bg-gray-800 rounded-lg'
                      ]
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <GoClock />
                      <p>16m</p>
                    </div>
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
                      <p>{formatNumber(2600)}</p>
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
                      5.0 <p className="text-gray-500">({454})</p>
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 bg-gray-200 items-center justify-center flex text-gray-600 border border-gray-300 border-t-0 hover:bg-gray-300 cursor-pointer">
            <p>View More</p>
          </div>
          <div className="flex flex-col p-3 border border-gray-300 border-t-0 border-b-0">
            <div className="flex gap-3">
              <div className="w-20 h-20 border"></div>
              <div className="flex flex-col">
                <div className="flex gap-1">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold">
                      How to Raise Venture Capital
                    </p>
                    <p className="text-gray-600 text-sm">
                      Business {'>'} Entrepreneurship
                    </p>
                  </div>
                  <div>
                    <button className="border border-teal-800 text-teal-800 px-3 py-1 rounded-md">
                      LISTEN
                    </button>
                  </div>
                </div>
                <div>
                  <div className="text-gray-600">
                    <p className="mt-2">
                      Understand venture capital and its best practices.
                    </p>
                    <div className="flex justify-start gap-24 mt-3">
                      <div className="flex flex-col">
                        <p>12</p>
                        <p>Segments</p>
                      </div>
                      <div className="flex flex-col">
                        <p>131</p>
                        <p>Listeners</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-3" />
            <div className="flex gap-3 mt-4">
              <div className="w-[160px] border"></div>
              <div className="flex flex-col gap-3 pb-12">
                <div className="flex">
                  <div className="flex items-center gap-1 px-2 rounded-md text-sm py-1 bg-orange-500 text-white font-bold">
                    <FaRegComment />
                    <p>Podcast</p>
                  </div>
                </div>
                <p className="text-lg font-bold">
                  Creating Engaging Learning Journeys
                </p>
                <div className="flex gap-3">
                  <Tooltip
                    content="Listening Time"
                    classNames={{
                      content: [
                        'py-2 px-4 shadow-xl',
                        'text-white bg-gray-800 rounded-lg'
                      ]
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <GoClock />
                      <p>16m</p>
                    </div>
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
                      <p>{formatNumber(2600)}</p>
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
                      5.0 <p className="text-gray-500">({454})</p>
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="py-2 bg-gray-200 items-center justify-center flex text-gray-600 border border-gray-300 border-t-0 hover:bg-gray-300 cursor-pointer">
            <p>View More</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default explore;
