import Link from "next/link";
import React from "react";

const Mission = () => {
  return (
    <div className=" w-full ">
      <div className=" flex flex-col gap-5 sm:max-w-[1000px] sm:flex-row  sm:flex md:justify-between sm:gap-10  sm:my-5   sm:mx-auto ">
        <div className="w-full px-4 sm:w-[50%] sm:min-h-[300px]  sm:py-5">
          <h3 className=" font-semibold text-center  text-2xl">Our mission</h3>
          <div className="flex justify-center">
            <hr
              className="border-solid border-green-700 my-4"
              style={{ width: "50%" }}
            />
          </div>{" "}
          <p className=" text-center">
            Random Acts inspires acts of{" "}
            <a href="#" className=" text-blue-700 underline">
              kindness around the
            </a>
            , both big and small. We provide a vast network of caring people
            with the encouragement and support they need to change lives for the
            better.
          </p>
          <p className="text-center pt-4">
            All of these acts of{" "}
            <a href="#" className=" text-blue-700 underline">
              kindness around the
            </a>
            , a message that Random Acts embodies and promotes — that you too
            can conquer the world one random act of kindness at a time.
          </p>
        </div>

        <div style={{ backgroundColor: '#541637' }} className=" w-full flex flex-col justify-center items-center gap-3 p-5  sm:min-h-[300px] sm:gap-5 sm:px-5 sm:flex sm:flex-col sm:justify-center sm:items-center  sm:w-[50%] sm:h-full">
          <h3 className="text-center text-white font-semibold text-2xl">Perform an Act of Kindness</h3>
          <p className="text-center text-white font-normal text-sm">
            We fund proposals for acts of kindness. If you have an awesome idea
            for an act of kindness, but need some assistance with funding, we
            can help you out!
          </p>
          <Link href="/" className=" py-2 px-3 bg-white text-black"> Learn more</Link>
        </div>
      </div>
    </div>
  );
};

export default Mission;
