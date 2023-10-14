"use client"

import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import HomePage from './home';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) { router.push("/c"); }
  }, [])

  return (
    <>
      <HomePage />
    </>
  )
}

