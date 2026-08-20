import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import styles from "../style.js";
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { testimonials as initialTestimonials } from "../constants/index.js";

const renderStars = (ratingCount = 5) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= ratingCount ? "text-[#ffd700]" : "text-gray-600"}
      >
        ★
      </span>
    );
  }
  return stars;
};

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  rating = 5,
  onDelete,
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="relative group bg-gradient-to-b from-[#151030] to-[#0d0927] p-8 rounded-3xl border border-white/10 hover:border-[#915eff]/50 transition-all duration-300 shadow-xl hover:shadow-[0_10px_30px_rgba(145,94,255,0.25)] hover:-translate-y-2 flex flex-col justify-between h-full"
  >
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#915eff] to-[#00cea8] flex items-center justify-center text-white font-serif text-2xl font-bold shadow-md">
          “
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 text-sm tracking-widest">
            {renderStars(rating)}
          </div>
          <button
            onClick={() => onDelete(name)}
            title="Delete testimonial"
            aria-label={`Delete testimonial from ${name}`}
            className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/20 rounded-full transition-all duration-200 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>

      <p className="text-white text-[15px] sm:text-[16px] leading-[26px] tracking-wide font-normal mb-6 break-words">
        "{testimonial}"
      </p>
    </div>

    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
      <div className="flex flex-col overflow-hidden">
        <h4 className="text-white font-semibold text-[16px] flex items-center gap-1 truncate">
          <span className="text-[#00cea8]">@</span> {name}
        </h4>
        <p className="text-[#aaa6c3] text-[13px] font-medium mt-0.5 truncate">
          {designation} at <span className="text-white">{company}</span>
        </p>
      </div>

      <div className="relative w-12 h-12 rounded-full p-[2px] bg-gradient-to-r from-[#915eff] to-[#00cea8] shrink-0">
        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [testimonialList, setTestimonialList] = useState(initialTestimonials);

  useEffect(() => {
    const handleAddTestimonial = (e) => {
      if (e.detail) {
        setTestimonialList((prev) => [e.detail, ...prev]);
      }
    };

    window.addEventListener("add-testimonial", handleAddTestimonial);
    return () => {
      window.removeEventListener("add-testimonial", handleAddTestimonial);
    };
  }, []);

  const handleDelete = (nameToDelete) => {
    setTestimonialList((prev) => prev.filter((item) => item.name !== nameToDelete));
  };

  const handleReset = () => {
    setTestimonialList(initialTestimonials);
  };

  const avgRating = testimonialList.length
    ? (
        testimonialList.reduce((acc, item) => acc + (item.rating || 5), 0) /
        testimonialList.length
      ).toFixed(1)
    : "5.0";

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-[#0f0c29]/80 backdrop-blur-lg rounded-[28px] p-6 sm:p-10 border border-white/5 shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>WHAT OTHERS SAY</p>
              <div className="flex flex-wrap items-center gap-4">
                <h2 className={styles.sectionHeadText}>Testimonials.</h2>
                {testimonialList.length > 0 && (
                  <div className="flex items-center gap-2 bg-[#151030] px-4 py-1.5 rounded-full border border-white/10 shadow-md">
                    <span className="text-[#ffd700] text-sm font-bold">★ {avgRating}</span>
                    <span className="text-secondary text-xs">({testimonialList.length} reviews)</span>
                  </div>
                )}
              </div>
            </motion.div>

            {testimonialList.length !== initialTestimonials.length && (
              <button
                onClick={handleReset}
                className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#915eff] to-[#00cea8] rounded-xl hover:opacity-90 transition-opacity shadow-md cursor-pointer"
              >
                Reset Testimonials
              </button>
            )}
          </div>

          {testimonialList.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <AnimatePresence>
                {testimonialList.map((testimonial, index) => (
                  <FeedbackCard
                    key={`${testimonial.name}-${index}`}
                    index={index}
                    {...testimonial}
                    onDelete={handleDelete}
                  />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="mt-10 py-12 text-center text-secondary bg-[#151030]/50 rounded-2xl border border-white/5">
              <p className="text-lg">All testimonials have been removed.</p>
              <button
                onClick={handleReset}
                className="mt-4 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-[#915eff] to-[#00cea8] rounded-xl hover:opacity-90 transition-opacity shadow-md cursor-pointer"
              >
                Restore Testimonials
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedback");