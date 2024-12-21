import IconButton from '../IconButton';
import { IoMdArrowForward } from 'react-icons/io';

const Category = ({ e }: { e: any }) => {
  return (
    <div className="border border-[#8FB3B3] flex flex-col rounded-lg">
      <div className="flex justify-center p-6 border-b border-[#8FB3B3]">
        <div className="bg-[#E3F5FF] rounded-full items-center lg:w-16 lg:h-16 2xl:w-24 2xl:h-24"></div>
      </div>
      <div className="flex p-3 px-4 pr-2 bg-sky-50 rounded-b-lg justify-between items-center">
        <p>{e.title}</p>
        <IconButton
          icon={<IoMdArrowForward />}
          comment={''}
          fontsize={20}
          w={20}
          h={30}
          color="#f0f9ff"
        />
      </div>
    </div>
  );
};

export default Category;
