import { InboxIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function WaitSoon() {
    return (
        <>
            <main className="grid min-h-[50vh] place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <h1 className="mt-4 text-3xl font-bold tracking-tight  dark:text-white ">The page is pending</h1>
                    <p className="mt-6 text-base leading-7 dark:text-white">Submitted to use soon, sorry for the inconvenience.</p>
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
