import { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolio";

type RotatingJobTitleProps = {
  titles?: string[];
  intervalMs?: number;
  className?: string;
  ariaLive?: "off" | "polite" | "assertive";
};

const RotatingJobTitle = ({
  titles: propTitles,
  intervalMs = 3000,
  className = "font-semibold text-blue-500 inline",
  ariaLive = "polite",
}: RotatingJobTitleProps) => {
  const titles = propTitles?.length ? propTitles : portfolioData.jobTitles;
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    if (!titles.length) return;
    const timer = setInterval(() => {
      setCurrentTitle((prev) => prev + 1);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [titles.length, intervalMs]);

  return (
    <span role="status" aria-live={ariaLive} className={className}>
      {titles.length ? titles[currentTitle % titles.length] : ""}
    </span>
  );
};

export default RotatingJobTitle;
