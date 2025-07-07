
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "cyberghar20@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+977 9814745103",
      description: "Mon-Fri from 9am to 6pm"
    },
    {
      icon: MapPin,
      title: "Address",
      info: "Mid Baneshwor, Kathmandu",
      description: "Come visit our office"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "9:00 AM - 6:00 PM",
      description: "Monday to Friday"
    }
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    grade: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    try {
      // Replace these with your EmailJS service, template, and user IDs
      const serviceId = "service_z3xzasp";
      const templateId = "template_ku9aodi";
      const publicKey = "mn3PXdHsqwtWPso9_";
      await emailjs.send(serviceId, templateId, {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        phone: form.phone,
        grade: form.grade,
        message: form.message,
      }, publicKey);
      setResult("Message sent successfully!");
      setForm({ firstName: "", lastName: "", email: "", phone: "", grade: "", message: "" });
    } catch (error) {
      setResult("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your cybersecurity journey? Contact us today to learn more about our programs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg">
                        <item.icon className="h-5 w-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground">{item.info}</p>
                    <CardDescription className="text-sm mt-1">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">First Name</label>
                    <Input name="firstName" placeholder="Your first name" value={form.firstName} onChange={handleChange} required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                    <Input name="lastName" placeholder="Your last name" value={form.lastName} onChange={handleChange} required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input name="email" type="email" placeholder="your.email@example.com" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone</label>
                  <Input name="phone" type="tel" placeholder="Your phone number" value={form.phone} onChange={handleChange} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Grade/Level</label>
                  <Input name="grade" placeholder="Current grade or education level" value={form.grade} onChange={handleChange} />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea name="message" placeholder="Tell us about your interests and goals..." rows={4} value={form.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
                {result && <div className="text-center text-sm mt-2">{result}</div>}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
