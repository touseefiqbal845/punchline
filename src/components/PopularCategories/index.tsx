import Category from '../Category';
import { useState } from 'react';

const categories = [
  {
    icon: '',
    title: 'Finance'
  },
  {
    icon: '',
    title: 'Lifestyle'
  },
  {
    icon: '',
    title: 'Entertainment'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Finance'
  },
  {
    icon: '',
    title: 'Lifestyle'
  },
  {
    icon: '',
    title: 'Entertainment'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Finance'
  },
  {
    icon: '',
    title: 'Lifestyle'
  },
  {
    icon: '',
    title: 'Entertainment'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  },
  {
    icon: '',
    title: 'Science'
  }
];

const PopularCategories = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="text-2xl font-bold mx-2">Popular Categories</p>
        <div className="flex items-center gap-3 border rounded-full px-2 text-sm">
          <button onClick={handlePrev}>←</button>
          <p>
            {currentPage + 1} of {totalPages}
          </p>
          <button onClick={handleNext}>→</button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentPage * 100}%)`
          }}
        >
          {Array.from({ length: totalPages }, (_, pageIndex) => (
            <div
              key={pageIndex}
              className="px-1 py-2 grid grid-cols-4 gap-3 w-full flex-shrink-0"
              style={{ width: '100%' }}
            >
              {categories
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((e, i) => (
                  <Category e={e} key={i} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
