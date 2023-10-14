
"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { SkeletonDemo } from "@/app/components/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import CallApi from "@/app/api/call"
import parse from 'html-react-parser';

export default function Build() {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const router = useRouter();
    let params = useParams();

    let GetWithID = async () => {
        setLoad(false);
        let res = await CallApi.GET(`jobs/list/${params.id}`);
        if (res.status != 200) {
            toast.error(res.message, { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
        }
        if (res.status == 200) {
            setData(res.data.jobs || []);
            setLoad(true);
        }
    }

    useEffect(() => {
        GetWithID();
    }, []);


    return (
        <>
            <div className="grid sm:grid-cols-3 gap-2">
                {
                    load &&
                    <>
                        <div className="sm:col-span-2 w-full">
                            <Card >
                                <CardHeader>
                                    <CardTitle className="flex">
                                        <h5 className="text-3xl">{data.name}</h5>
                                        <a target="_blank" href={data.link} className="ml-auto flex rounded-md px-3 py-2 text-sm font-medium text-white shadow-sm bg-gray-950 dark:bg-sky-700" >
                                            Applay <LightningBoltIcon className="h-5 w-5 ml-1" aria-hidden="true" />
                                        </a>
                                    </CardTitle>
                                    <CardDescription> {data.country} - {data.info} - {data.country}</CardDescription>
                                    <CardContent className="p-0"> {parse(data.details)} </CardContent>
                                </CardHeader>
                            </Card>
                        </div>
                        <div className="sm:col-span-1 w-full">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Best Match</CardTitle>
                                    <CardDescription>45%</CardDescription>
                                    <CardContent className="p-0"> which one - a - b</CardContent>
                                </CardHeader>
                            </Card>
                        </div>
                    </>
                }
            </div >
            {!load && <SkeletonDemo className="col-span-3" />}
        </>
    )
}
