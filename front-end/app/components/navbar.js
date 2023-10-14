import { Avatar, AvatarFallback, AvatarImage, } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button"
import { SkeletonSmall } from "./skeleton";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function UserNav({ className }) {
    const router = useRouter();
    const [isUser, setIsUser] = useState(0);
    const [user, setUser] = useState({});

    useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem("user")) {
            setIsUser(1);
            setUser(JSON.parse(localStorage.getItem("user")))
        } else {
            setIsUser(2);
        }
    }, []);

    let LogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/")
    }

    return (
        <div className={className} >
            {isUser == 1 && (
                < DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={siteConfig.apiURL + user.image} alt="@shadcn" />
                                <AvatarFallback>{user.full_name[0].toUpperCase()}</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="end" forceMount>
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                                <p className="text-sm font-medium leading-none">{user.full_name}</p>
                                <p className="text-xs leading-none text-muted-foreground"> {user.email}  </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                Profile
                                <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem>New Team</DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={LogOut}>
                            Log out
                            <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
            }
            {isUser == 2 && (
                <div>
                    <Link href={siteConfig.signIn} className="flex rounded-md px-3 py-2 text-sm font-medium text-white shadow-sm bg-gray-950 dark:bg-sky-700" >
                        Log In <ArrowRightOnRectangleIcon className="h-5 w-5 ml-1" aria-hidden="true" />
                    </Link>
                </div>)
            }

            {
                isUser == 0 && (
                    <SkeletonSmall />
                )
            }

        </div >
    )
}