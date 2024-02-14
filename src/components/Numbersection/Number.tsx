import React from "react";
import "./Number.css";
import { menu } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { data } from "./Data";

const Number = () => {
  interface MenuItem {
    id: number;
    title: string;
    desc?: string;
    imgBg?: string;
    textBg?: string;
    Icon?: JSX.Element;
    url: string;
    image: string; // Assuming image path is a string
  }

  const bgColorClasses: { [key: string]: string } = {
    red: "bg-red-800",
    blue: "bg-blue-800",
    green: "bg-green-800",
    // Add more mappings as needed
  };
  return (
    <div className=" w-full bg-red-100 min-h-[400px]">
      <div className=" max-w-[1000px] h-full py-10  mx-auto ">
        <div className="w-full flex flex-col justify-center items-center gap-4 sm:flex-row   sm:w-full sm:py-5 sm:flex sm:justify-between sm:gap-3 sm:items-center ">
          <div className=" text-blue-500">
            <h3 className=" text-8xl ">596</h3>
            <p className=" text-3xl text-center">2023</p>
            <p className="text-2xl text-center">Funded Acts</p>
          </div>

          {data.slice(0, 4).map((e: MenuItem, index: number) => (
            <Link
              href="/"
              className={` relative  min-h-[300px] min-w-[200px] ${
                index % 2 === 0
                  ? " rounded-tl-full rounded-tr-full rounded-bl-full "
                  : " rounded-tl-full rounded-tr-full rounded-br-full"
              }`}
              key={e.id}
            >
              <div
                className={`${
                  bgColorClasses[e.imgBg || ""] || "bg-red-800"
                } pb-2 rounded-tl-full rounded-tr-full `}
              >
                <div
                  className="relative"
                  style={{ height: "200px", width: "200px" }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1577223618563-3d858655ab86?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    fill
                    className=" overflow-hidden rounded-full object-cover"
                    sizes="(max-width:200px) 100vw"
                    priority
                    alt={e.title}
                  />
                </div>
              </div>
              <div
                className={`bg-${
                  e.textBg
                }-700 min-h-[120px] min-w-[50%]  text-white text-center text-xl font-semibold  ${
                  index % 2 === 0 ? " rounded-bl-full " : "  rounded-br-full"
                }`}
              >
                <h3> {e.title}</h3>
              </div>

              <div
                className={` absolute hover:opacity-100 flex  justify-center items-center hover:bg-black-opacity-40  hover:z-10 opacity-0 top-0  min-h-[100%] min-w-[100%] ${
                  index % 2 === 0
                    ? " rounded-tl-full rounded-tr-full rounded-bl-full "
                    : " rounded-tl-full rounded-tr-full rounded-br-full"
                }`}
                key={e.id}
              >
                <h3 className="text-center min-h-[100%]">{e.Icon}</h3>{" "}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Number;
