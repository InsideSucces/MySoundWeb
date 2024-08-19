import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, ReactPortal, Key } from "react";

type AccordionItems = {
  title: string;
  content: string;
}[];
const CustomAccordion = ({ items }: { items: AccordionItems }) => {
  return (
    <div className="mx-auto max-w-full p-4 sm:p-6 xl:p-12">
      <h2 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold font-roboto capitalize mb-4 sm:mb-8">FAQs</h2>

      <Accordion variant="shadow" className="w-full max-w-[920px] mx-auto">
        {items.map((item, index: Key | null | undefined) => (
          <AccordionItem
            key={index}
            aria-label={item.title}
            className="mb-4 sm:mb-6 md:mb-9"
            title={<span className="font-semibold text-[#61C1C8] text-lg sm:text-xl md:text-[22px]">{item.title}</span>}
            indicator={({ isOpen }) => (
              <span className={`text-[#61C1C8] text-lg sm:text-xl md:text-[22px] font-extrabold ${isOpen ? 'rotate-90' : ''}`}>{'>'}</span>
            )}
          >
            <p className="text-base sm:text-lg md:text-[20px]">{item.content}</p>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

  );
};

export default CustomAccordion;