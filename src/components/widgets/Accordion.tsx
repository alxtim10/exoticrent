import { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children?: ReactNode;
}

const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-50 shadow-md rounded-md  text-sm">
      <button
        className="flex justify-between items-center focus:outline-none px-3 py-2 w-full hover:bg-white transition-all cursor-pointer focus:outline-none"
        onClick={toggleAccordion}
      >
        <div className="font-medium text-gray-900">{title}</div>
        <svg
          className={`w-3 h-3 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 text-gray-700">
          <h1>Mandiri</h1>
          <h1>Mandiri</h1>
          <h1>Mandiri</h1>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
