import React, { useState } from "react";
import Section from "./ui/Section";
import { Mail, Send, MapPin, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import Title from "./ui/Title";
import { portfolioData } from "../data/portfolio";

const formFields = [
  { name: "firstName", label: "First Name", placeholder: "John", type: "text" },
  { name: "lastName", label: "Last Name", placeholder: "Doe", type: "text" },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section
      id="contact"
      className="py-26 md:py-24 relative overflow-hidden px-4 md:px-0"
    >
      <Title
        title={portfolioData.contact.title}
        subTitle={portfolioData.contact.subTitle}
        titleBio={portfolioData.contact.titleBio}
      />
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
        {/* Contact Info Side */}
        <div className="md:col-span-2 space-y-6 sm:space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-linear-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white relative overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-neon-purple rounded-full blur-[60px] opacity-20 -ml-10 -mb-10 pointer-events-none"></div>

            <h3 className="text-2xl font-bold mb-6 relative z-10">
              {portfolioData.contact.info}
            </h3>

            <div className="space-y-6 relative z-10">
              <a
                href="mailto:alex@example.com"
                className="flex items-start gap-4 hover:opacity-90 transition-opacity group"
              >
                <div className="p-3 bg-slate-100 dark:bg-white/10 rounded-xl backdrop-blur-md">
                  <Mail size={20} className="text-neon-cyan" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Email Me
                  </p>
                  <p className="font-medium text-lg text-slate-900 dark:text-white">
                    {portfolioData.contact.gmail}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 dark:bg-white/10 rounded-xl backdrop-blur-md">
                  <MapPin size={20} className="text-neon-purple" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-300 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="font-medium text-lg text-slate-900 dark:text-white">
                    {portfolioData.contact.location}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Remote Available
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                Connect with me
              </p>
              <div className="flex flex-wrap gap-3">
                {portfolioData.socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-slate-200 dark:border-white/10 bg-white hover:bg-slate-50 dark:bg-white/5 dark:hover:bg-white/10 transition-colors flex items-center justify-center"
                      aria-label={`Visit my ${social.label}`}
                      title={`Visit my ${social.label}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="md:col-span-3">
          {submitStatus === "success" ? (
            <div
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-linear-to-br from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border border-green-200 dark:border-green-800 shadow-xl text-center"
              role="status"
              aria-live="polite"
            >
              <div className="flex justify-center mb-6">
                <CheckCircle
                  className="text-green-600 dark:text-green-400"
                  size={64}
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-green-900 dark:text-green-100 mb-3">
                Thank You! 🎉
              </h3>
              <p className="text-green-800 dark:text-green-200 mb-4 text-lg">
                Your message has been sent successfully!
              </p>
              <p className="text-green-700 dark:text-green-300">
                I appreciate you reaching out. I'll get back to you as soon as
                possible.
              </p>
              <button
                onClick={() => setSubmitStatus("idle")}
                className="mt-6 px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                aria-label="Send another message, return to form"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              autoComplete="off"
              className="p-6 sm:p-8 md:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl relative"
            >
              {submitStatus === "error" && (
                <div
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 rounded-lg"
                  role="alert"
                >
                  Something went wrong. Please try again later.
                </div>
              )}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {formFields.map((field, i) => (
                    <div key={i} className="space-y-2">
                      <label
                        htmlFor={field.name}
                        className="text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan transition-shadow"
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan transition-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-cyan transition-shadow resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 rounded-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
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
    </Section>
  );
};

export default Contact;
