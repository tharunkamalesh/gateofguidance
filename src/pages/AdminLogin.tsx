import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "@/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";
import SEO from "@/components/SEO";

const AdminLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { toast } = useToast();
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        // Force logout on landing here to ensure "ask every time" behavior
        const clearAuth = async () => {
            await auth.signOut();
            setCheckingAuth(false);
        };
        clearAuth();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            console.log("Logged-in email:", user.email);

            // Check Firestore for admin privilege using email
            const adminsRef = collection(db, "admins");
            const q = query(adminsRef, where("email", "==", user.email));
            const querySnapshot = await getDocs(q);

            console.log("Firestore query result (empty?):", querySnapshot.empty);

            let isAdmin = false;

            if (!querySnapshot.empty) {
                const adminData = querySnapshot.docs[0].data();
                console.log("Admin doc data:", adminData);
                if (adminData.role === "admin") {
                    isAdmin = true;
                }
            }

            if (isAdmin) {
                toast({
                    title: "Login Successful",
                    description: "Welcome back, Admin!",
                });
                navigate("/admin/dashboard", { replace: true });
            } else {
                console.log("Access Denied: Email not found in admins or incorrect role.");
                toast({
                    variant: "destructive",
                    title: "Access Denied",
                    description: "You do not have admin privileges.",
                });
                await auth.signOut();
            }
        } catch (error: any) {
            console.error("Login error:", error);
            toast({
                variant: "destructive",
                title: "Login Failed",
                description: error.message || "Invalid credentials",
            });
        } finally {
            setLoading(false);
        }
    };

    if (checkingAuth) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-50 px-4">
            <SEO title="Admin Login | GateOfGuidance" noindex />
            <Card className="w-full max-w-md border-none shadow-2xl">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-4">
                        <div className="p-3 bg-primary/10 rounded-full">
                            <Lock className="w-8 h-8 text-primary" />
                        </div>
                    </div>
                    <CardTitle className="text-3xl font-bold">Admin Portal</CardTitle>
                    <CardDescription>
                        Enter your credentials to access the dashboard
                    </CardDescription>
                </CardHeader>
                <form onSubmit={handleLogin}>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="admin@gateofguidance.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="h-12 border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="h-12 border-slate-200 focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            type="submit"
                            className="w-full h-12 text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
};

export default AdminLogin;
