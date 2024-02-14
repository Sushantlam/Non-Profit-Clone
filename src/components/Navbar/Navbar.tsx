import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo.png";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className=" w-full  h-20">
      <div className=" max-w-[1000px] h-full flex justify-between items-center mx-auto ">
        <Image src={Logo} height={200} width={200} alt="logo" />
        <div className="flex justify-between items-center gap-5">
          <ul className="flex justify-between gap-5 not-italic hover:cursor-pointer font-medium text-blue-800 ">
            <div className="flex gap-1 relative items-center justify-center">
              <li>Get Involved </li>
              <FaChevronDown size={10} />
              <div
                className={` absolute hover:opacity-100 flex  justify-center items-center  pt-12  hover:z-10 opacity-0 top-0  min-h-[100%] min-w-[100%] `}
              >
                <div className=" min-h-[100px] flex flex-col  rounded-lg   min-w-[200px] bg-blue-700 text-white text-center">
                  <div className="flex  justify-between px-4 py-2 hover:bg-white items-center">
                    <h3>Hello</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 py-2 hover:bg-white  items-center">
                    <h3>Events</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white px-4  "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 py-2 hover:bg-white items-center">
                    <h3>Indidviduals</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 hover:bg-white py-2 items-center">
                    <h3>Organization</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-1 relative items-center justify-center">
              <li>Our Impact </li>
              <FaChevronDown size={10} />
              <div
                className={` absolute hover:opacity-100 flex  justify-center items-center  pt-12  hover:z-10 opacity-0 top-0  min-h-[100%] min-w-[100%] `}
              >
                <div className=" min-h-[100px] flex flex-col  rounded-lg   min-w-[200px] bg-blue-700 text-white text-center">
                  <div className="flex  justify-between px-4 py-2 hover:bg-white items-center">
                    <h3>Hello</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 py-2 hover:bg-white  items-center">
                    <h3>Events</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white px-4  "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 py-2 hover:bg-white items-center">
                    <h3>Indidviduals</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 hover:bg-white py-2 items-center">
                    <h3>Organization</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-1 relative items-center justify-center">
              <li>Our Impact </li>
              <FaChevronDown size={10} />
              <div
                className={` absolute hover:opacity-100 flex  justify-center items-center  pt-12  hover:z-10 opacity-0 top-0  min-h-[100%] min-w-[100%] `}
              >
                <div className=" min-h-[100px] flex flex-col  rounded-lg   min-w-[200px] bg-blue-700 text-white text-center">
                  <div className="flex  justify-between px-4 py-2 hover:bg-white items-center">
                    <h3>Hello</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 py-2 hover:bg-white  items-center">
                    <h3>Events</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white px-4  "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 py-2 hover:bg-white items-center">
                    <h3>Indidviduals</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 hover:bg-white py-2 items-center">
                    <h3>Organization</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div> <div className="flex gap-1 relative items-center justify-center">
              <li>About Us </li>
              <FaChevronDown size={10} />
              <div
                className={` absolute hover:opacity-100 flex  justify-center items-center  pt-12  hover:z-10 opacity-0 top-0  min-h-[100%] min-w-[100%] `}
              >
                <div className=" min-h-[100px] flex flex-col  rounded-lg   min-w-[200px] bg-blue-700 text-white text-center">
                  <div className="flex  justify-between px-4 py-2 hover:bg-white items-center">
                    <h3>Hello</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 py-2 hover:bg-white  items-center">
                    <h3>Events</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white px-4  "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 py-2 hover:bg-white items-center">
                    <h3>Indidviduals</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                  <div className="flex  justify-between px-4 hover:bg-white py-2 items-center">
                    <h3>Organization</h3>
                    <FaChevronRight size={10} />
                  </div>
                  <hr
                    className="border-solid border-white "
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </ul>

          <button className="px-5 py-3 bg-yellow-600 uppercase font-extrabold text-white rounded-lg ">
            {" "}
            Donate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
