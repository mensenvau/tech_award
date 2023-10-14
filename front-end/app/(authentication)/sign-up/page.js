import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SignUp } from "@/app/(authentication)/function/auth"
import { siteConfig } from "@/config/site"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

export const metadata = {
    title: "Create an account - SMARTJOB",
    description: "Create an account to get started.",
}

export default function RegisterPage() {
    return (
        <div className="container p-0 flex h-screen w-full flex-col items-center justify-center">
            <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), "absolute left-4 top-4 md:left-8 md:top-8")} >
                <> <ChevronLeftIcon className="h-5 w-5 mr-2" aria-hidden="true" /> Back  </>
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-2xl font-semibold tracking-tight">  Create an account </h1>
                    <p className="text-sm text-muted-foreground">
                        Enter your email below to create your account
                    </p>
                </div>
                <SignUp />
                <p className="px-8 text-center text-sm text-muted-foreground">
                    <Link href={siteConfig.signIn} className="hover:text-brand underline underline-offset-4" >  I have an account? Sign In </Link>
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