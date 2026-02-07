import { useNavigate, Link, useLocation } from "react-router-dom";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
    LayoutDashboard,
    Users,
    LogOut,
    ChevronRight,
    Menu,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AdminLayoutProps {
    children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { toast } = useToast();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Default to closed for mobile-first

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast({
                title: "Logged out",
                description: "You have been successfully logged out.",
            });
            navigate("/admin/login");
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Logout failed",
                description: error.message,
            });
        }
    };

    const navItems = [
        {
            label: "Dashboard",
            icon: LayoutDashboard,
            path: "/admin/dashboard",
        },
        {
            label: "Enquiries",
            icon: Users,
            path: "/admin/enquiries",
        },
    ];

    return (
        <div className="flex min-h-screen bg-slate-50">
            {/* Sidebar */}
            <aside
                className={cn(
                    "bg-white border-r border-slate-200 transition-all duration-300 flex flex-col fixed inset-y-0 z-50 lg:relative",
                    isSidebarOpen ? "w-64 translate-x-0" : "w-0 -translate-x-full lg:w-20 lg:translate-x-0"
                )}
            >
                <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <Link to="/admin" className={cn("text-xl font-bold text-primary transition-opacity", !isSidebarOpen && "lg:opacity-0")}>
                        GateOfGuidance
                    </Link>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="lg:hidden"
                    >
                        <Menu className="w-5 h-5" />
                    </Button>
                </div>

                <nav className="flex-1 p-4 space-y-2 overflow-y-auto mt-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={cn(
                                "flex items-center gap-3 p-3 rounded-lg font-medium transition-all group",
                                location.pathname === item.path
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-primary"
                            )}
                        >
                            <item.icon className={cn("w-5 h-5", location.pathname === item.path ? "text-white" : "text-slate-400 group-hover:text-primary")} />
                            <span className={cn("transition-opacity", !isSidebarOpen && "lg:hidden")}>{item.label}</span>
                            {location.pathname === item.path && isSidebarOpen && (
                                <ChevronRight className="w-4 h-4 ml-auto" />
                            )}
                        </Link>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <Button
                        variant="ghost"
                        onClick={handleLogout}
                        className={cn(
                            "w-full flex items-center gap-3 p-3 text-red-500 hover:text-red-600 hover:bg-red-50 transition-colors",
                            !isSidebarOpen && "lg:justify-center"
                        )}
                    >
                        <LogOut className="w-5 h-5" />
                        <span className={cn(!isSidebarOpen && "lg:hidden")}>Logout</span>
                    </Button>
                </div>
            </aside>

            {/* Backdrop for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-40">
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="flex"
                        >
                            <Menu className="w-5 h-5" />
                        </Button>
                        <h1 className="text-xl font-semibold text-slate-800">Admin Dashboard</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-slate-600">Admin</span>
                        </div>
                    </div>
                </header>

                <main className="flex-1 p-8 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
