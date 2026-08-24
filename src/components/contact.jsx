import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import styles from "../style.js";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      return;
    }

    setLoading(true);
    setStatus(null);

    const domainCompany = form.email.includes("@")
      ? form.email.split("@")[1].split(".")[0].toUpperCase()
      : "Direct Contact";

    const newTestimonial = {
      testimonial: form.message.trim(),
      name: form.name.trim(),
      designation: "Verified Visitor",
      company: domainCompany,
      image: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(form.name)}`,
      rating: rating,
    };

    window.dispatchEvent(new CustomEvent("add-testimonial", { detail: newTestimonial }));

    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setTimeout(() => {
        setLoading(false);
        setStatus({
          type: "success",
          message: "Thank you! Your message & rating have been posted to Testimonials!",
        });
        setForm({ name: "", email: "", message: "" });
        setRating(5);
      }, 400);
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Kripal",
          from_email: form.email,
          to_email: "kripalsingh.dev@gmail.com",
          message: `${form.message} (Rating: ${rating}/5 Stars)`,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            type: "success",
            message: "Thank you! Your message & rating have been posted to Testimonials!",
          });
          setForm({ name: "", email: "", message: "" });
          setRating(5);
        },
        (error) => {
          setLoading(false);
          console.warn("EmailJS info:", error);
          setStatus({
            type: "success",
            message: "Thank you! Your message & rating have been posted to Testimonials!",
          });
          setForm({ name: "", email: "", message: "" });
          setRating(5);
        }
      );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center pb-8 sm:pb-12">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 0.8)}
          className="bg-[#0f0c29]/90 backdrop-blur-xl rounded-[28px] p-6 sm:p-12 border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] w-full"
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>GET IN TOUCH</p>
            <h3 className={styles.sectionHeadText}>Contact & Rating.</h3>
          </motion.div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 sm:mt-8 flex flex-col gap-5 sm:gap-6"
          >
            <label className="flex flex-col gap-2">
              <span className="text-white font-semibold text-[14px] sm:text-[15px] ml-1 sm:ml-2">
                Your Name <span className="text-[#915eff]">*</span>
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your full name?"
                className="bg-[#151030]/90 py-3.5 sm:py-4 px-5 sm:px-8 placeholder:text-[#aaa6c3]/60 text-white rounded-2xl outline-none border border-white/10 focus:border-[#915eff] focus:ring-4 focus:ring-[#915eff]/20 transition-all duration-300 font-medium text-[14px] sm:text-[15px] shadow-inner"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-white font-semibold text-[14px] sm:text-[15px] ml-1 sm:ml-2">
                Your Email <span className="text-[#915eff]">*</span>
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-[#151030]/90 py-3.5 sm:py-4 px-5 sm:px-8 placeholder:text-[#aaa6c3]/60 text-white rounded-2xl outline-none border border-white/10 focus:border-[#915eff] focus:ring-4 focus:ring-[#915eff]/20 transition-all duration-300 font-medium text-[14px] sm:text-[15px] shadow-inner"
              />
            </label>

            {/* Interactive Rating Picker */}
            <div className="flex flex-col gap-2">
              <span className="text-white font-semibold text-[14px] sm:text-[15px] ml-1 sm:ml-2">
                Your Rating <span className="text-[#915eff]">*</span>
              </span>
              <div className="flex flex-wrap items-center gap-3 bg-[#151030]/90 py-3 px-5 sm:px-8 rounded-2xl border border-white/10 w-fit">
                <div className="flex gap-1.5 sm:gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="text-xl sm:text-2xl transition-transform hover:scale-125 cursor-pointer focus:outline-none p-0.5"
                    >
                      <span
                        className={
                          star <= (hoverRating || rating)
                            ? "text-[#ffd700] drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]"
                            : "text-gray-600"
                        }
                      >
                        ★
                      </span>
                    </button>
                  ))}
                </div>
                <span className="text-xs font-semibold text-[#aaa6c3] border-l border-white/10 pl-2.5 sm:pl-3">
                  {rating} / 5 Stars
                </span>
              </div>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-white font-semibold text-[14px] sm:text-[15px] ml-1 sm:ml-2">
                Your Message / Feedback <span className="text-[#915eff]">*</span>
              </span>
              <textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Share your feedback, message, or testimonial..."
                className="bg-[#151030]/90 py-3.5 sm:py-4 px-5 sm:px-8 placeholder:text-[#aaa6c3]/60 text-white rounded-2xl sm:rounded-3xl outline-none border border-white/10 focus:border-[#915eff] focus:ring-4 focus:ring-[#915eff]/20 transition-all duration-300 font-medium text-[14px] sm:text-[15px] shadow-inner resize-none"
              />
            </label>

            {status && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-3.5 sm:p-4 rounded-2xl font-medium text-xs sm:text-sm text-center border ${
                  status.type === "success"
                    ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                    : "bg-rose-500/15 text-rose-300 border-rose-500/30"
                }`}
              >
                {status.message}
              </motion.div>
            )}

            <div className="pt-3 pb-1 flex justify-start w-full">
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full sm:w-auto bg-gradient-to-r from-[#915eff] via-[#7a48ea] to-[#00cea8] py-3.5 sm:py-4 px-8 sm:px-10 rounded-full font-bold text-white text-[15px] sm:text-[16px] shadow-xl hover:shadow-[0_0_30px_rgba(145,94,255,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer overflow-hidden disabled:opacity-50"
              >
                <span>{loading ? "Sending..." : "Submit Rating & Testimonial"}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
