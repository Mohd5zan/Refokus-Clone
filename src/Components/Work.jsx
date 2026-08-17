import { useScroll } from "motion/react";
import { useState } from "react";

const Work = () => {
  const [images, setimages] = useState([
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4Bb5n6uEeZjsjV2jNZe_KBV2Zfnqs2V9ShKcucBOmQ&s=10",
      top: "50%",
      left: "50%",
      isActive: true,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLvChT7rJGUoYGnDSdv8LtaL1oPhBkAklJHRJ27ACnlg&s=10",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Xuoi5V4Fy_ahn-J27TrMs-fIoFnf7UFUvP7_DPoOnA&s=10",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu2K7EmUs__1TklVQAvj0q7utL8jOCUvGdjHkCxM-G6A&s",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets.awwwards.com/awards/submissions/2023/01/63c91d237468e623901138.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4rMZq_3dbtiT37LIvzFOCOt2Iqf6Hf58d-KuY5S85Jg&s=10",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showImages(arr) {
      setimages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true },
        ),
      );
    }
    switch (Math.floor(data * 100)) {
      case 0:
        showImages([]);
        break;
      case 1:
        showImages([0]);
        break;
      case 2:
        showImages([0, 1]);
        break;
      case 3:
        showImages([0, 1, 2]);
        break;
      case 4:
        showImages([0, 1, 2, 3]);
        break;
      case 6:
        showImages([0, 1, 2, 3, 4]);
        break;
      case 8:
        showImages([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className=" w-full mt-10">
      <div className="relative max-w-[80%] mx-auto ">
        <h1 className="text-center font-medium text-white text-[30vw] leading-none tracking-tight select-none">
          work
        </h1>
        <div className="absolute w-full  h-full top-0">
          {images.map((ele, idx) => {
            return (
              ele.isActive && (
                <img
                  src={ele.url}
                  alt=""
                  key={idx}
                  style={{ top: ele.top, left: ele.left }}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Work;
