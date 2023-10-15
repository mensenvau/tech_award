"use client"

import { Card, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { useEffect, useState } from "react";
import { SkeletonDemo } from "@/app/components/skeleton";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "react-toastify";
import CallApi from "@/app/api/call"

export default function Vacancies() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [input, setInput] = useState({ q: "", env: "all" });
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleChange = event => {
        let newData = input;
        newData[event.target.id] = event.target.value;
        setInput(newData);
        router.push(`/c/vacancies?q=${input.q}&env=${input.env}`)
    };

    const handleonValueChange = event => {
        let newData = input;
        newData['env'] = event;
        setInput(newData);
        router.push(`/c/vacancies?q=${input.q}&env=${input.env}`)
    };

    let Search = async () => {
        setLoad(false);
        let res = await CallApi.GET(`jobs/list?q=${searchParams.get("q") || ""}&env=${searchParams.get("env") || "all"}`);
        if (res.status != 200) {
            toast.error(res.message, { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
        }
        if (res.status == 200) {
            setData(res.data.jobs || []);
            setLoad(true);
        }
    }

    let GoPage = (id) => {
        router.push("/c/vacancies/" + id);
    }

    useEffect(() => {
        setInput({ q: searchParams.get("q") || "", env: searchParams.get("env") || "" })
        Search();
    }, []);

    return (
        <>
            <div className="flex">
                <div className="w-full p-4">
                    <h1 className="text-2xl font-bold mb-4">Job Vacancies</h1>
                    <div className="my-10 w-full flex items-center justify-center gap-x-6">
                        <div className="w-full flex md:items-center md:flex-row flex-col sm:space-x-2 space-y-2 sm:space-y-0">
                            <Input
                                id="q"
                                type="email"
                                placeholder="Search for a vacancy ..."
                                className="h-12 drop-shadow-md"
                                defaultValue={input.q}
                                onChange={handleChange}
                                onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        Search();
                                    }
                                }}
                            />
                            <Select id="env" onValueChange={handleonValueChange} defaultValue={input.env} >
                                <SelectTrigger className="w-[180px] h-12 drop-shadow-md">
                                    <SelectValue placeholder="Website" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="hh.ru">HH.ru</SelectItem>
                                    <SelectItem value="olx.uz">Olx.uz</SelectItem>
                                    <SelectItem value="indeed.com">Indeed</SelectItem>
                                    <SelectItem value="vacancy.argos.uz">Vacancy Argos</SelectItem>
                                    <SelectItem value="telegram">Telegram</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button className="h-12 drop-shadow-md" onClick={Search} > <MagnifyingGlassIcon className="w-4 w-4 mr-2" /> Search </Button>
                        </div>
                    </div>
                    {load && (<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.map(job => (
                            <Card key={job.id} id={job.id} onClick={() => { GoPage(job.id) }} className="cursor-pointer" >
                                <CardHeader>
                                    <CardTitle> {job.name}</CardTitle>
                                    <CardDescription>{job.info}</CardDescription>
                                    <CardDescription>{job.country}</CardDescription>
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