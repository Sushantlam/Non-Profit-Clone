import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./News.css";
import { FaCalendar, FaUserAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const News = () => {
  interface MenuItem {
    id: number;
    title: string;
    desc?: string;
    url: string;
    image: string; // Assuming image path is a string
  }

  return (
    <div className="w-full">
      <div className="w-full sm:max-w-[1000px]  sm:py-10 sm:mx-auto">
        <h3 className=" text-5xl py-4 text-blue-600 font-medium">News</h3>
        <div className=" w-full flex flex-col justify-center items-center gap-4 py-4 sm:flex-row  sm:flex sm:justify-between sm:gap-4 ">
          {menu.slice(0, 3).map((e: MenuItem) => (
            <>
             <Link
  href="/"
  className=" min-h-[400px] w-[250px]  flex flex-col justify-between rounded-lg bg-white border border-gray-200 hover:rounded-none sm:w-full sm:min-h-auto"
>
                <div className="w-[250px] min-h-[400px] sm:w-[250px] sm:min-h-[800px]">
                <div
                  className="relative"
                  style={{ height: "30%", width: "250px" }}
                  id="imageHover"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1577223618563-3d858655ab86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    width={260}
            height={16}
            layout='responsive'
                    alt={e.title}
                  />
                  <h1 className="text-white absolute top-1 left-2 text-sm p-1 rounded-lg border border-gray-200">
                    Kindness Stories
                  </h1>
                </div>
                <div className="flex mt-2 gap-2 justify-between items-start py-2 px-3">
                  <div className="flex flex-col gap-5 px-4">
                    <h4 className=" text-purple-500 font-medium">
                      Children’s Novels for the Oglala Lakota College Library’s
                      Children’s Book Project
                    </h4>
                    <p className="text-gray-500">{e.desc?.substring(0, 100)}</p>
                    <span className="text-yellow-500">Read More</span>
                  </div>
                </div>
                </div>
                <div className="flex justify-between items-center px-4 py-2 border border-t-2  ">
                <FaUserAlt size={10} color="gray" />
                <p className=" text-sm font-semibold text-yellow-700">Sushant  </p>
                <hr
  className="border-solid border-gray-700 my-4"
  style={{ height: "50%", width: "1px", transform: "rotate(90deg)" }}
/>
<FaCalendar size={10} color="gray" />
                <p className=" text-sm font-thin text-gray-500">24/12/1999  </p>
                <hr
  className="border-solid border-gray-700 my-4"
  style={{ height: "50%", width: "1px", transform: "rotate(90deg)" }}
/>
<FaMessage size={10} color="gray" />
                <p className=" text-sm font-thin text-gray-500">0  </p>
                <hr
  className="border-solid border-gray-700 my-4"
  style={{ height: "50%", width: "1px", transform: "rotate(90deg)" }}
/>
                </div>
              </Link>
            </>
          ))}
          <iframe
            src="https://www.randomacts.org/"
          
            className="w-full sm:w-[250px] sm:max-h-[800px]"
            title="Iframe Example"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default News;
