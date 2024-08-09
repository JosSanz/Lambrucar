import Header from "../ui/system/Header";
import SideNav from "../ui/system/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-dvh layout">
            <Header></Header>
            <div className="layout__content">
                <SideNav />
                <main className="p-4">
                    {children}
                </main>
            </div>
        </div>
    );
}