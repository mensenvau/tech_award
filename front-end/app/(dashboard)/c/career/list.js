"use client"

import { Card, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { useEffect, useState } from "react";
import { SkeletonDemo } from "@/app/components/skeleton";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "react-toastify";
import CallApi from "@/app/api/call"

export default function Career() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [input, setInput] = useState({ q: "" });
    const router = useRouter();
    const searchParams = useSearchParams()

    const handleChange = event => {
        let newData = input;
        newData[event.target.id] = event.target.value;
        setInput(newData);
        router.push(`/c/career?q=${input.q}`)
    };

    let Search = async () => {
        setLoad(false);
        let res = await CallApi.GET(`career/list?q=${searchParams.get("q") || ""}`);
        if (res.status != 200) {
            toast.error(res.message, { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
        }
        if (res.status == 200) {
            setData(res.data.jobs || []);
            setLoad(true);
        }
    }

    let GoPage = (id) => {
        router.push("/c/career/" + id);
    }

    useEffect(() => {
        setInput({ q: searchParams.get("q") || "" })
        Search();
    }, []);

    return (
        <>
            <div className="flex">
                <div className="w-full p-4">
                    <h1 className="text-2xl font-bold mb-4">Career Research</h1>
                    <div className="my-10 w-full flex items-center justify-center gap-x-6">
                        <div className="w-full flex md:items-center md:flex-row flex-col sm:space-x-2 space-y-2 sm:space-y-0">
                            <Input
                                id="q"
                                type="email"
                                placeholder="Search for a career ..."
                                className="h-12 drop-shadow-md"
                                defaultValue={input.q}
                                onChange={handleChange}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        Search();
                                    }
                                }}
                            />
                            <Button className="h-12 drop-shadow-md" onClick={Search} > <MagnifyingGlassIcon className="w-4 w-4 mr-2" /> Search </Button>
                        </div>
                    </div>
                    {load && (<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.map(job => (
                            <Card key={job.id} id={job.id} onClick={() => { GoPage(job.id) }} >
                                <CardHeader>
                                    <CardTitle> {job.job_name}</CardTitle>
                                    <CardDescription>{job.truncated_job_details}</CardDescription>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                    )}
                    {!load && <SkeletonDemo />}
                </div>
            </div >
        </>
    )
}