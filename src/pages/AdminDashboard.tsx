import { useEffect, useState } from "react";
import { auth, db } from "@/firebase";
import { collection, query, orderBy, onSnapshot, Timestamp, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Search, Filter, Eye, Calendar, User, Phone, Mail, GraduationCap } from "lucide-react";
import SEO from "@/components/SEO";

interface Enquiry {
    id: string;
    name: string;
    mobile: string;
    whatsapp: string;
    email: string;
    fatherName: string;
    courseRequired: string;
    createdAt: Timestamp;
}

const AdminDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterCourse, setFilterCourse] = useState("All");
    const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

    useEffect(() => {
        const q = query(
            collection(db, "consultancy_requests"),
            orderBy("createdAt", "desc")
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => {
                const docData = doc.data();
                return {
                    id: doc.id,
                    ...docData,
                    createdAt: docData.createdAt || null
                };
            }) as Enquiry[];

            setEnquiries(data);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching enquiries:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const filteredEnquiries = enquiries.filter((enquiry) => {
        const matchesSearch =
            (enquiry.name || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (enquiry.email || "").toLowerCase().includes(searchTerm.toLowerCase()) ||
            (enquiry.mobile || "").includes(searchTerm) ||
            (enquiry.whatsapp || "").includes(searchTerm);

        const matchesCourse = filterCourse === "All" || enquiry.courseRequired === filterCourse;

        return matchesSearch && matchesCourse;
    });

    const courses = ["All", ...Array.from(new Set(enquiries.map((e) => e.courseRequired).filter(Boolean)))];

    const formatDate = (timestamp: Timestamp) => {
        if (!timestamp) return "N/A";
        return timestamp.toDate().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <p className="text-slate-500 font-medium">
                    Loading enquiries...
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <SEO
                title={location.pathname.includes('enquiries') ? "Admin Enquiries | GateOfGuidance" : "Admin Dashboard | GateOfGuidance"}
                noindex
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <Card className="bg-white border-none shadow-sm">
                    <CardHeader className="p-4 md:pb-2">
                        <CardTitle className="text-xs md:text-sm font-medium text-slate-500">Total Enquiries</CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 pb-4 md:pt-0">
                        <div className="text-2xl md:text-3xl font-bold">{enquiries.length}</div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch md:items-center justify-between">
                <div className="relative flex-1 max-w-none md:max-w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                        placeholder="Search..."
                        className="pl-10 h-10 md:h-11 border-slate-200 bg-white text-sm"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-1 flex-1 md:flex-none">
                        <Filter className="w-4 h-4 text-slate-400" />
                        <select
                            className="bg-transparent border-none focus:ring-0 text-sm font-medium py-2 outline-none cursor-pointer w-full"
                            value={filterCourse}
                            onChange={(e) => setFilterCourse(e.target.value)}
                        >
                            {courses.map((course) => (
                                <option key={course} value={course}>
                                    {course}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <Card className="border-none shadow-sm bg-white overflow-hidden">
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-slate-50">
                            <TableRow>
                                <TableHead className="font-semibold text-slate-700 hidden md:table-cell text-xs">Date</TableHead>
                                <TableHead className="font-semibold text-slate-700 text-xs">Name</TableHead>
                                <TableHead className="font-semibold text-slate-700 text-xs">Course</TableHead>
                                <TableHead className="font-semibold text-slate-700 text-xs">Mobile</TableHead>
                                <TableHead className="font-semibold text-slate-700 hidden lg:table-cell text-xs">WhatsApp</TableHead>
                                <TableHead className="font-semibold text-slate-700 hidden md:table-cell text-xs">Email</TableHead>
                                <TableHead className="text-right font-semibold text-slate-700 text-xs">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredEnquiries.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-48 text-center text-slate-400">
                                        No enquiries found.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                filteredEnquiries.map((enquiry) => (
                                    <TableRow key={enquiry.id} className="hover:bg-slate-50/50 group">
                                        <TableCell className="text-slate-500 text-xs font-medium hidden md:table-cell">
                                            {formatDate(enquiry.createdAt)}
                                        </TableCell>
                                        <TableCell className="font-semibold text-slate-900 text-xs md:text-sm">
                                            {enquiry.name || "-"}
                                        </TableCell>
                                        <TableCell className="p-2 md:p-4">
                                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 text-[10px] whitespace-nowrap">
                                                {enquiry.courseRequired}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-slate-600 text-xs md:text-sm">{enquiry.mobile || "-"}</TableCell>
                                        <TableCell className="text-slate-600 hidden lg:table-cell">{enquiry.whatsapp || "-"}</TableCell>
                                        <TableCell className="text-slate-600 max-w-[200px] truncate hidden md:table-cell">{enquiry.email}</TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                                                onClick={() => setSelectedEnquiry(enquiry)}
                                            >
                                                <Eye className="w-4 h-4 md:mr-2" />
                                                <span className="hidden md:inline">View</span>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </Card>

            <Dialog open={!!selectedEnquiry} onOpenChange={() => setSelectedEnquiry(null)}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            Enquiry Details
                        </DialogTitle>
                        <DialogDescription>
                            Detailed information submitted by the candidate
                        </DialogDescription>
                    </DialogHeader>

                    {selectedEnquiry && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <User className="w-4 h-4" /> Full Name
                                    </div>
                                    <p className="text-lg font-semibold text-slate-900 border-b pb-2">{selectedEnquiry.name || "-"}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <User className="w-4 h-4" /> Father's Name
                                    </div>
                                    <p className="text-lg font-semibold text-slate-900 border-b pb-2">{selectedEnquiry.fatherName}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <GraduationCap className="w-4 h-4" /> Course Required
                                    </div>
                                    <p className="text-lg font-semibold text-primary border-b pb-2">{selectedEnquiry.courseRequired}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <Phone className="w-4 h-4" /> Mobile Number
                                    </div>
                                    <p className="text-lg font-semibold text-slate-900 border-b pb-2">{selectedEnquiry.mobile || "-"}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <Phone className="w-4 h-4 text-green-500" /> WhatsApp Number
                                    </div>
                                    <p className="text-lg font-semibold text-slate-900 border-b pb-2">{selectedEnquiry.whatsapp || "-"}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <Mail className="w-4 h-4" /> Email Address
                                    </div>
                                    <p className="text-lg font-semibold text-slate-900 border-b pb-2 truncate">{selectedEnquiry.email}</p>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                                        <Calendar className="w-4 h-4" /> Submitted Date
                                    </div>
                                    <p className="text-lg font-semibold text-slate-900 border-b pb-2">{formatDate(selectedEnquiry.createdAt)}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AdminDashboard;
