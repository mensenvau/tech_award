
"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { SkeletonDemo } from "@/app/components/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { toast } from "react-toastify";
import CallApi from "@/app/api/call"
import parse from 'html-react-parser';

export default function Build() {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    let params = useParams();

    let GetWithID = async () => {
        setLoad(false);
        let res = await CallApi.GET(`career/list/${params.id}`);
        if (res.status != 200) {
            toast.error(res.message, { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
        }
        if (res.status == 200) {
            setData(res.data || []);
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
                        <div className="sm:col-span-3 w-full">
                            <Card >
                                <CardHeader>
                                    <CardTitle className="flex">
                                        <p className="text-3xl">{data.info.job_name}</p>
                                    </CardTitle>
                                    <CardContent className="p-0">
                                        {data.info.job_details} <br /> {data.info.job_requirement}
                                    </CardContent>

                                    <div className="divider"></div>

                                    <CardContent className="p-0 my-10">
                                        <p className="text-base"><b>Required skills</b></p>
                                        {
                                            data.skills.map(item => (
                                                <Badge key={item.id} variant="secondary" className="text-sm m-2" >{item.skill_name}</Badge>
                                            ))
                                        }
                                    </CardContent>

                                    <div className="divider"></div>

                                    <CardContent className="p-0 my-10">
                                        <p className="text-base"><b>Where can you work?</b></p>
                                        <div className="grid grid-cols-2 sm:grid-cols-4">
                                            {
                                                data.areas.map(item => (
                                                    <p key={item.id} variant="secondary" className="text-sm m-2" >- {item.job_work_area}</p>
                                                ))
                                            }
                                        </div>
                                    </CardContent>

                                    <div className="divider"></div>

                                    <CardContent className="p-0 my-10">
                                        <p className="text-base"><b>Answers to frequently asked questions</b></p>
                                        <Accordion type="single" collapsible>
                                            {
                                                data.faq.map(item => (
                                                    <AccordionItem value={"item-" + item.id} key={item.id}>
                                                        <AccordionTrigger>{item.question}</AccordionTrigger>
                                                        <AccordionContent>s
                                                            {item.answer}
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ))
                                            }
                                        </Accordion>
                                    </CardContent>
                                </CardHeader>
                            </Card>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                {data.link.map(item => (
                                    <Card key={item.id} className="cursor-pointer">
                                        <CardHeader>
                                            <CardTitle>{item.info}</CardTitle>
                                            <CardDescription>
                                                <a className="link" href={item.link} target="_blank">Learning more ...</a>
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>

                        </div>
                    </>
                }
            </div >
            {!load && <SkeletonDemo className="col-span-3" />}
        </>
    )
}
