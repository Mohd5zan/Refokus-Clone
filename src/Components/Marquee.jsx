import { motion } from "motion/react";
const Marquee = ({ imgurls, direction }) => {
  return (
    <div className="flex w-full  overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? " 0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : " 0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex shrink-0 gap-40 py-10 pr-40"
      >
        {imgurls.map((url, index) => {
          return (
            <img
              src={url}
              key={index}
              alt=""
              className="w-32 h-16 object-contain"
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? " 0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : " 0" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        className="flex shrink-0 gap-40 py-10 pr-40"
      >
        {imgurls.map((url, index) => {
          return (
            <img
              src={url}
              key={index}
              alt=""
              className="w-32 h-16 object-contain"
            />
          );
        })}
      </motion.div>
    </div>
  );
};
export default Marquee;
