"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { useEffect, useState } from "react";
import { SkeletonDemo } from "@/app/components/skeleton";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation'
import CallApi from "@/app/api/call"

export default function Home() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const [input, setInput] = useState({ q: "", env: "all" });
    const router = useRouter();

    const handleChange = event => {
        let newData = input;
        newData[event.target.id] = event.target.value;
        setInput(newData);
        router.query.q = input.q
        router.push(router)
    };

    const handleonValueChange = event => {
        let newData = input;
        newData['env'] = event;
        setInput(newData);
        router.query.q = input.q
        router.push(router)
    };

    let Search = async () => {
        setLoad(false);
        let res = await CallApi.GET(`jobs/list?q=${input.q}&env=${input.env}`);
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
        Search();
    }, []);

    return (
        <>
            <div className="flex">
                <div className="w-full p-4">
                    <h1 className="text-2xl font-bold mb-4">Job Vacancies</h1>
                    <div className="my-10 w-full flex items-center justify-center gap-x-6">
                        <div className="flex grid-cols-2 w-full items-center space-x-2">
                            <Input
                                id="q"
                                type="email"
                                placeholder="Enter the position or position"
                                className="h-12 drop-shadow-md"
                                onChange={handleChange}
                            />
                            <Select id="env" onValueChange={handleonValueChange} >
                                <SelectTrigger className="w-[180px] h-12 drop-shadow-md">
                                    <SelectValue placeholder="Website" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectItem value="all">All</SelectItem>
                                    <SelectItem value="hh.ru">HH.ru</SelectItem>
                                    <SelectItem value="olx.uz">Olx.uz</SelectItem>
                                    <SelectItem value="indeed">Indeed</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button className="h-12 drop-shadow-md" onClick={Search} > <MagnifyingGlassIcon className="w-4 w-4 mr-2" /> Search </Button>
                        </div>
                    </div>
                    {load && (<div className="grid grid-cols-2 gap-4">
                        {data.map(job => (
                            <Card key={job.id} id={job.id} onClick={() => { GoPage(job.id) }} >
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