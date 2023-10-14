
"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CallApi from "@/app/api/call"
import parse from 'html-react-parser';
import { SkeletonDemo } from "@/app/components/skeleton";


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

            {load && parse(data.details)}
            {!load && <SkeletonDemo />}
        </>
    )
}
