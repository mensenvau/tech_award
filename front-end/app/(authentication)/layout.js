import Conatiner from '@/app/components/container';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

export default function AuthLayout({ children }) {
    return (
        <Conatiner >
            <div className="min-h-screen bg">{children}</div>
        </Conatiner>

    )
}