"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import CallApi from "@/app/api/call"

export function SignIn({ className, ...props }) {
    const router = useRouter();

    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState({ email: "", password: "" });
    const [listMessage, setListMessage] = React.useState({ email: "", password: "" });

    async function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        setListMessage({ email: "", password: "" });
        let res = await CallApi.POST("auth/sign-in", data);
        if (res.status != 200) {
            toast.error(res.message, {
                position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light",
            });
        }

        if (res.status == 403) {
            let list = {};
            for (let item of res.array) {
                list[item.path] = item.msg;
            }
            setListMessage(list);
        }

        if (res.status == 200) {
            try {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('email_confirm', res.data.user.email_confirm);
            } catch (err) {
                throw new Error("ERROR CODE 2003, msg" + err.message)
            }
            router.push("/c")
        }

        setIsLoading(false);
    }

    const handleChange = event => {
        let newData = data;
        newData[event.target.id] = event.target.value;
        setData(newData);
    };

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Input
                            id="email"
                            placeholder="JonyDev@gmail.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-500"> {listMessage.email} </span>
                        <Input
                            id="password"
                            placeholder="************"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="password"
                            autoCorrect="off"
                            disabled={isLoading}
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-500"> {listMessage.password} </span>
                    </div>
                    <Button disabled={isLoading} className="dark:bg-sky-700 dark:text-white">
                        {isLoading && (<ArrowPathIcon className="h-4 w-4 mr-2" aria-hidden="true" />)}
                        Sign In{isLoading && '...'}
                    </Button>
                </div>
            </form>
        </div>
    )
}

export function SignUp({ className, ...props }) {
    const router = useRouter()

    const [isLoading, setIsLoading] = React.useState(false);
    const [data, setData] = React.useState({ email: "", password: "", full_name: "" });
    const [listMessage, setListMessage] = React.useState({ email: "", password: "", full_name: "" });

    async function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        setListMessage({ email: "", password: "" });
        let res = await CallApi.POST("auth/sign-up", data);
        if (res.status != 200) {
            toast.error(res.message, {
                position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light",
            });
        }

        if (res.status == 403) {
            let list = {};
            for (let item of res.array) {
                list[item.path] = item.msg;
            }
            setListMessage(list);
        }

        if (res.status == 200) {
            try {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('email_confirm', res.data.user.email_confirm);
            } catch (err) {
                throw new Error("ERROR CODE 2003, msg" + err.message)
            }
            router.push("/c")
        }

        setIsLoading(false);
    }

    const handleChange = event => {
        let newData = data;
        newData[event.target.id] = event.target.value;
        setData(newData);
    };

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <form onSubmit={onSubmit}>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Input
                            id="full_name"
                            placeholder="Jony Dev"
                            type="text"
                            autoCapitalize="none"
                            autoComplete="full_name"
                            autoCorrect="off"
                            disabled={isLoading}
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-500"> {listMessage.full_name} </span>
                        <Input
                            id="email"
                            placeholder="JonyDev@gmail.com"
                            type="email"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-500"> {listMessage.email} </span>
                        <Input
                            id="password"
                            placeholder="************"
                            type="password"
                            autoCapitalize="none"
                            autoComplete="password"
                            autoCorrect="off"
                            disabled={isLoading}
                            onChange={handleChange}
                        />
                        <span className="text-sm text-red-500"> {listMessage.password} </span>
                    </div>
                    <Button disabled={isLoading} className="dark:bg-sky-700 dark:text-white">
                        {isLoading && (<ArrowPathIcon className="h-4 w-4 mr-2" aria-hidden="true" />)}
                        Sign Up {isLoading && '...'}
                    </Button>
                </div>
            </form>
        </div>
    )
}