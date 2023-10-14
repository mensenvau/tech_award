"use client"
import { useEffect, useState } from "react"
import { Card, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { Alert, AlertDescription, } from "@/components/ui/alert"
import { toast } from 'react-toastify';
import { SkeletonDemo } from "@/app/components/skeleton";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import CallApi from "@/app/api/call"


export default function Dashboard() {
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);

    let GetData = async () => {
        let res = await CallApi.GET("info/updated");
        if (res.status != 200) {
            toast.error(res.message, {
                position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light",
            });
        }
        if (res.status == 200) {
            setData(res.data.updated || []);
            setLoad(true);
        }
    }

    useEffect(() => { GetData(); }, []);

    return (
        <div className="grid grid-rows-12 grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-4">
            <div className="relative lg:col-span-8 col-span-1 mb-2">
                <div className="w-full">
                    {load && data.map((item) => (
                        <Alert className='mb-2' key={item.id}>
                            <AlertDescription>
                                <div className="flex justify-between">
                                    <span>{item.description}</span>
                                    <span>
                                        <div className="flex">
                                            {item.status == 'new' ? <BookmarkIcon className="w-4 h-4 mr-2" /> : ""}
                                            {item.savetime.split("T")[0]}
                                        </div>
                                    </span>
                                </div>
                            </AlertDescription>
                        </Alert>
                    ))}
                    {!load && <SkeletonDemo />}
                </div>
            </div>
            <div className="relative lg:col-span-4 col-span-1">
                <Card className="shadow-none">
                    <CardHeader>
                        <CardTitle>Mycontest Start #1</CardTitle>
                        <CardDescription className="dark:text-white">Developer.UZ</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div >
    )
}
