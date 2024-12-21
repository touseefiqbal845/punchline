import { CircularProgressbar } from 'react-circular-progressbar';
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosMore,
  IoMdInformationCircleOutline
} from 'react-icons/io';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { IoBookmarksOutline } from 'react-icons/io5';
import { TfiHeadphone } from 'react-icons/tfi';
import { MdOutlineFileUpload } from 'react-icons/md';
import { BiBookAdd, BiSolidAddToQueue } from 'react-icons/bi';
import { RiUserVoiceLine } from 'react-icons/ri';
import { AiOutlinePieChart } from 'react-icons/ai';
import { SlPresent } from 'react-icons/sl';
import IconButton from '@/components/IconButton';
import 'react-circular-progressbar/dist/styles.css';

const ToolBar = () => {
  return (
    <>
      <div style={{ width: 75, height: 75 }}>
        <CircularProgressbar value={(36 / 60) * 100} text="24 Min" />
      </div>
      <strong>Reading:</strong>
      <p>6 practical tips on how to talk to anyone</p>
      <div className="flex flex-col mx-4 space-y-4">
        <button className="bg-gray-200 w-11 rounded-full flex-col justify-between hover:bg-gray-300 transition-all duration-300 ease-in-out">
          <IoIosArrowUp className="mx-auto mt-4" />
          <IoIosArrowDown className="mx-auto mt-6 mb-4" />
        </button>
        <IconButton
          icon={<TfiHeadphone />}
          comment="Save to Collection1"
          isIconOnly
        />
        <IconButton
          icon={<BiBookAdd />}
          comment="Save to Collection2"
          isIconOnly
        />
        <IconButton
          icon={<RiUserVoiceLine />}
          comment="Save to Collection3"
          isIconOnly
        />
        <IconButton
          icon={<AiOutlinePieChart />}
          comment="Save to Collection4"
          isIconOnly
        />
        <IconButton
          icon={<IoBookmarksOutline />}
          comment="Save to Collection5"
          isIconOnly
        />
        <IconButton
          icon={<BiSolidAddToQueue />}
          comment="Save to Collection"
          isIconOnly
        />
        <IconButton
          icon={<IoIosMore />}
          comment="Save to Collection6"
          isIconOnly
        />
        <IconButton
          icon={<MdOutlineFileUpload />}
          comment="Save to Collection7"
          isIconOnly
        />
        <IconButton
          icon={<SlPresent />}
          comment="Save to Collection8"
          isIconOnly
        />
        <IconButton
          icon={<IoMdInformationCircleOutline />}
          comment="Save to Collection9"
          isIconOnly
        />

        <button className="bg-gray-200 w-11 rounded-full flex-col justify-between space-y-2 pb-4 hover:bg-gray-300 transition-all duration-300 ease-in-out">
          <div className="bg-white rounded-full w-[26px] mt-4 p-1 mx-auto">
            <TiArrowSortedUp className="mx-auto text-lg" />
          </div>
          <p>8</p>
          <div className="bg-white rounded-full w-[26px] p-1 mx-auto">
            <TiArrowSortedDown className="mx-auto text-lg" />
          </div>
        </button>
      </div>
    </>
  );
};

export default ToolBar;
