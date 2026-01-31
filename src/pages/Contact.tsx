import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { z } from "zod";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import contactImage from "@/assets/contact.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  mobile: z.string().trim().min(10, "Valid mobile number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  fatherName: z.string().trim().min(1, "Father's name is required").max(100),
  course: z.string().trim().min(1, "Course is required").max(200),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const formReveal = useScrollReveal();
  const contactReveal = useScrollReveal();

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    mobile: "",
    email: "",
    fatherName: "",
    course: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
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
    // Handle form submission
    alert("Form submitted successfully!");
    setFormData({ name: "", mobile: "", email: "", fatherName: "", course: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar variant="solid" />

      {/* Form Section */}
      <section className="pt-32 pb-16 bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Connect</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-2 mb-4">
              Reach out to us
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about your medical education options? Our expert counsellors are ready to help you navigate your path.
            </p>
          </div>

          <div
            ref={formReveal.ref}
            className={`grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto scroll-reveal ${formReveal.isVisible ? 'is-visible' : ''}`}
          >
            {/* Form */}
            <div className="bg-secondary/20 p-8 md:p-10 rounded-2xl border border-border transition-all hover:shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
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
                  />
                  {errors.mobile && <p className="text-destructive text-sm mt-1">{errors.mobile}</p>}
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
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
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
                  />
                  {errors.fatherName && <p className="text-destructive text-sm mt-1">{errors.fatherName}</p>}
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
                  />
                  {errors.course && <p className="text-destructive text-sm mt-1">{errors.course}</p>}
                </div>

                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Send
                </Button>
              </form>
            </div>

            {/* Image */}
            <div className="hidden md:block">
              <div className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={contactImage}
                  alt="Contact us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="py-16 bg-primary">
        <div className="section-container">
          <div
            ref={contactReveal.ref}
            className={`scroll-reveal ${contactReveal.isVisible ? 'is-visible' : ''}`}
          >
            <span className="text-sm font-semibold text-primary-foreground/70 uppercase tracking-wider">Connect</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mt-2 mb-4">
              Get in touch
            </h2>
            <p className="text-primary-foreground/80 mb-12">
              We're here to guide your medical education journey
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <div>
                <div className="w-12 h-12 rounded-lg border border-primary-foreground/30 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Email</h3>
                <p className="text-primary-foreground/70 text-sm mb-2">
                  Send us your questions and we'll respond promptly
                </p>
                <a
                  href="mailto:hello@mbbs-admissions.in"
                  className="text-primary-foreground underline text-sm"
                >
                  hello@mbbs-admissions.in
                </a>
              </div>

              {/* Phone */}
              <div>
                <div className="w-12 h-12 rounded-lg border border-primary-foreground/30 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Phone</h3>
                <p className="text-primary-foreground/70 text-sm mb-2">
                  Speak directly with our counselling team during office hours
                </p>
                <a
                  href="tel:+919360711986"
                  className="text-primary-foreground underline text-sm"
                >
                  93607 11986
                </a>
              </div>

              {/* Office */}
              <div>
                <div className="w-12 h-12 rounded-lg border border-primary-foreground/30 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-primary-foreground mb-2">Office</h3>
                <p className="text-primary-foreground/70 text-sm mb-2">
                  Visit us in New Delhi to discuss your admission strategy
                </p>
                <p className="text-primary-foreground text-sm">
                  45 Institutional Area, New Delhi 110016 India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
