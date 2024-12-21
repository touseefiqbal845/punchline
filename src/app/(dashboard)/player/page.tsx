'use client';
import ToolBar from '@/components/ToolBar';
import { CiClock2, CiStar, CiTwitter } from 'react-icons/ci';
import { FaRegEye, FaArrowRightLong } from 'react-icons/fa6';
import { FaCheck, FaRegComment } from 'react-icons/fa';
import { IoCompassOutline } from 'react-icons/io5';
import { LuDot } from 'react-icons/lu';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  PiPaperclip,
  PiLineVerticalThin,
  PiHighlighterLight,
  PiHighlighter
} from 'react-icons/pi';
import { HiMiniHandThumbUp } from 'react-icons/hi2';
import { RiUserVoiceLine } from 'react-icons/ri';
import IconButton from '@/components/IconButton';
import { BiSolidComment, BiHighlight, BiSearchAlt } from 'react-icons/bi';
import { HiDotsVertical, HiOutlineLightBulb } from 'react-icons/hi';
import { Tooltip } from '@nextui-org/react';
import { MdNoteAdd, MdReport, MdOutlineContentCopy } from 'react-icons/md';
import { TbBrandGoogle } from 'react-icons/tb';
import { SiPerplexity } from 'react-icons/si';
import QuestionTooltip from '@/components/QuestionTooltip';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/Accordion';
import FeedbackModal from '@/components/FeedbackModal';

const avatars = [
  'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  'https://i.pravatar.cc/150?u=a04258a2462d826712d',
  'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  'https://i.pravatar.cc/150?u=a04258114e29026302d',
  'https://i.pravatar.cc/150?u=a04258114e29026702d',
  'https://i.pravatar.cc/150?u=a04258114e29026708c'
];

const cards = [
  {
    content: 'Multiple Halo games are in development using Unreal Engine 5',
    icon: './xxx.png',
    company: 'TechCrunch',
    number: '1'
  },
  {
    content: 'Multiple Halo games are in development using Unreal Engine 5',
    icon: './xxx.png',
    company: 'TechCrunch',
    number: '2'
  },
  {
    content: 'Multiple Halo games are in development using Unreal Engine 5',
    icon: './xxx.png',
    company: 'TechCrunch',
    number: '3'
  },
  {
    content: 'Multiple Halo games are in development using Unreal Engine 5',
    icon: './xxx.png',
    company: 'TechCrunch',
    number: '4'
  },
  {
    content: 'Multiple Halo games are in development using Unreal Engine 5',
    icon: './xxx.png',
    company: 'TechCrunch',
    number: '5'
  },
  {
    content: 'Multiple Halo games are in development using Unreal Engine 5',
    icon: './xxx.png',
    company: 'TechCrunch',
    number: '6'
  },
  {
    content: 'Multiple Halo games are in development using Unreal Engine 5',
    icon: './xxx.png',
    company: 'TechCrunch',
    number: '7'
  },
  {
    content: 'Multiple Halo games are in development using Unreal Engine 5',
    icon: './xxx.png',
    company: 'TechCrunch',
    number: '8'
  }
];

