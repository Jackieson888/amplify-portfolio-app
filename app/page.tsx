'use client';

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import IconTag from "./components/iconTag";
import iconData from "./data/skillIconData.json";

export default function Home() {
  const [active, setActive] = useState(false)
  return (
    <div className="flex flex-col w-full justify-between">
      <div className="flex items-start w-full justify-between">
        <div>
          <h1 className="text-2xl text-primary-500 font-sans font-semibold">Jackson Schacher</h1>
          <div>
            <ul>
              <li>
                <span className="font-mono text-sm">Full Stack Engineer</span>
              </li>
              <li>
                <span className="font-mono text-sm opacity-50">UI/UX Designer</span>
              </li>
              <li>
                <span className="font-mono text-sm opacity-25">Web App Dev</span>
              </li>
              <li>
                <span className="font-mono text-sm opacity-10">Software Developer</span>
              </li>
            </ul>
          </div>
        </div>
        <Image
          src="/profile-pic.png"
          alt="Jackson Schacher"
          width={128}
          height={128}
          className="rounded-md"
          loading="eager"
        />
      </div>
      <div className="flex">

        <div className="flex justify-center w-full">
          <Link
            href="/chat"
            prefetch={active ? null : false}
            onMouseEnter={() => setActive(true)}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative font-mono"
          >
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <span>AI Chat App</span>
            </button>
          </Link>
        </div>
        <div className="flex justify-center w-full">
          <Link
            href="/spotify"
            prefetch={active ? null : false}
            onMouseEnter={() => setActive(true)}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative font-mono"
          >
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
              <span>Song Questionaire App</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-wrap w-full justify-around mt-2">
          {iconData.map((icon) => (
            <IconTag iconData={icon} key={icon.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
