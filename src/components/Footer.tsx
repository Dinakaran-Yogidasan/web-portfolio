import React from "react";
import { Heart } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const Footer: React.FC = () => {
  return (
    <>
      <footer className="flex flex-col items-center justify-around w-full py-16 text-sm  dark:text-slate-500">
        <p className="flex items-center justify-center gap-2">
          {portfolioData.footer.credit}
          <Heart size={14} className="text-red-500 fill-current" />
        </p>
        <p className="mt-4 text-center">
          Copyright © {new Date().getFullYear()}. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
