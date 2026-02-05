import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth, db } from "@/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

export const ProtectedRoute = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                try {
                    // Check Firestore for admin privilege
                    const adminsRef = collection(db, "admins");
                    const q = query(adminsRef, where("email", "==", currentUser.email));
                    const querySnapshot = await getDocs(q);

                    let isUserAdmin = false;
                    if (!querySnapshot.empty) {
                        const adminData = querySnapshot.docs[0].data();
                        if (adminData.role === "admin") {
                            isUserAdmin = true;
                        }
                    }

                    if (isUserAdmin) {
                        setUser(currentUser);
                        setIsAdmin(true);
                    } else {
                        setUser(null);
                        setIsAdmin(false);
                        // Sign out if they are not an admin
                        await auth.signOut();
                    }
                } catch (error) {
                    console.error("Error checking admin status:", error);
                    setUser(null);
                    setIsAdmin(false);
                }
            } else {
                setUser(null);
                setIsAdmin(false);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!user || !isAdmin) {
        return <Navigate to="/admin/login" replace />;
    }

    return <Outlet />;
};
