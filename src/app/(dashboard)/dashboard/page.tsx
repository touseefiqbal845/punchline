'use client';
import StatusBar from '@/components/StatusBar';
import { FaRegComment } from 'react-icons/fa';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { BsArrowsAngleExpand } from 'react-icons/bs';
import { useState } from 'react';
import { mergeContents } from '@/utils/func';
import ContentItem from '@/components/ContentItem/Index';
import ReviewModal from '@/components/ReviewModal';
import Player from '../player/page';
import AudioPlayer from '@/components/AudioPlayer';
// import Player from "./"

const contents = [
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Podcast',
    color: 'orange',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Continue'
  },
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Newsletter',
    color: 'yellow',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Continue'
  },
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Encyclopedia',
    color: 'sky',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Continue'
  },
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Podcast',
    color: 'orange',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Continue'
  },
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Podcast',
    color: 'orange',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Continue'
  },
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Newsletter',
    color: 'yellow',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Continue'
  },
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Encyclopedia',
    color: 'sky',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Continue'
  },
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Podcast',
    color: 'orange',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Continue'
  }
];

const completed_contents = [
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Newsletter',
    color: 'yellow',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Rate'
  },
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Podcast',
    color: 'orange',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Rate'
  }
];

const similar_contents = [
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Encyclopedia',
    color: 'sky',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Start Now'
  },
  {
    image: '',
    icon: <FaRegComment />,
    type: 'Podcast',
    color: 'orange',
    title: 'Creating Engaging Learning Journeys: UI/UX Best Practices',
    progress: '80%',
    last: 'Yesterday',
    action: 'Start Now'
  }
];

const Home = () => {
  const [showContents, setShowContents] = useState(contents.slice(0, 4));
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [isOpenReview, setIsOpenReview] = useState(false);
  const [maxHeight, setMaxHeight] = useState({
    collapsed: '400px',
    expanded: '900px'
  });

  const [showCompletedContents, setShowCompletedContents] = useState(
    mergeContents(completed_contents, similar_contents)
  );

  const openReview = (action: string) => {
    if (action === 'Rate') {
      setIsOpenReview(true);
    }
  };
  const closeReview = () => {
    setIsOpenReview(false);
  };

  const showMore = () => {
    if (!expanded) {
      setShowContents(contents.slice(0, 8));
    }
    setExpanded((prev) => !prev);
    if (expanded) {
      setTimeout(() => {
        setShowContents(contents.slice(0, 4));
      }, 300);
    }
  };
  const showMore1 = () => {
    if (!expanded) {
      setShowCompletedContents(showCompletedContents.slice(0, 4));
    }
    setExpanded1((prev) => !prev);
    if (expanded) {
      setTimeout(() => {
        setShowCompletedContents(showCompletedContents.slice(0, 2));
      }, 300);
    }
  };

  return (
    <div className="size-full space-y-6 bg-[#F8FCFF]">
      <p className="font-semibold text-xl">Here's what's happening</p>
      <StatusBar />
      <div className="overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="border border-b-0 border-gray-300 rounded-lg rounded-b-none min-w-[1024px] md:min-w-[1280px]">
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-xl p-6">
                Content In Progress (8)
              </p>
              <div className="flex justify-between items-center space-x-2 pr-6 cursor-pointer">
                <p className="text-sky-500">View All</p>
                <BsArrowsAngleExpand />
              </div>
            </div>
            <div
              className={`grid grid-cols-2 overflow-hidden transition-all duration-300 ease-in`}
              style={{
                maxHeight: expanded ? maxHeight.expanded : maxHeight.collapsed
              }}
            >
              {showContents.map((e, i) => (
                <div key={i}>
                  <ContentItem e={e} i={i} handleClick={openReview} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="h-10 w-full border border-t-0 border-gray-300 bg-gray-100 rounded-b-md flex flex-col justify-center items-center cursor-pointer transition-all duration-200 ease-in-out"
          onClick={showMore}
        >
          {expanded ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      <div className="overflow-hidden">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="border border-b-0 border-gray-300 rounded-lg rounded-b-none min-w-[1024px] md:min-w-[1280px]">
            <div className="flex flex-row justify-between">
              <p className="font-semibold text-xl p-6">
                Your Completed Content (1)
              </p>
              <div className="border-l border-gray-300">
                <p className="font-semibold text-xl p-6 mx-[9px]">
                  Similar Content
                </p>
              </div>
              <div className="flex justify-between items-center space-x-2 pr-6 cursor-pointer">
                <p className="text-sky-500">View All</p>
                <BsArrowsAngleExpand />
              </div>
            </div>
            <div className="flex">
              <div
                className={`grid grid-cols-2 overflow-hidden transition-all duration-300 ease-in`}
                style={{
                  maxHeight: expanded1 ? '500px' : '185px'
                }}
              >
                {showCompletedContents.map((e, i) => (
                  <div key={i}>
                    <ContentItem e={e} i={i} handleClick={openReview} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      
        <div
          className="h-10 w-full border border-t-0 border-gray-300 bg-gray-100 rounded-b-md flex flex-col justify-center items-center cursor-pointer transition-all duration-200 ease-in-out"
          onClick={showMore1}
        >
          {expanded1 ? <FaChevronUp /> : <FaChevronDown />}
        </div>
        
      </div>
   
      {isOpenReview && (
        <ReviewModal
          book={''}
          title={'asdf'}
          author={'bandit'}
          onClose={closeReview}
        />
      )}
    </div>
  );
};

export default Home;
