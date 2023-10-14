"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SkeletonDemo } from "@/app/components/skeleton";
import EducationPage from "./education";
import BasicPage from "./basic";


export default function Resume() {

    let [page, setPage] = useState(0);
    let [load, setLoad] = useState(false);

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

    return (
        <div className="w-full flex justify-center">
            <Card className="sm:w-full sm:w-8/12">
                {/* tabs */}
                {page >= 0 && page <= tabs.length && tabs[page]}
                {load && <SkeletonDemo />}

                <CardFooter className="flex justify-between">
                    <Button onClick={backPage} variant="outline" >Back</Button>
                    <Button onClick={nextPage}>Next</Button>
                </CardFooter>
            </Card>
        </div>
    )


}


