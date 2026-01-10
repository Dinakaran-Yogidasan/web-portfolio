import React, { useState, useCallback, memo } from "react";
import { Mail, Send, MapPin, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Title from "./ui/Title";
import { portfolioData } from "../data/portfolio";

// Constants
const FORM_FIELDS = [
  { name: "firstName", label: "First Name", placeholder: "John", type: "text" },
  { name: "lastName", label: "Last Name", placeholder: "Doe", type: "text" },
] as const;

const SUCCESS_MESSAGE_TIMEOUT = 5000;

const INPUT_CLASSES =
  "w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-text-title placeholder-text-body focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan transition-shadow";

const SUBMIT_BUTTON_CLASSES =
  "w-full px-8 py-4 rounded-full border border-border bg-primary text-white font-semibold transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "success" | "error";

// Sub-components
const ContactInfoCard = memo(
  ({
    icon: Icon,
    label,
    title,
    subtitle,
    href,
  }: {
    icon: React.ElementType;
    label: string;
    title: string;
    subtitle?: string;
    href?: string;
  }) => {
    const content = (
      <>
        <div className="p-3 bg-bg-card rounded-xl backdrop-blur-md">
          <Icon
            size={20}
            className={Icon === Mail ? "text-neon-cyan" : "text-neon-purple"}
          />
        </div>
        <div>
          <p className="text-xs text-text-body uppercase tracking-wider mb-1">
            {label}
          </p>
          <p className="font-medium text-lg text-text-title">{title}</p>
          {subtitle && <p className="text-sm text-text-body">{subtitle}</p>}
        </div>
      </>
    );

    if (href) {
      return (
        <a
          href={href}
          className="flex items-start gap-4 hover:opacity-90 transition-opacity group"
        >
          {content}
        </a>
      );
    }

    return <div className="flex items-start gap-4">{content}</div>;
  }
);
ContactInfoCard.displayName = "ContactInfoCard";

const SocialLinks = memo(() => (
  <div className="mt-10 sm:mt-12">
    <p className="text-sm text-text-body mb-4">Connect with me</p>
    <div className="flex flex-wrap gap-3">
      {portfolioData.socialLinks.map((social, i) => {
        const Icon = social.icon;
        return (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border bg-bg-card transition-colors flex items-center justify-center"
            aria-label={`Visit my ${social.label}`}
            title={`Visit my ${social.label}`}
          >
            <Icon size={20} />
          </a>
        );
      })}
    </div>
  </div>
));
SocialLinks.displayName = "SocialLinks";

const SuccessMessage = memo(({ onReset }: { onReset: () => void }) => (
  <div
    className="p-6 sm:p-8 md:p-10 rounded-3xl bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800 shadow-xl text-center"
    role="status"
    aria-live="polite"
  >
    <div className="flex justify-center mb-6">
      <CheckCircle className="text-green-600 dark:text-green-400" size={64} />
    </div>
    <h3 className="text-2xl md:text-3xl font-bold text-green-900 dark:text-green-100 mb-3">
      Thank You! 🎉
    </h3>
    <p className="text-green-800 dark:text-green-200 mb-4 text-lg">
      Your message has been sent successfully!
    </p>
    <p className="text-green-700 dark:text-green-300">
      I appreciate you reaching out. I'll get back to you as soon as possible.
    </p>
    <button
      onClick={onReset}
      className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
      aria-label="Send another message, return to form"
    >
      Send Another Message
    </button>
  </div>
));
SuccessMessage.displayName = "SuccessMessage";

const ErrorMessage = memo(() => (
  <div
    className="mb-6 p-4 bg-bg-card text-title rounded-lg border border-border"
    role="alert"
  >
    Something went wrong. Please try again later.
  </div>
));
ErrorMessage.displayName = "ErrorMessage";

const FormField = memo(
  ({
    label,
    name,
    type,
    placeholder,
    value,
    onChange,
    isTextarea = false,
  }: {
    label: string;
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    isTextarea?: boolean;
  }) => (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-text-title">
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          rows={5}
          className={`${INPUT_CLASSES} resize-none`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className={INPUT_CLASSES}
        />
      )}
    </div>
  )
);
FormField.displayName = "FormField";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    setSubmitStatus("idle");
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS configuration is missing");
        setSubmitStatus("error");
        setIsSubmitting(false);
        return;
      }

      try {
        emailjs.init(publicKey);
        await emailjs.send(serviceId, templateId, {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        });

        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), SUCCESS_MESSAGE_TIMEOUT);
      } catch {
        setSubmitStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <div
      id="contact"
      className="py-20 px-4 md:px-8 max-w-7xl mx-auto md:py-24 relative overflow-hidden"
    >
      <Title
        title={portfolioData.contact.title}
        subTitle={portfolioData.contact.subTitle}
        titleBio={portfolioData.contact.titleBio}
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {/* Contact Info Side */}
        <div className="md:col-span-2 space-y-6 sm:space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-bg-card text-title relative overflow-hidden shadow-2xl border border-border">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple rounded-full blur-[60px] opacity-20 -ml-10 -mb-10 pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-6 relative z-10 text-text-title">
              {portfolioData.contact.info}
            </h3>

            <div className="space-y-6 relative z-10">
              <ContactInfoCard
                icon={Mail}
                label="Email Me"
                title={portfolioData.contact.gmail}
                href={`mailto:${portfolioData.contact.gmail}`}
              />
              <ContactInfoCard
                icon={MapPin}
                label="Location"
                title={portfolioData.contact.location}
                subtitle="Remote Available"
              />
            </div>

            <SocialLinks />
          </div>
        </div>

        {/* Form Side */}
        <div className="md:col-span-3">
          {submitStatus === "success" ? (
            <SuccessMessage onReset={resetForm} />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-bg-card border border-border shadow-xl relative"
            >
              {submitStatus === "error" && <ErrorMessage />}

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {FORM_FIELDS.map((field) => (
                    <FormField
                      key={field.name}
                      label={field.label}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                    />
                  ))}
                </div>

                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <FormField
                  label="Message"
                  name="message"
                  type="text"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleInputChange}
                  isTextarea
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={SUBMIT_BUTTON_CLASSES}
                  aria-label={
                    isSubmitting ? "Sending message" : "Send contact message"
                  }
                >
                  <Send size={18} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
