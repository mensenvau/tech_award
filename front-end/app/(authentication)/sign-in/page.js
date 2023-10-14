import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SignIn } from "@/app/(authentication)/function/auth"
import { siteConfig } from "@/config/site"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

export const metadata = {
    title: "Login - SMARTJOB",
    description: "Login to your account",
}

export default function LoginPage() {
    return (
        <div className="container p-0 flex h-screen w-full	flex-col items-center justify-center">
            <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), "absolute left-4 top-4 md:left-8 md:top-8")} >
                <><ChevronLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" /> Back </>
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight"> Welcome back </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email to sign in to your account
                    </p>
                </div>
                <SignIn />
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link href={siteConfig.signUp} className="hover:text-brand underline underline-offset-4" >
                        Don&apos;t have an account? Sign Up
                    </Link>
                </p>
                <p className="px-8 text-center text-sm text-muted-foreground">
                    By clicking continue, you agree to our{" "}
                    <Link href="/terms" className="hover:text-brand underline underline-offset-4" >Terms of Service </Link>{" "} and{" "}
                    <Link href="/privacy" className="hover:text-brand underline underline-offset-4" >Privacy Policy </Link>.
                </p>
            </div>
        </div>
    )
}