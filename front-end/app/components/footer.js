import Link from 'next/link';

export default function Footer() {
    return (
        <footer >

            <div className='fixed bottom-0 left-0'>
                <a href="https://info.flagcounter.com/gpBw"><img src="https://s11.flagcounter.com/count2/gpBw/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/" alt="Flag Counter" border="0" /></a>
            </div>

            <div className='my-auto mx-auto	 container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 '>
                <div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
                    <p className='text-center text-sm leading-loose md:text-left'> © 2023 SMARTJOB. All rights reserved </p>
                </div>
                <div>
                    <p className='text-center text-sm leading-loose md:text-left'>
                        <Link href='/terms' className='font-medium underline underline-offset-4'>Terms of Service</Link>{' '}|{' '}
                        <Link href='/privacy' className='font-medium underline underline-offset-4'>Privacy Policy</Link>
                    </p>
                </div>
            </div>
        </footer >
    )
}