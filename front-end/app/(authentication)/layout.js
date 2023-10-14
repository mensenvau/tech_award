import Conatiner from '@/app/components/container';

export default function AuthLayout({ children }) {
    return (
        <Conatiner >
            <div className="min-h-screen bg">{children}</div>
        </Conatiner>

    )
}