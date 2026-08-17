import { IoArrowForwardSharp } from "react-icons/io5";
import { motion } from "motion/react";
const Card = ({ width, start, para, hover = "false" }) => {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === true && "#7443ff",
        padding: "25px",
      }}
      className={`bg-zinc-700 rounded-xl p-2 ${width}   min-h-[30rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          Card
          <IoArrowForwardSharp />
        </div>
        <h1 className="text-3xl font-medium mt-5">Who we are..</h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold  tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-4 border-[1px] mt-5 border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm font-medium text-zinc-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </>
        )}
      </div>
    </motion.div>
  );
};
export default Card;
