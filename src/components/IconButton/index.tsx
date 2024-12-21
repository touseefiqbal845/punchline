import { Tooltip, Button } from '@nextui-org/react';
import clsx from 'clsx';

const IconButton = ({
  icon,
  comment,
  w = 44,
  h = 44,
  fontsize = 24,
  round = true,
  border = false,
  disabled = false,
  color = '#e5e7eb',
  hover = '#d1d5db',
  isIconOnly = false,
  onClick
}: {
  icon: any;
  comment: string;
  w?: number;
  h?: number;
  fontsize?: number;
  round?: boolean;
  border?: boolean;
  disabled?: boolean;
  color?: string;
  hover?: string;
  isIconOnly?: boolean;
  onClick?: any;
}) => {
  return comment ? (
    <>
      <Tooltip
        content={comment}
        classNames={{
          content: ['py-2 px-4 shadow-xl', 'text-white bg-gray-800 rounded-lg']
        }}
      >
        <Button
          style={{
            width: `${w}px`,
            height: `${h}px`,
            fontSize: `${fontsize}px`,
            backgroundColor: `${color}`
          }}
          isIconOnly={isIconOnly}
          disabled={disabled}
          onClick={onClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = hover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = color;
          }}
          className={clsx(
            `flex flex-col justify-center items-center transition-all duration-300 ease-in-out focus:outline-none`,
            {
              'rounded-full': round === true,
              'border border-gray-300': border === true
            }
          )}
        >
          {icon}
        </Button>
      </Tooltip>
    </>
  ) : (
    <>
      <Button
        style={{
          width: `${w}px`,
          height: `${h}px`,
          fontSize: `${fontsize}px`,
          backgroundColor: `${color}`
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = hover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = color;
        }}
        disabled={disabled}
        onClick={onClick}
        className={clsx(
          `flex flex-col justify-center items-center transition-all duration-300 ease-in-out focus:outline-none`,
          {
            'rounded-full': round === true,
            'border border-gray-300': border === true
          }
        )}
      >
        {icon}
      </Button>
    </>
  );
};

export default IconButton;
