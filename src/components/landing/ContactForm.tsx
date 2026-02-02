import React, { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
    name: z.string().trim().min(1, "Name is required").max(100),
    mobile: z.string().trim().min(10, "Valid mobile number required").max(15),
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
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        mobile: "",
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
                    email: formData.email,
                    fatherName: formData.fatherName,
                    courseRequired: formData.course,
                    created_at: new Date().toLocaleString(),
                },
                "DF_F23GJxs_lQ91d3"
            ).catch(err => console.error("EmailJS error:", err));

            alert("Form submitted successfully!");
            setFormData({ name: "", mobile: "", email: "", fatherName: "", course: "" });
            if (onSuccess) onSuccess();
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
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
                />
                {errors.mobile && <p className="text-destructive text-[11px] font-medium mt-1 ml-1">{errors.mobile}</p>}
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
