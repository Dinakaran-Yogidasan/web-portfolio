import React, { memo } from "react";
import { portfolioData } from "../data/portfolio";
import { Calendar, Briefcase, CheckCircle2 } from "lucide-react";
import Title from "./ui/Title";

// Constants
const DATE_BADGE_CLASSES =
  "inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-bg-card text-text-title border border-border backdrop-blur-sm";

const CARD_BASE_CLASSES =
  "relative p-6 md:p-8 rounded-2xl bg-bg-card border border-border shadow-xl hover:shadow-2xl hover:border-neon-cyan/30 transition-all duration-300 group md:text-left";

const CENTER_NODE_CLASSES =
  "absolute left-2.5 md:left-1/2 top-0 w-4 h-4 rounded-full text-text-body bg-bg-card border-2 border-neon-cyan shadow-[rgba(6,182,212,0.4)] md:-translate-x-1/2 transform translate-y-2 z-10";

// Helper function
const getAlignmentClasses = (isEven: boolean) => ({
  datePosition: isEven ? "ml-auto mr-40" : "mr-auto ml-40",
  cardMargin: isEven ? "md:mr-16" : "md:ml-16",
});

// Sub-components
const DateBadge = memo(({ period }: { period: string }) => (
  <div className={DATE_BADGE_CLASSES}>
    <Calendar size={14} className="text-secondary" />
    {period}
  </div>
));
DateBadge.displayName = "DateBadge";

const DesktopDate = memo(
  ({ period, isEven }: { period: string; isEven: boolean }) => {
    const { datePosition } = getAlignmentClasses(isEven);
    return (
      <div className="hidden md:flex w-1/2 items-start justify-center pt-1">
        <div className={datePosition}>
          <DateBadge period={period} />
        </div>
      </div>
    );
  }
);
DesktopDate.displayName = "DesktopDate";

const CenterNode = memo(() => (
  <div className={CENTER_NODE_CLASSES}>
    <div className="absolute inset-0 bg-secondary opacity-50 rounded-full" />
  </div>
));
CenterNode.displayName = "CenterNode";

const MobileDate = memo(({ period }: { period: string }) => (
  <div className="md:hidden mb-4">
    <DateBadge period={period} />
  </div>
));
MobileDate.displayName = "MobileDate";

const CompanyHeader = memo(
  ({ role, company }: { role: string; company: string }) => (
    <div className="flex flex-col mb-6">
      <h3 className="text-xl md:text-2xl font-bold text-text-title group-hover:text-neon-cyan transition-colors">
        {role}
      </h3>
      <div className="flex items-center gap-2 mt-1 text-text-body font-medium">
        <Briefcase size={16} className="text-secondary" />
        <span>{company}</span>
      </div>
    </div>
  )
);
CompanyHeader.displayName = "CompanyHeader";

const DescriptionList = memo(({ descriptions }: { descriptions: string[] }) => (
  <ul className="space-y-4">
    {descriptions.map((desc, i) => (
      <li key={i} className="flex items-start gap-3">
        <CheckCircle2 size={16} className="mt-1 text-secondary shrink-0" />
        <span className="text-sm text-text-body leading-relaxed">{desc}</span>
      </li>
    ))}
  </ul>
));
DescriptionList.displayName = "DescriptionList";

const ExperienceCard = memo(
  ({
    exp,
    isEven,
  }: {
    exp: (typeof portfolioData.experience)[0];
    isEven: boolean;
  }) => {
    const { cardMargin } = getAlignmentClasses(isEven);

    return (
      <div className={`${CARD_BASE_CLASSES} ${cardMargin}`}>
        <MobileDate period={exp.period} />
        <CompanyHeader role={exp.role} company={exp.company} />
        <DescriptionList descriptions={exp.description} />
        <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-border to-transparent" />
      </div>
    );
  }
);
ExperienceCard.displayName = "ExperienceCard";

const ExperienceItem = memo(
  ({
    exp,
    index,
  }: {
    exp: (typeof portfolioData.experience)[0];
    index: number;
  }) => {
    const isEven = index % 2 === 0;

    return (
      <div
        className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
          isEven ? "md:flex-row-reverse" : ""
        }`}
      >
        <DesktopDate period={exp.period} isEven={isEven} />
        <CenterNode />
        <div className="w-full md:w-1/2 pl-20 md:pl-0">
          <ExperienceCard exp={exp} isEven={isEven} />
        </div>
      </div>
    );
  }
);
ExperienceItem.displayName = "ExperienceItem";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto md:py-24 relative overflow-hidden"
    >
      <Title
        title={portfolioData.experienceBio.title}
        subTitle={portfolioData.experienceBio.subTitle}
        titleBio={portfolioData.experienceBio.titleBio}
      />
      <div className="relative mx-auto px-4 sm:px-6">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
        <div className="space-y-12">
          {portfolioData.experience.map((exp, idx) => (
            <ExperienceItem key={exp.id} exp={exp} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
