import { CiCircleCheck, CiGift, CiClock2 } from 'react-icons/ci';
import { FaRegComment } from 'react-icons/fa';
import { PiHighlighterLight } from 'react-icons/pi';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { HiOutlineLightBulb } from 'react-icons/hi';
import clsx from 'clsx';

const StatusBar = () => {
  const cards = [
    {
      icon: <CiClock2 />,
      color: 'blue',
      title: 'In Progress',
      text: '3'
    },
    {
      icon: <CiCircleCheck />,
      color: 'green',
      title: 'Completed',
      text: '12'
    },
    {
      icon: <FaRegComment />,
      color: 'purple',
      title: 'Comments',
      text: '8'
    },
    {
      icon: <PiHighlighterLight />,
      color: 'yellow',
      title: 'Highlights',
      text: '5'
    },
    {
      icon: <CiGift />,
      color: 'red',
      title: 'Gifted',
      text: '8/10'
    },
    {
      icon: <CiClock2 />,
      title: 'Min Listened',
      color: 'orange',
      text: '60/500'
    },
    {
      icon: <AiOutlineAppstoreAdd />,
      color: 'gray',
      title: 'Content Types',
      text: '5/7'
    },
    {
      icon: <HiOutlineLightBulb />,
      color: 'sky',
      title: 'Big Ideas',
      text: '5'
    }
  ];
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="grid grid-cols-4 gap-6 min-w-[960px] md:min-w-[1024px] lg:grid-cols-4">
        {cards.map((e, i) => (
          <div
            key={i}
            className="p-5 flex flex-row gap-4 border border-gray-300 rounded-lg bg-white min-w-32 max-w-screen-lg"
          >
            <div
              className={clsx(
                `flex flex-col justify-center text-2xl text-red py-2 px-3.5 bg-yellow rounded-xl`,
                {
                  'text-blue-500 bg-blue-100': e.color === 'blue',
                  'text-green-500 bg-green-100': e.color === 'green',
                  'text-purple-500 bg-purple-100': e.color === 'purple',
                  'text-yellow-500 bg-yellow-100': e.color === 'yellow',
                  'text-red-500 bg-red-100': e.color === 'red',
                  'text-orange-500 bg-orange-100': e.color === 'orange',
                  'text-gray-500 bg-gray-100': e.color === 'gray',
                  'text-sky-500 bg-sky-100': e.color === 'sky'
                }
              )}
            >
              {e.icon}
            </div>
            <div className="flex flex-col">
              <p className="text-gray-700">{e.title}</p>
              <p className="font-semibold text-xl">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusBar;
