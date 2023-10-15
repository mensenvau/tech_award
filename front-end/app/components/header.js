"use client"

import { ThemeButton } from "@/components/theme-button"
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import { UserNav } from "./navbar";
import { useState } from 'react'
import { navigation } from "@/app/components/navigation";
import { siteConfig } from "@/config/site";
import Conatiner from "@/app/components/container";
import Link from "next/link";

export default function Header(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="inset-x-0 top-0 z-50">
            <div className=" border-b">
                <Conatiner >
                    <nav className={"flex items-center justify-between py-3"} aria-label="Global">
                        <div className="flex lg:flex-1">
                            <Link href="/" className="-m-1.5 p-2">
                                <span className="font-bold sm:inline-block">{siteConfig.name}</span>
                            </Link>
                            <div className="ml-6 hidden lg:flex lg:gap-x-4">
                                {navigation.map((item) => (
                                    <Link key={item.name} href={item.href} className="text-sm font-medium dark:text-white-600 leading-7">{item.name}</Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex lg:hidden">
                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 dark:text-white" onClick={() => setMobileMenuOpen(true)}   >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="hidden lg:flex lg:flex-1 lg:justify-end" >
                            <ThemeButton />
                            <UserNav className="ml-4" />
                        </div>
                    </nav>
                    <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                        <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-slate-950	px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <Link href="/" className="-m-1.5 p-1.5">
                                    <span className="font-bold sm:inline-block">{siteConfig.name}</span>
                                </Link>
                                <button type="button" className="-m-2.5 rounded-md p-2.5 dark:text-white" onClick={() => setMobileMenuOpen(false)}  >
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-sm font-medium dark:text-white-600 leading-7 hover:bg-gray-50" >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                    <div className="lg:flex lg:flex-1 lg:justify-end" >
                                        <UserNav className="py-4" />
                                        <ThemeButton />
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                    </Dialog>
                </Conatiner>
            </div>
        </header >
    )
}
