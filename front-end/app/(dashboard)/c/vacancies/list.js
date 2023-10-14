"use client"

import { SkeletonDemo } from "@/app/components/skeleton"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import CallApi from "@/app/api/call"


export function VacanciesFunc() {

    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);

    let GetData = async () => {
        let res = await CallApi.GET("jobs/list");
        if (res.status != 200) {
            toast.error(res.message, { position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light", });
        }
        if (res.status == 200) {
            setData(res.data.problems || []);
            setLoad(true);
        }
    }

    useEffect(() => { GetData(); }, []);


    return (
        <>
            <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 ...">
                <div class="col-span-2">01</div>
                <div class="col-span-2">02</div>
                <div>03</div>
                <div>04</div>
                <div>05</div>
            </div>
            {!load && <SkeletonDemo />}
        </>
    )
}
