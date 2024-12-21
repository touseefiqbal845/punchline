import { useState } from 'react';
import Book from '../Book';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const trends = [
  {
    title: 'Personal Development',
    image: '',
    subtitle: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    content:
      'Take a Deep Dive into the Powerful Lessons in Personal Change and Leadership',
    type: 'book',
    time: 16,
    reactions: 2600,
    rating: 5,
    ratings: 454
  },
  {
    title: 'Self-Help',
    image: '',
    subtitle: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    content:
      'Learn the art of effective communication and build lasting relationships',
    type: 'book',
    time: 18,
    reactions: 3100,
    rating: 4.8,
    ratings: 389
  },
  {
    title: 'Business & Finance',
    image: '',
    subtitle: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    content:
      'Discover the secrets of success and wealth creation through the power of thought',
    type: 'book',
    time: 20,
    reactions: 2800,
    rating: 4.9,
    ratings: 412
  },
  {
    title: 'Psychology',
    image: '',
    subtitle: 'The Power of Habit',
    author: 'Charles Duhigg',
    content:
      'Unlock the science behind habit formation and learn how to transform your life',
    type: 'book',
    time: 15,
    reactions: 2400,
    rating: 4.7,
    ratings: 378
  },
  {
    title: 'Personal Development',
    image: '',
    subtitle: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    content:
      'Take a Deep Dive into the Powerful Lessons in Personal Change and Leadership',
    type: 'book',
    time: 16,
    reactions: 2600,
    rating: 5,
    ratings: 454
  },
  {
    title: 'Self-Help',
    image: '',
    subtitle: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    content:
      'Learn the art of effective communication and build lasting relationships',
    type: 'book',
    time: 18,
    reactions: 3100,
    rating: 4.8,
    ratings: 389
  },
  {
    title: 'Business & Finance',
    image: '',
    subtitle: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    content:
      'Discover the secrets of success and wealth creation through the power of thought',
    type: 'book',
    time: 20,
    reactions: 2800,
    rating: 4.9,
    ratings: 412
  },
  {
    title: 'Psychology',
    image: '',
    subtitle: 'The Power of Habit',
    author: 'Charles Duhigg',
    content:
      'Unlock the science behind habit formation and learn how to transform your life',
    type: 'book',
    time: 15,
    reactions: 2400,
    rating: 4.7,
    ratings: 378
  },
  {
    title: 'Personal Development',
    image: '',
    subtitle: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    content:
      'Take a Deep Dive into the Powerful Lessons in Personal Change and Leadership',
    type: 'book',
    time: 16,
    reactions: 2600,
    rating: 5,
    ratings: 454
  },
  {
    title: 'Self-Help',
    image: '',
    subtitle: 'How to Win Friends and Influence People',
    author: 'Dale Carnegie',
    content:
      'Learn the art of effective communication and build lasting relationships',
    type: 'book',
    time: 18,
    reactions: 3100,
    rating: 4.8,
    ratings: 389
  },
  {
    title: 'Business & Finance',
    image: '',
    subtitle: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    content:
      'Discover the secrets of success and wealth creation through the power of thought',
    type: 'book',
    time: 20,
    reactions: 2800,
    rating: 4.9,
    ratings: 412
  },
  {
    title: 'Psychology',
    image: '',
    subtitle: 'The Power of Habit',
    author: 'Charles Duhigg',
    content:
      'Unlock the science behind habit formation and learn how to transform your life',
    type: 'book',
    time: 15,
    reactions: 2400,
    rating: 4.7,
    ratings: 378
  },
  {
    title: 'Psychology',
    image: '',
    subtitle: 'The Power of Habit',
    author: 'Charles Duhigg',
    content:
      'Unlock the science behind habit formation and learn how to transform your life',
    type: 'book',
    time: 15,
    reactions: 2400,
    rating: 4.7,
    ratings: 378
  },
  {
    title: 'Psychology',
    image: '',
    subtitle: 'The Power of Habit',
    author: 'Charles Duhigg',
    content:
      'Unlock the science behind habit formation and learn how to transform your life',
    type: 'book',
    time: 15,
    reactions: 2400,
    rating: 4.7,
    ratings: 378
  },
  {
    title: 'Psychology',
    image: '',
    subtitle: 'The Power of Habit',
    author: 'Charles Duhigg',
    content:
      'Unlock the science behind habit formation and learn how to transform your life',
    type: 'book',
    time: 15,
    reactions: 2400,
    rating: 4.7,
    ratings: 378
  },
  {
    title: 'Psychology',
    image: '',
    subtitle: 'The Power of Habit',
    author: 'Charles Duhigg',
    content:
      'Unlock the science behind habit formation and learn how to transform your life',
    type: 'book',
    time: 15,
    reactions: 2400,
    rating: 4.7,
    ratings: 378
  }
];

const TrendingBooks = ({ title }: { title: string }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(trends.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <p className="text-2xl font-bold mx-2">{title}</p>
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
              className="px-1 py-2 grid grid-cols-4 gap-3 flex-shrink-0 w-full min-w-[826px] overflow-x-auto"
            >
              {trends
                .slice(
                  pageIndex * itemsPerPage,
                  pageIndex * itemsPerPage + itemsPerPage
                )
                .map((book, i) => (
                  <Book book={book} key={i} />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingBooks;
