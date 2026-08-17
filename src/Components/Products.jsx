import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const Products = () => {
  const data = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta, recusandae dolores quos dicta fugit.",
      title: "Artique",
      live: true,
      c: false,
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta, recusandae dolores quos dicta fugit.",
      title: "TTL",
      live: true,
      c: true,
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta, recusandae dolores quos dicta fugit.",
      title: "Yahoo!",
      live: true,
      c: false,
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta, recusandae dolores quos dicta fugit.",
      title: "Airtel",
      live: true,
      c: true,
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta, recusandae dolores quos dicta fugit.",
      title: "Jason",
      live: true,
      c: true,
    },
  ];

  const [pos, setpos] = useState(0);
  const mover = (val) => {
    setpos(val * 23);
  };

  return (
    <div className="mt-10 relative">
      {data.map((ele, idx) => (
        <Product val={ele} key={idx} mover={mover} count={idx} />
      ))}
      <div className="absolute  top-0 w-full h-full pointer-events-none ">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="window absolute w-[23rem] h-[23rem] bg-white left-[44%] overflow-hidden rounded-xl"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-300 overflow-hidden rounded-xl"
          >
            <img
              className="w-full h-full object-cover"
              src="https://www.cssdesignawards.com/cdasites/2023/202312/20231207213535.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-400 overflow-hidden rounded-xl"
          >
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn9NClcIqvgzd_3lqu_WDuNzjNG6OqJYnwNCuEV4d0Mw&s=10"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-500 overflow-hidden rounded-xl"
          >
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ79heRatOgD-wo6CZDkVs0Mb0Q2YRGBfYRCcpWfJOdYg&s"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-600 overflow-hidden rounded-xl"
          >
            <img
              className="w-full h-full object-cover"
              src="https://www.cssdesignawards.com/cdasites/2023/202301/20230201021349.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-blue-700 overflow-hidden rounded-xl"
          >
            <img
              className="w-full h-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Xuoi5V4Fy_ahn-J27TrMs-fIoFnf7UFUvP7_DPoOnA&s=10"
              alt=""
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Products;
