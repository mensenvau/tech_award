"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import { useState } from "react";
import CallApi from "@/app/api/call"

export default function EmilaConfirm() {

    const [isLoading, setIsLoading] = useState(true);

    let ResendEmail = async () => {
        setIsLoading(false);
        let res = await CallApi.POST("auth/email/send", {});

        if (res.status != 200) {
            toast.error(res.message, {
                position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light",
            });
        }

        if (res.status == 200) {
            toast.success(res.message, {
                position: "bottom-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, theme: "light",
            });
        }
        setIsLoading(true);
    }

    return (
        <div className="my-4">
            <Alert>
                <BellAlertIcon className="h-4 w-4" />
                <AlertTitle>Email confirmation!</AlertTitle>
                <AlertDescription className="md:flex">
                    <p className="mr-4 py-2"> Please open your email and confirm the email. If you can't find it in the Inbox, check the spam box!</p>
                    <Button variant="outline" className="mr-4 py-1 disable" onClick={ResendEmail} disabled={!isLoading} >Resent Email</Button>
                </AlertDescription>
            </Alert>
        </div >
    )
}