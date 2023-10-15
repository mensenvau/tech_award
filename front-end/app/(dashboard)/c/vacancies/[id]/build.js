
"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { SkeletonDemo } from "@/app/components/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import CallApi from "@/app/api/call"
import parse from 'html-react-parser';
import { Badge } from "@/components/ui/badge";

export default function Build() {

    const [data, setData] = useState([]);
    const [match, setMatch] = useState([]);

    const [load, setLoad] = useState(false);
    let params = useParams();

    let GetWithID = async () => {
        setLoad(false);
        let res = await CallApi.GET(`jobs/list/${params.id}`);
        if (res.status != 200) {
            toast.error(res.message, { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
        }
        if (res.status == 200) {
            setData(res.data.jobs || []);
            setMatch(res.data.match || []);
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
                                        <a target="_blank" href={data.link} className="max-h-9 ml-auto flex rounded-md px-3 py-2 text-sm font-medium text-white shadow-sm bg-gray-950 dark:bg-sky-700" >
                                            Apply <LightningBoltIcon className="h-5 w-5 ml-1" aria-hidden="true" />
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
                                    <CardTitle className="mb-2">{match.category} match</CardTitle>
                                    <CardContent className="p-0">
                                        <div className="grid grid-cols-3 gap-2">
                                            {match.check.map((item) => (
                                                <Badge className={item.is ? 'text-green-600' : 'text-rose-600'} variant="secondary">{item.name}</Badge>
                                            ))}
                                        </div>
                                    </CardContent> <br />
                                    <CardDescription className="flex justify-center	flex-col my-4">
                                        <span>Matching with job requirement: {match.matching_percentage}%</span>
                                        <progress className="w-full mt-4 progress progress-success  w-56" value={match.matching_percentage} max="100"></progress>
                                    </CardDescription>
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
