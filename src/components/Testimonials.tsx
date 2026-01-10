import React, { memo } from "react";
import { Quote, Star } from "lucide-react";
import Title from "./ui/Title";
import { portfolioData } from "../data/portfolio";

// Constants
const STAR_COUNT = 5;
const STAR_SIZE = 14;

const CARD_CLASSES =
  "relative bg-bg-card p-8 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow group";

const TOP_GRADIENT_CLASSES =
  "absolute top-0 left-0 w-full h-1 bg-linear-to-r from-neon-cyan to-neon-purple rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity";

const QUOTE_ICON_CLASSES =
  "absolute top-6 right-6 text-border h-10 w-10 rotate-180";

const AVATAR_GLOW_CLASSES =
  "absolute inset-0 bg-neon-cyan rounded-full blur opacity-20 group-hover:opacity-50 transition-opacity";

// Sub-components
const StarRating = memo(({ count = STAR_COUNT }: { count?: number }) => (
  <div className="flex gap-1 text-yellow-400 mb-4">
    {Array.from({ length: count }, (_, i) => (
      <Star key={i} size={STAR_SIZE} fill="currentColor" />
    ))}
  </div>
));
StarRating.displayName = "StarRating";

const QuoteIcon = memo(() => <Quote className={QUOTE_ICON_CLASSES} />);
QuoteIcon.displayName = "QuoteIcon";

const TestimonialText = memo(({ text }: { text: string }) => (
  <p className="relative z-10 text-text-body mb-8 leading-relaxed italic text-sm md:text-base">
    "{text}"
  </p>
));
TestimonialText.displayName = "TestimonialText";

const Avatar = memo(
  ({ avatar, author }: { avatar: string; author: string }) => (
    <div className="relative">
      <div className={AVATAR_GLOW_CLASSES} />
      <img
        src={avatar}
        alt={author}
        className="w-12 h-12 rounded-full object-cover relative z-10"
        loading="lazy"
      />
    </div>
  )
);
Avatar.displayName = "Avatar";

const AuthorInfo = memo(
  ({ author, role }: { author: string; role: string }) => (
    <div>
      <h3 className="font-bold text-text-title text-sm group-hover:text-neon-cyan transition-colors">
        {author}
      </h3>
      <p className="text-xs text-text-body uppercase tracking-wide font-medium">
        {role}
      </p>
    </div>
  )
);
AuthorInfo.displayName = "AuthorInfo";

const TestimonialCard = memo(
  ({
    testimonial,
  }: {
    testimonial: (typeof portfolioData.testimonials)[0];
  }) => (
    <div className={CARD_CLASSES}>
      <div className={TOP_GRADIENT_CLASSES} />
      <StarRating />
      <QuoteIcon />
      <TestimonialText text={testimonial.text} />

      <div className="flex items-center gap-4 mt-auto">
        <Avatar avatar={testimonial.avatar} author={testimonial.author} />
        <AuthorInfo author={testimonial.author} role={testimonial.role} />
      </div>
    </div>
  )
);
TestimonialCard.displayName = "TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <div
      id="testimonials"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto md:py-24 relative overflow-hidden"
    >
      <Title
        title={portfolioData.feedBack.title}
        subTitle={portfolioData.feedBack.subTitle}
        titleBio={portfolioData.feedBack.titleBio}
      />
      <div className="grid gap-8">
        {portfolioData.testimonials.map((testimonial, i) => (
          <TestimonialCard key={i} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
