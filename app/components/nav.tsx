'use client'

import Link from 'next/link'
import { useState } from 'react'
import LoadingIndicator from './loading'
import Image from 'next/image'

const navItems = {
  '/gallery': {
    name: 'gallery',
  },
  '/contact': {
    name: 'contact me',
  },
}

export function Navbar() {
  const [active, setActive] = useState(false)
  return (
    <div className="lg:sticky lg:top-20">
      <nav
        className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div className="flex flex-row items-center w-full justify-between space-x-0 mr-4">
          <Link
            href="/"
            prefetch={active ? null : false}
            onMouseEnter={() => setActive(true)}
            className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative font-mono"
          >
            <Image
              src="/logo.png"
              alt="Home"
              width={64}
              height={64}
              className="rounded-md"
            /> <LoadingIndicator />
          </Link>
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                prefetch={active ? null : false}
                onMouseEnter={() => setActive(true)}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative font-mono"
              >
                {name} <LoadingIndicator />
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}