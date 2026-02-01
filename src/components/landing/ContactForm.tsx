import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        alert("Form submitted successfully!");
        setFormData({ name: "", mobile: "", email: "", fatherName: "", course: "" });
        setIsSubmitting(false);
        if (onSuccess) onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
            <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                </Label>
                <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 border-border"
                    placeholder="Your full name"
                />
                {errors.name && <p className="text-destructive text-[12px] mt-1">{errors.name}</p>}
            </div>

            <div>
                <Label htmlFor="mobile" className="text-sm font-medium text-foreground">
                    Mobile Number
                </Label>
                <Input
                    id="mobile"
                    name="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="mt-1 border-border"
                    placeholder="10-digit number"
                />
                {errors.mobile && <p className="text-destructive text-[12px] mt-1">{errors.mobile}</p>}
            </div>

            <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                </Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 border-border"
                    placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-destructive text-[12px] mt-1">{errors.email}</p>}
            </div>

            <div>
                <Label htmlFor="fatherName" className="text-sm font-medium text-foreground">
                    Father's Name
                </Label>
                <Input
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="mt-1 border-border"
                    placeholder="Father's full name"
                />
                {errors.fatherName && <p className="text-destructive text-[12px] mt-1">{errors.fatherName}</p>}
            </div>

            <div>
                <Label htmlFor="course" className="text-sm font-medium text-foreground">
                    Course Required
                </Label>
                <Input
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="mt-1 border-border"
                    placeholder="e.g. MBBS Abroad, Domestic MBBS"
                />
                {errors.course && <p className="text-destructive text-[12px] mt-1">{errors.course}</p>}
            </div>

            <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-2"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
            </Button>
        </form>
    );
};
