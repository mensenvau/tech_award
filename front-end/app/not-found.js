import { InboxIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <main className="grid min-h-[100vh] place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold racking-tight  dark:text-white sm:text-5xl">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight  dark:text-white ">Page not found</h1>
                    <p className="mt-6 text-base leading-7 dark:text-white">Sorry, we couldn’t find the page you’re looking for.</p>
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
