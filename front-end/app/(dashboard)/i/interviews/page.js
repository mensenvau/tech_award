import * as React from "react"

import { CardInterviewer } from "./card"

export default function Interviews() {
    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            <div className="p-4">
                <CardInterviewer />
            </div>
            <div className="p-4">
                <CardInterviewer />
            </div>
            <div className="p-4">
                <CardInterviewer />
            </div>
            <div className="p-4">
                <CardInterviewer />
            </div>
            <div className="p-4">
                <CardInterviewer />
            </div>
        </div>
    )
}
