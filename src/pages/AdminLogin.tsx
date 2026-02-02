import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "@/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";

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

            // Check Firestore for admin privilege
            let adminDoc = await getDoc(doc(db, "admins", user.uid));

            // TEMPORARY: Auto-create admin doc if it doesn't exist (relies on temporary rules)
            if (!adminDoc.exists()) {
                try {
                    await setDoc(doc(db, "admins", user.uid), {
                        email: user.email,
                        role: "admin",
                        createdAt: serverTimestamp()
                    });
                    // Refresh the doc reference
                    adminDoc = await getDoc(doc(db, "admins", user.uid));
                } catch (err) {
                    console.log("Auto-creation failed, verify rules:", err);
                }
            }

            if (adminDoc.exists()) {
                toast({
                    title: "Login Successful",
                    description: "Welcome back, Admin!",
                });
                navigate("/admin/dashboard", { replace: true });
            } else {
                toast({
                    variant: "destructive",
                    title: "Access Denied",
                    description: "You do not have admin privileges.",
                });
                await auth.signOut();
            }
        } catch (error: any) {
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
