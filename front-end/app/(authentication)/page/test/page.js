import { InboxIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Test() {
    return (
        <>
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold racking-tight  dark:text-white sm:text-5xl">Test</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight  dark:text-white ">This is test page!!!</h1>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/" className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm bg-gray-950 dark:bg-sky-700 ">
                            Go back home
                        </Link>
                        <Link href="mailto:support@mycontest.dev" className="flex rounded-md px-3 py-2 text-sm font-semibold dark:text-white outline dark:outline-sky-700">
                            <><InboxIcon className="h-4 w-4 mr-2" aria-hidden="true" />Contact with Support</>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
