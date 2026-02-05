import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import SEO from "./SEO";

const AdminRedirect = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Every time someone hits /admin, we sign them out to ensure they MUST login again
        const clearSessionAndRedirect = async () => {
            await signOut(auth);
            navigate("/admin/login", { replace: true });
        };

        clearSessionAndRedirect();
    }, [navigate]);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <SEO title="Redirecting | GateOfGuidance" noindex />
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
    );
};

export default AdminRedirect;

