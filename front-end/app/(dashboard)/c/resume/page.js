"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-menu";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { SparklesIcon } from "@heroicons/react/24/outline";


export default function Resume() {

    let Save = () => {

    }

    return (
        <div className="w-full flex justify-center">
            <Card className="sm:w-full sm:w-8/12">
                {/* tabs */}
                {/* {page >= 0 && page <= tabs.length && tabs[page]} */}
                <div>
                    <CardHeader>
                        <CardTitle>Basic information</CardTitle>
                        <CardDescription>Enter your basic information</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full items-center sm:grid-cols-2	gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="firt_name">First name</Label>
                                <Input id="firt_name" placeholder="John" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="last_name">Last name</Label>
                                <Input id="last_name" placeholder="Doe" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone_numer">Phone number</Label>
                                <Input id="phone_numer" placeholder="+998995441550" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email address</Label>
                                <Input id="email" placeholder="JohnDoe@google.com" />
                            </div>
                            <div className="flex flex-col sm:col-span-2 space-y-1.5">
                                <div className="flex justify-between">
                                    <Label htmlFor="name">Describe yourself</Label>
                                    <Button variant="outline" ><SparklesIcon className="w-4 h-4 mr-1" /> Build with AI </Button>
                                </div>
                                <Textarea id="description" placeholder="Type your message here." className="min-h-[80px]" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">LinkedIn</Label>
                                <Input id="linked_in" placeholder="Username" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Telegram</Label>
                                <Input id="linked_in" placeholder="Username" />
                            </div>
                        </div>
                    </CardContent>
                </div>

                <CardFooter className="flex justify-between">
                    {/* <Button onClick={backPage} variant="outline" >Back</Button> */}
                    {/* <Button onClick={nextPage}>Next</Button> */}
                    <Button onClick={Save}>Save</Button>
                </CardFooter>
            </Card>
        </div>
    )


}



/* 

  let [page, setPage] = useState(0);

    let tabs = [<BasicPage />, <EducationPage />]

    let nextPage = () => {
        setLoad(true);
        if (page + 1 < tabs.length) setPage(page + 1);
        setLoad(false);
    }

    let backPage = () => {
        setLoad(true);
        if (page - 1 >= 0) setPage(page - 1);
        setLoad(false);
    }

*/
