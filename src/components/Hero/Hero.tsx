import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-[550px] bg-white  relative overflow-hidden">
      <div
        className="h-full"
        style={{
          backgroundImage: `url("https://www.randomacts.org/wp-content/uploads/2015/12/DSC04808.jpg"), linear-gradient(180deg, #2b87da 0%, rgba(0, 0, 0, 0) 100%)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white py-5 text-center    bg-blue-opacity-40 w-[80%]  text-3xl absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1 rounded-lg ">
        Changing the world one random act of kindness at a time
        </h1>
      </div>
    </div>
  );
};

export default Hero;
