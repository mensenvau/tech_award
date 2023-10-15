"use client"

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-menu";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import CallApi from "@/app/api/call"

export default function Resume() {

    const [data, setData] = useState({
        firt_name: "",
        last_name: "",
        phone_numer: "",
        email: "",
        description: "",
        linkedin: "",
        telegram: ""
    });

    const [desc, setDesc] = useState()

    useEffect(() => {
        let dt = JSON.parse(localStorage.getItem("data_resume"));
        setDesc(dt.description || "")
        if (dt) setData(dt);
    }, [])

    let Save = () => {
        data.description = desc
        localStorage.setItem("data_resume", JSON.stringify(data));
        CallApi.POST("jobs/save", data);
        toast.success("successfully saved!!!", { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
    }

    let buildResumeWithAI = async () => {
        let res = await CallApi.POST(`jobs/ai`, {
            text: data.description
        });

        if (res.status != 200) {
            toast.error(res.message, { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
        }

        if (res.status == 200) {
            toast.success("successfully build!!!", { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
            setDesc(res.data);
        }
    }

    const handleChange = event => {
        let newData = data;
        newData[event.target.id] = event.target.value;
        setData(newData);
    };


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
                                <Input id="firt_name" placeholder="John" defaultValue={data.firt_name} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="last_name">Last name</Label>
                                <Input id="last_name" placeholder="Doe" defaultValue={data.last_name} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="phone_numer">Phone number</Label>
                                <Input id="phone_numer" placeholder="+998995441550" defaultValue={data.phone_numer} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="email">Email address</Label>
                                <Input id="email" placeholder="JohnDoe@google.com" defaultValue={data.email} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col sm:col-span-2 space-y-1.5">
                                <div className="flex justify-between">
                                    <Label htmlFor="name">Describe yourself</Label>
                                    <Button variant="outline" onClick={buildResumeWithAI} ><SparklesIcon className="w-4 h-4 mr-1" /> Build with AI </Button>
                                </div>
                                <Textarea id="description" placeholder="Type your message here." className="min-h-[80px]" value={desc} defaultValue={desc} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="linkedin">LinkedIn</Label>
                                <Input id="linkedin" placeholder="Username" defaultValue={data.linkedin} onChange={handleChange} />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="telegram">Telegram</Label>
                                <Input id="telegram" placeholder="Username" defaultValue={data.telegram} onChange={handleChange} />
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
