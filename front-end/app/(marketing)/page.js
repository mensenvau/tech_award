"use client"

import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/config/site";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) { router.push("/c"); }
  }, [])

  return (
    <>
      <div className="light:bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" ></div>
          <div className="mx-auto max-w-2xl py-20 sm:py-35 lg:py-40">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight dark:text-white-600 sm:text-5xl">
                Code, Interview, and Learn together with SMARTJOB
              </h1>
              <p className="mt-6 text-lg leading-8 dark:text-slate-300 text-gray-600">
                We help companies develop the strongest tech teams around. We help candidates sharpen their tech skills and pursue job opportunities.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href={siteConfig.signUp} className="rounded-md px-3.5 py-2.5 text-sm font-medium text-white shadow-sm bg-gray-950	dark:bg-sky-700">
                  Get started
                </Link>
                <Link href="/c/about" className="flex rounded-md px-3 py-2 text-sm font-semibold dark:text-white outline dark:outline-sky-700">
                  About Us <ChevronRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

