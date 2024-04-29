export default function AuthLayout({
    children
}: {
    children:React.ReactNode
}){
    return(
        <div className="mt-24 pt-20 pb-20 flex items-center justify-center h-full">
            {children}
        </div>
    )
}