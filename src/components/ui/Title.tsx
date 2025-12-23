import React from "react";
const Title: React.FC<{
  title: string;
  subTitle: string;
  titleBio: string;
}> = ({ title, subTitle, titleBio }) => {
  return (
    <>
      {/* Section Title */}
      <div className="mb-12 md:mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mt-6 mb-6 leading-tight">
          {title}
          <br />
          <span className="block text-blue-500">{subTitle}</span>
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          {titleBio}
        </p>
      </div>
    </>
  );
};

export default Title;
