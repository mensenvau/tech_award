export const metadata = {
    title: 'About Us - MYCONTEST',
    description: 'Theory without practice is empty; Practice without theory is blind.'
}

export default function AboutUs() {
    return (
        <>
            <div className=" light:bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">Theory without practice is empty; Practice without theory is blind</p>
                        <p className="mt-6 text-lg leading-8 dark:text-slate-300 text-gray-600">Explore and evaluate your programming skills across various domains with us. Join in and savor the joy of coding!</p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
                            <div className="relative">
                                <dt className="text-base font-semibold leading-7 dark:text-white">
                                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 dark:bg-sky-700">
                                        <span className="text-gray-50">B</span>
                                    </div>
                                    <span className="pl-10">For Business</span>
                                </dt>
                                <dd className="mt-2 text-base leading-7  dark:text-slate-300 text-gray-600">Hiring the right candidates for a job role within an organization.</dd>
                            </div>
                            <div className="relative">
                                <dt className="text-base font-semibold leading-7 dark:text-white">
                                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 dark:bg-sky-700">
                                        <span className="text-gray-50">C</span>
                                    </div>
                                    <span className="pl-10"> Compete with the Contest</span>
                                </dt>
                                <dd className="mt-2 text-base leading-7  dark:text-slate-300 text-gray-600">Further develop yourself by practicing your programming skills.</dd>
                            </div>
                            <div className="relative">
                                <dt className="text-base font-semibold leading-7 dark:text-white">
                                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 dark:bg-sky-700">
                                        <span className="text-gray-50">I</span>
                                    </div>
                                    <span className="pl-10">Mock Interview</span>

                                </dt>
                                <dd className="mt-2 text-base leading-7  dark:text-slate-300 text-gray-600">A Convenient Platform for Interviewees and Interviewers.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

        </>
    )
}
