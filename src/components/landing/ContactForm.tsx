import React, { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100),
    mobile: z.string().trim().min(10, "Valid mobile number required").max(15),
    whatsapp: z.string().trim().min(10, "Valid WhatsApp number required").max(15),
    email: z.string().trim().email("Valid email required").max(255),
    fatherName: z.string().trim().min(1, "Father's name is required").max(100),
    course: z.string().trim().min(1, "Course is required").max(200),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactFormProps {
    onSuccess?: () => void;
    className?: string;
}

export const ContactForm = ({ onSuccess, className }: ContactFormProps) => {
    const { toast } = useToast();
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        mobile: "",
        whatsapp: "",
        email: "",
        fatherName: "",
        course: "",
    });
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof ContactFormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = contactSchema.safeParse(formData);
        if (!result.success) {
            const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
            result.error.errors.forEach((err) => {
                if (err.path[0]) {
                    fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
                }
            });
            setErrors(fieldErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            await addDoc(collection(db, "consultancy_requests"), {
                name: formData.name,
                mobile: formData.mobile,
                whatsapp: formData.whatsapp,
                email: formData.email,
                fatherName: formData.fatherName,
                courseRequired: formData.course,
                createdAt: serverTimestamp(),
            });

            // Send admin notification email
            emailjs.send(
                "service_55sekqb",
                "template_ff0plvc",
                {
                    name: formData.name,
                    mobile: formData.mobile,
                    whatsapp: formData.whatsapp,
                    email: formData.email,
                    fatherName: formData.fatherName,
                    courseRequired: formData.course,
                    created_at: new Date().toLocaleString(),
                },
                "DF_F23GJxs_lQ91d3"
            ).catch(err => console.error("Admin EmailJS error:", err));

            // Send user auto-reply email (Please replace 'INSERT_TEMPLATE_ID' with your actual User Auto-Reply Template ID)
            emailjs.send(
                "service_55sekqb",
                "template_9t522be",
                {
                    name: formData.name,
                    email: formData.email, // Ensure your template uses {{email}} or {{to_email}}
                    to_name: formData.name,
                },
                "DF_F23GJxs_lQ91d3"
            ).catch(err => console.error("User Auto-Reply EmailJS error:", err));

            toast({
                title: (
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-1 ring-1 ring-green-500/20 animate-in zoom-in spin-in-12 duration-500">
                            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                        </div>
                        <span className="text-xl font-bold text-slate-900 tracking-wide">Submitted Successfully</span>
                    </div>
                ) as any,
                description: (
                    <div className="text-center text-slate-500 text-base mt-2">
                        Your response has been submitted.<br />Our team will contact you shortly.
                    </div>
                ) as any,
                className: "bg-white border-slate-200 text-slate-900 py-8 px-6 flex flex-col items-center justify-center shadow-2xl min-h-[220px]",
            });

            setFormData({ name: "", mobile: "", whatsapp: "", email: "", fatherName: "", course: "" });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Submission Failed",
                description: "There was an error sending your enquiry. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} autoComplete="off">
            <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm font-semibold text-slate-700 ml-1">
                    Name
                </Label>
                <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all"
                    placeholder="Your full name"
                    autoComplete="off"
                />
                {errors.name && <p className="text-destructive text-[11px] font-medium mt-1 ml-1">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="mobile" className="text-sm font-semibold text-slate-700 ml-1">
                    Mobile Number
                </Label>
                <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all"
                    placeholder="10-digit number"
                    autoComplete="off"
                />
                {errors.mobile && <p className="text-destructive text-[11px] font-medium mt-1 ml-1">{errors.mobile}</p>}
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="whatsapp" className="text-sm font-semibold text-slate-700 ml-1">
                    WhatsApp Number
                </Label>
                <Input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all"
                    placeholder="WhatsApp number"
                    autoComplete="off"
                />
                {errors.whatsapp && <p className="text-destructive text-[11px] font-medium mt-1 ml-1">{errors.whatsapp}</p>}
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm font-semibold text-slate-700 ml-1">
                    Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all"
                    placeholder="your.email@example.com"
                    autoComplete="off"
                />
                {errors.email && <p className="text-destructive text-[11px] font-medium mt-1 ml-1">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="fatherName" className="text-sm font-semibold text-slate-700 ml-1">
                    Father's Name
                </Label>
                <Input
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all"
                    placeholder="Father's full name"
                    autoComplete="off"
                />
                {errors.fatherName && <p className="text-destructive text-[11px] font-medium mt-1 ml-1">{errors.fatherName}</p>}
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="course" className="text-sm font-semibold text-slate-700 ml-1">
                    Course Required
                </Label>
                <Input
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all"
                    placeholder="e.g. MBBS Abroad, Domestic MBBS"
                    autoComplete="off"
                />
                {errors.course && <p className="text-destructive text-[11px] font-medium mt-1 ml-1">{errors.course}</p>}
            </div>

            <Button
                type="submit"
                className="w-full h-12 bg-[#1e293b] hover:bg-[#0f172a] text-white font-bold rounded-xl mt-4 shadow-lg shadow-slate-200 transition-all active:scale-[0.98]"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
            </Button>
        </form>
    );
};
