import * as React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardInterviewer() {
    return (
        <Card >
            <CardHeader>
                <CardTitle>Front-end</CardTitle>
                <CardDescription>This is just a test card.</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input id="name" placeholder="Name of your project" />
                        </div>
                        <div className="flex flex-col space-y-1.5">

                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button>Applay</Button>
            </CardFooter>
        </Card>
    )
}
