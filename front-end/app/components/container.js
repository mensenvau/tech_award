export default function Conatiner({ className, children }) {
    return (
        <div className={`container mx-auto 2xl:w-3/4 ${className}`} >
            {children}
        </div>
    )
}