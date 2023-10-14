'use client'

import { ArrowPathIcon } from "@heroicons/react/24/outline"

export default function Loading() {
    return (
        <div className="relative">
            <div className="fixed top-0 left-0 w-full h-screen flex justify-center items-center bg-gray-100	text-slate-950">
                <ArrowPathIcon className="h-4 w-4 mr-2" aria-hidden="true" />
                <span> Processing...</span>
            </div>
        </div>
    )
}
