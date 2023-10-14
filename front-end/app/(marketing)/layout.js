import Conatiner from '../components/container';
import Footer from '@/app/components/footer'
import Header from '@/app/components/header';

export default function RootLayout({ children }) {
    return (
        <>
            <Header />
            <Conatiner className='min-h-[80vh]'> {children} </Conatiner>
            <Footer />
        </>
    )
}
