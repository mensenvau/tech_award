"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function HomePage() {

    const [input, setInput] = useState({ q: "" });
    const router = useRouter();

    const handleChange = event => {
        let newData = input;
        newData[event.target.id] = event.target.value;
        setInput(newData);
    };

    let GoSearch = () => {
        router.push(`/c/vacancies?q=${input.q}`)
    }

    return (
        <>
            <div className="light:bg-white">
                <div className="relative isolate px-6 pt-14 lg:px-8">
                    <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true" ></div>
                    <div className="mx-auto max-w-3xl py-20 sm:py-35 lg:py-40">
                        <div className="text-center">
                            <h1 className="font-bold tracking-tight dark:text-white-600 sm:text-5xl">
                                Let's find the dream job together!
                            </h1>
                            <p className="mt-6 text-lg leading-8 dark:text-slate-300 text-gray-600">
                                Smart Jobs will help you find your job.
                            </p>
                        </div>

                        <div className="mt-10 w-full flex items-center justify-center gap-x-2 sm:gap-x-6">
                            <div className="w-full flex md:items-center md:flex-row flex-col md:space-x-2">
                                <Input
                                    id="q"
                                    placeholder="Search for a vacancy ..."
                                    className="h-12 drop-shadow-md"
                                    onChange={handleChange}
                                    onKeyDown={(event) => {
                                        if (event.key === "Enter") {
                                            GoSearch();
                                        }
                                    }}
                                />
                                <Button type="submit" className="h-12 drop-shadow-md mt-2 sm:mt-0" onClick={GoSearch}> <MagnifyingGlassIcon className="w-4 w-4 mr-2" /> Search </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

