export default function DashboardLayout({
    children,
}:{
    children: React.ReactNode
}){
    return(
        <section className="my-4 h-[80vh]">
            <nav className="border p-4 rounded-md max-w-64 w-full text-center h-full inline-grid items-center justify-center">side bar</nav>
            {children}
        </section>
    )

}