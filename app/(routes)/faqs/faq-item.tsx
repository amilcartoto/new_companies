// routes/faq/faq-item.tsx
"use client";

import { useState } from "react";

type FaqItemProps = {
  question: string;
  answer: string;
};

export const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`p-4 rounded-lg shadow-md mb-4 ${
        isOpen
          ? "bg-gray-200 dark:bg-gray-700" // Cambiar el fondo al expandir, dependiendo del tema
          : "bg-white dark:bg-gray-800"
      }`}
    >
      <div
        className={`font-semibold text-lg cursor-pointer ${
          isOpen ? "text-black dark:text-white" : "text-gray-800 dark:text-gray-200"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </div>
      {isOpen && (
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{answer}</p>
      )}
    </div>
  );
};
