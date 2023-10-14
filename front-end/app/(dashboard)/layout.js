'use client'

import Conatiner from '@/app/components/container'
import Footer from '@/app/components/footer'
import Header from '@/app/components/header';
import EmailConfirm from '../components/confirm';
import { useEffect, useState } from 'react';

export default function DashboardRootLayout({ children }) {

    const [confirm, setConfirm] = useState(1);

    useEffect(() => {
        if (localStorage.getItem("token"))
            setConfirm(localStorage.getItem("email_confirm") || 0);
    }, [])

    return (
        <>
            <Header />
            <Conatiner className="py-7 min-h-[80vh] px-0 sm:px-7">
                {confirm != 1 && <EmailConfirm />}
                {children}
            </Conatiner>
            <Footer />
        </>
    )
}