const Player = () => {
  const [showAll, setShowAll] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [isOpenFeedback, setIsOpenFeedback] = useState(false);
  const [isOpenTextTooltip, setIsOpenTextTooltip] = useState(false);
  const [textTooltipPosition, setTextTooltipPosition] = useState({
    top: 0,
    left: 0
  });
  const [selectedText, setSelectedText] = useState('');
  const textTooltipRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const visibleAvatars = avatars.slice(0, 4);
  const hiddenCount = avatars.length - 3;
  const toggleToolTip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenTooltip(!isOpenTooltip);
  };
  const toggleQuestion = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpenQuestion(!isOpenQuestion);
  };
  const openFeedback = () => {
    setIsOpenFeedback(true);
  };
  const closeFeedback = () => {
    setIsOpenFeedback(false);
  };
  const handleMouseUp = () => {
    const selection = window.getSelection();
    const text = selection?.toString().trim();

    if (text) {
      const range = selection!.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      setTextTooltipPosition({
        top: rect.bottom + window.scrollY + 8,
        left: rect.left + window.scrollX + rect.width / 2
      });
      setSelectedText(text);
      setIsOpenTextTooltip(true);
    } else {
      setIsOpenTextTooltip(false);
    }
  };
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node)
      ) {
        setIsOpenTooltip(false);
      }
      if (
        questionRef.current &&
        !questionRef.current.contains(event.target as Node)
      ) {
        setIsOpenQuestion(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => document.removeEventListener('mouseup', handleMouseUp);
  }, []);
  const highlightText = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.style.backgroundColor = '#FCF6E0';
      span.style.textDecoration = 'underline';
      span.style.textDecorationColor = '#E6CC86';
      span.style.textDecorationThickness = '2px';
      span.style.textDecorationStyle = 'solid';
      range.surroundContents(span);
    }
    setIsOpenTextTooltip(false);
  };

  return isClient ? (
    <div className="flex p-4 pb-20 lg:gap-20 lg:p-0 md:pb-0">
      <div className="flex flex-col w-0 invisible lg:w-1/6 lg:visible gap-3">
        <ToolBar />
      </div>
      <div className="flex flex-col gap-2 w-full lg:w-5/6">
        <div className="flex flex-col gap-3 mt-4 h-auto visible sm:invisible sm:h-0">
          <div className="flex gap-3 justify-between">
            <div className="flex flex-col">
              <p className="text-gray-500 text-md">Leil Lowndes</p>
              <p className="text-2xl text-cyan-900 font-bold md:uppercase">
                How to Talk to Anyone
              </p>
            </div>
            <div className="w-12 border"></div>
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="flex justify-center items-center gap-1 text-base text-gray-500">
              <CiClock2 />
              <p>24 min</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-base text-gray-500">
              <FaRegEye />
              <p>792</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-base text-gray-500">
              <HiOutlineLightBulb />
              <p>5</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-base text-gray-500">
              <CiStar />
              <p>4.2 (18)</p>
            </div>
          </div>
        </div>
        <hr className="border-t border-gray-200 w-screen -mx-8 mt-0 sm:mt-4 visible sm:invisible" />
        <p className="text-gray-500 text-lg font-sans font-medium sm:text-xl mt-2 sm:mt-0">
          INTRODUCTION
        </p>
        <p className="text-3xl font-bold">
          Learn how to put your best foot forward
        </p>
        <div className="flex justify-between mt-4 h-0 invisible sm:visible sm:h-auto">
          <div className="flex gap-3">
            <div className="w-12 border"></div>
            <div className="flex flex-col">
              <p className="text-lg">HOW TO TALK TO ANYONE</p>
              <p className="text-gray-500 text-md">Leil Lowndes</p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-6">
            <div className="flex justify-center items-center gap-1 text-base text-gray-500">
              <CiClock2 />
              <p>24 min</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-base text-gray-500">
              <FaRegEye />
              <p>792</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-base text-gray-500">
              <HiOutlineLightBulb />
              <p>5</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-base text-gray-500">
              <CiStar />
              <p>4.2 (18)</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <p className="text-lg leading-7">
            <span className="text-5xl font-bold float-left mr-2 leading-[0.9] text-black">
              L
            </span>
            ife is full of meetings and conversations we'd rather not have, and
            presentations we'd rather not give. But the truth of the matter is
            that we're all social beings who rely on communication in almost
            everything we do. Wouldn't it make sense then that we should all
            strive to become better and more comfortable at talking to one
            another?
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div
              className={`grid grid-cols-4 gap-4 mt-8 transition-all duration-500 min-w-[1024px] ${
                showAll ? 'max-h-screen' : 'max-h-[300px]'
              } overflow-hidden`}
            >
              {!showAll
                ? cards.slice(0, 3).map((e, i) => (
                    <div
                      key={i}
                      className="flex flex-col bg-sky-100 p-4 rounded-lg gap-3"
                    >
                      <p className="font-bold text-lg">{e.content}</p>
                      <div className="flex gap-1 justify-start items-center mt-6">
                        <div className="w-6 h-6 border rounded-full"></div>
                        <div className="flex items-center">
                          {e.company}
                          <LuDot />
                        </div>
                      </div>
                    </div>
                  ))
                : cards.map((e, i) => (
                    <div
                      key={i}
                      className="flex flex-col bg-sky-100 p-4 rounded-lg gap-3"
                    >
                      <p className="font-bold text-lg">{e.content}</p>
                      <div className="flex gap-1 justify-start items-center mt-6">
                        <div className="w-6 h-6 border rounded-full"></div>
                        <div className="flex items-center">
                          {e.company}
                          <LuDot />
                        </div>
                      </div>
                    </div>
                  ))}

              {!showAll && (
                <div
                  onClick={() => setShowAll(true)}
                  className="flex flex-col justify-between bg-sky-100 p-5 px-4 rounded-lg gap-3 cursor-pointer hover:bg-sky-200 transition-all duration-300"
                >
                  <div className="flex justify-start gap-2">
                    {cards.slice(3, 8).map((_, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 border rounded-full bg-gray-400"
                      ></div>
                    ))}
                  </div>
                  <p className="font-bold text-md text-left text-gray-500">
                    View 5 more
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {showAll && (
          <div className="mt-4 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="text-blue-500 hover:underline"
            >
              Show Less
            </button>
          </div>
        )}
        <p className="text-gray-500 text-lg sm:text-xl font-sans font-medium mt-10">
          CHAPTER 1 OF 12
        </p>
        <p className="text-3xl font-bold">
          <strong>😊</strong>First impressions matter, so remember to smile and
          use welcoming body language.
        </p>
        <div className="flex justify-between items-center mt-4 flex-nowrap">
          <div className="flex text-sm items-center gap-2 bg-gray-100 border border-gray-300 px-4 rounded-md truncate">
            <FaCheck className="text-sky-300 text-[10px] shrink-0" />
            <span className="truncate">First Impressions</span>
          </div>
          <div className="flex text-sm items-center gap-1 bg-gray-100 border border-gray-300 px-4 rounded-md truncate">
            <IoCompassOutline className="text-lg mx-2 shrink-0" />

            <div className="items-center gap-1 truncate hidden md:flex">
              <span className="truncate">
                Also in <strong>Think Like a Rocket Scientist</strong>
              </span>
              <LuDot className="shrink-0" />
              <span className="truncate">
                <strong>Magic Words</strong>
              </span>
            </div>

            <span className="text-gray-300 mx-2 shrink-0 hidden md:block">
              |
            </span>

            <span className="truncate">16 sources</span>
            <FaArrowRightLong className="ml-2 shrink-0" />
          </div>
        </div>

        <div>
          <span>
            Let's not kid ourselves: first impressions are really important.
          </span>
          <span className="rounded-full bg-gray-200 text-xs w-4 h-4 inline-flex items-center justify-center">
            1
          </span>{' '}
          <span>
            When you meet someone for the first time, the way you look and act
            is seared into their brain, and it will undoubtedly influence any
            future dealings you have with that person.
          </span>
          <span className="rounded-full bg-gray-200 text-xs w-4 h-4 inline-flex items-center justify-center">
            2
          </span>
          <span className="rounded-full bg-gray-200 text-xs w-4 h-4 inline-flex items-center justify-center">
            3
          </span>
        </div>
        <div>
          <span>
            You may have found it annoying at the time, but she was right. A
            smile can make a big difference in whether or not you win over.
          </span>
          <span className="rounded-full bg-gray-200 text-xs w-4 h-4 inline-flex items-center justify-center">
            1
          </span>
          <span className="rounded-full bg-gray-200 text-xs w-4 h-4 inline-flex items-center justify-center">
            4
          </span>
        </div>
        <div className="overflow-hidden">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex justify-between mt-4 min-w-[560px]">
              <div className="flex justify-start items-center space-x-4">
                <div className="flex p-0.5 items-center space-x-[-12px] border border-gray-200 rounded-full">
                  {visibleAvatars.map((src, index) => (
                    <motion.div
                      key={index}
                      className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-white shadow-lg"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <Image
                        src={src}
                        alt={`Avatar ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                      />
                    </motion.div>
                  ))}
                  {hiddenCount > 0 && (
                    <motion.p
                      className="pl-3 pr-2 h-6 flex items-center justify-center text-sm rounded-full"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {hiddenCount} sources
                    </motion.p>
                  )}
                </div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <PiPaperclip />
                </motion.div>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  <MdOutlineContentCopy />
                </motion.div>
              </div>
              <div className="flex justify-start items-center space-x-3">
                <div className="space-x-[-10px] flex items-center">
                  <div className="relative rounded-full bg-gradient-to-br from-sky-400 to-blue-600 text-sm text-white w-5 h-5 inline-flex items-center justify-center">
                    <HiMiniHandThumbUp />
                  </div>
                  <div className="rounded-full text-[20px] text-orange-500 inline-flex items-center justify-center w-5 h-5">
                    😡
                  </div>
                </div>
                <p>29</p>
                <div className="flex space-x-[-6px] items-center bg-gray-200">
                  <IconButton
                    w={15}
                    h={30}
                    fontsize={15}
                    round={false}
                    icon={<RiUserVoiceLine />}
                    comment={'Play Deep Dive Narration'}
                  ></IconButton>
                  <PiLineVerticalThin />
                  <IconButton
                    w={15}
                    h={30}
                    fontsize={15}
                    round={false}
                    icon={<RiUserVoiceLine />}
                    comment={'Play Deep Dive Narration'}
                  ></IconButton>
                  <PiLineVerticalThin />
                  <IconButton
                    w={15}
                    h={30}
                    fontsize={15}
                    round={false}
                    icon={<RiUserVoiceLine />}
                    comment={'Play Deep Dive Narration'}
                  ></IconButton>
                </div>
                <IconButton
                  w={60}
                  h={30}
                  fontsize={20}
                  border={true}
                  disabled
                  icon={
                    <div className="flex items-center gap-1.5">
                      <PiHighlighterLight />
                      <p className="text-sm">12</p>
                    </div>
                  }
                  comment={''}
                ></IconButton>
                <div className="relative">
                  <Tooltip
                    content={
                      <div
                        className="w-full mx-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <QuestionTooltip />
                      </div>
                    }
                    placement="bottom-end"
                    classNames={{
                      content: [
                        'bg-white rounded-lg shadow-lg border border-gray-200'
                      ]
                    }}
                  >
                    <div>
                      <IconButton
                        w={60}
                        h={30}
                        fontsize={20}
                        border={true}
                        icon={
                          <div className="flex items-center gap-1.5">
                            <BiSolidComment className="text-sky-300" />
                            <p className="text-sm">18</p>
                          </div>
                        }
                        comment={''}
                        onClick={toggleQuestion}
                      ></IconButton>
                    </div>
                  </Tooltip>
                </div>
                <div ref={tooltipRef} className="relative">
                  <Tooltip
                    isOpen={isOpenTooltip}
                    content={
                      <div
                        className="w-full mx-6"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="flex w-full items-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                          <MdNoteAdd className="mr-2 text-lg" />
                          Create Note
                        </div>
                        <div
                          className="flex items-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          onClick={openFeedback}
                        >
                          <MdReport className="mr-2 text-lg" />
                          Report
                        </div>
                      </div>
                    }
                    placement="right"
                    classNames={{
                      content: [
                        'bg-white rounded-lg shadow-lg border border-gray-200'
                      ]
                    }}
                  >
                    <HiDotsVertical
                      className="cursor-pointer hover:bg-gray-200 w-[30px] h-[30px] rounded-full p-1 transition-all ease-in-out duration-300"
                      onClick={toggleToolTip}
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-6 text-2xl font-medium">
          <BiSolidComment className="text-sky-300 mt-2" />
          Questions
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Why is a smile important for first impressions?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" border>
            <AccordionTrigger>How can a fake smile be avoided</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      {isOpenTextTooltip && (
        <div
          ref={textTooltipRef}
          style={{
            position: 'absolute',
            top: textTooltipPosition.top,
            left: textTooltipPosition.left,
            transform: 'translateX(-50%)',
            zIndex: 1000
          }}
          className="shadow-xl bg-white rounded-lg w-[240px]"
        >
          <div className="flex flex-col justify-start items-start text-start w-full">
            <button
              onClick={highlightText}
              className="flex gap-2 items-center hover:bg-gray-100 w-full text-start px-6 py-2 pt-4"
            >
              <PiHighlighter className="text-lg" />
              Highlight
            </button>
            <button className="flex gap-2 items-center hover:bg-gray-100 w-full text-start px-6 py-2">
              <BiHighlight className="text-lg" />
              Create Highlighter
            </button>

            <button className="flex gap-2 items-center hover:bg-gray-100 w-full text-start px-6 py-2">
              <FaRegComment className="text-lg" />
              Create Note
            </button>
            <button className="flex gap-2 items-center hover:bg-gray-100 w-full text-start px-6 py-2">
              <MdOutlineContentCopy className="text-lg" />
              Copy Text
            </button>
            <hr className="w-full border-t" />
            <button className="flex gap-2 items-center hover:bg-gray-100 w-full text-start px-6 py-2">
              <BiSearchAlt className="text-lg" />
              Search Punchline
            </button>
            <button className="flex gap-2 items-center hover:bg-gray-100 w-full text-start px-6 py-2">
              <TbBrandGoogle className="text-lg" />
              Search Google
            </button>
            <button className="flex gap-2 items-center hover:bg-gray-100 w-full text-start px-6 py-2">
              <SiPerplexity className="text-lg" />
              Search Perplexity
            </button>
            <button className="flex gap-2 items-center hover:bg-gray-100 w-full text-start px-6 py-2 pb-4">
              <CiTwitter className="text-lg" />
              Post to X (8 chars)
            </button>
          </div>
        </div>
      )}
      {isOpenFeedback && <FeedbackModal onClose={closeFeedback} />}
    </div>
  ) : (
    <></>
  );
};

export default Player;
