import React from "react";
import Button from "./Button";

const Navbar = () => {
  const nav = ["Home", "Work", "Culture", "", "News"];
  return (
    <div className="max-w-[80%] p-4 mx-auto flex items-center border-b-[1px]  border-gray-700">
     <div className="nleft flex items-center">
       <div className="w-[6%] ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRK7atBuk1GSnDJHEH6iOWAOa0k1VUkpuad03cvyc6rQ&s=10"
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="links flex gap-14 ml-20 text-white">
        {nav.map((ele, index) =>
          ele.length === 0 ? (
            <span className="w-[1px] h-8 bg-zinc-700"></span>
          ) : (
            <a className="text-sm flex items-center gap-1" href="#">
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25em #00FF19" }}
                  className="bg-green-400 rounded-full inline-block w-1 h-1"
                ></span>
              )}
              {ele}
            </a>
          ),
        )}
      </div>
     </div>
     <Button />
    </div>
  );
};

export default Navbar;
