
import * as React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function BasicPage() {
    return (
        <div>
            <CardHeader>
                <CardTitle>Basic information</CardTitle>
                <CardDescription>Enter your basic information</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center sm:grid-cols-2	gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">First name</Label>
                            <Input id="firt_name" placeholder="John" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Last name</Label>
                            <Input id="last_name" placeholder="Doe" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Phone number</Label>
                            <Input id="phone_numer" placeholder="+998995441550" />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email address</Label>
                            <Input id="email" placeholder="JohnDoe@google.com" />
                        </div>
                        <div className="flex flex-col sm:col-span-2 space-y-1.5">
                            <Label htmlFor="name">Describe yourself</Label>
                            <Textarea placeholder="Type your message here." className="min-h-[80px]" />
                        </div>
                    </div>
                </form>
            </CardContent>
        </div>
    )
}
