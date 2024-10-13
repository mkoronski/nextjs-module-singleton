'use client';
import {Navigation} from "@/app/components/navigation";

const PagesLayout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => (
    <div className="flex flex-col gap-10 m-5">
        <Navigation/>
        <main>
            {children}
        </main>
    </div>
)
export default PagesLayout;
