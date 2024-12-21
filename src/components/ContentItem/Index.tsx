import Image from 'next/image';
import clsx from 'clsx';

const ContentItem = ({
  e,
  i,
  handleClick
}: {
  e: any;
  i: number;
  handleClick: any;
}) => {
  return (
    <div
      key={i}
      className={`border border-l-0 border-b-0 border-gray-300 flex flex-row ${
        i % 2 === 1 ? 'border-l-0 border-r-0' : ''
      } ${Math.floor(i / 2) === 8 / 2 - 1 ? 'border-r-1 border-l-0' : ''}`}
    >
      <div className="w-[200px] px-6 py-6">
        <div className="border border-gray-300 w-full h-full">
          {e.image && <Image src={e.image} alt={e.title} fill></Image>}
        </div>
      </div>
      <div className="flex flex-col py-6 space-y-2 pr-6">
        <div className="flex">
          <div
            className={clsx(
              `text-sm font-bold flex flex-row px-2 py-1 gap-1 text-white rounded-md bg-${e.color}-500`,
              {
                'bg-blue-500': e.color === 'blue',
                'bg-green-500': e.color === 'green',
                ' bg-purple-500': e.color === 'purple',
                ' bg-yellow-500': e.color === 'yellow',
                ' bg-red-500': e.color === 'red',
                ' bg-orange-500': e.color === 'orange',
                ' bg-gray-500': e.color === 'gray',
                ' bg-sky-500': e.color === 'sky'
              }
            )}
          >
            <div className="h-full flex flex-col justify-center">{e.icon}</div>
            {e.type}
          </div>
        </div>
        <p className="font-bold text-xl">{e.title}</p>
        <div className="flex flex-row">
          <div className="w-2/3 flex flex-col">
            <p className="mb-1 text-gray-600">
              Progress: <strong>{e.progress}</strong> ● Last Activity:{' '}
              <strong>{e.last}</strong>
            </p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-600 h-2 rounded-full"
                style={{ width: e.progress }}
              ></div>
            </div>
          </div>
          <div className="w-1/3 flex justify-end ">
            <button
              className="px-5 py-1 border border-gray-300 rounded-md font-bold"
              onClick={() => handleClick(e.action)}
            >
              {e.action}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
