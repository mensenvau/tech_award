"use client"

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
                Orzudagi ishni birga topamiz!
              </h1>
              <p className="mt-6 text-lg leading-8 dark:text-slate-300 text-gray-600">
                Smart Jobs sizga ish joyingizni topishda ko’maklashadi.
              </p>
              <div className="mt-10 w-11/12 flex items-center justify-center gap-x-6">
                <div className="flex w-10/12 max-w-sm items-center space-x-2">
                  <Input type="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

