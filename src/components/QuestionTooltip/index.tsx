import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/Accordion';
import { BiSolidComment } from 'react-icons/bi';
import { Button } from '@nextui-org/react';
import { MdModeComment } from 'react-icons/md';

const QuestionTooltip = () => {
  return (
    <>
      <div className="flex justify-between items-center px-6 py-2 pb-3 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <BiSolidComment className="text-sky-300 text-3xl" />
          <h3 className="text-lg font-semibold">Q&A</h3>
        </div>
        <Button className="px-2 border border-sky-300 text-sky-300 text-md rounded-md focus:outline-none">
          View All
        </Button>
      </div>
      <div className="px-6 py-2 max-h-[200px] overflow-y-auto">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <MdModeComment className="text-sky-300" />
                Why is a smile important for first impressions?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <MdModeComment className="text-sky-300" />
                How can a fake smile be avoided?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <MdModeComment className="text-sky-300" />
                How can a fake smile be avoided?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <MdModeComment className="text-sky-300" />
                How can a fake smile be avoided?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <div className="flex items-center gap-3">
                <MdModeComment className="text-sky-300" />
                How can a fake smile be avoided?
              </div>
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default QuestionTooltip;
