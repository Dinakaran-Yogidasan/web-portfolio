import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  return (
    <section
      id={id}
      className={`py-20 px-4 md:px-8 max-w-7xl mx-auto ${className}`}
    >
      <div>{children}</div>
    </section>
  );
};

export default Section;
