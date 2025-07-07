
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Code, Users, FileText } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Cybersecurity Education",
      description: "Comprehensive cybersecurity training from basics to advanced concepts, tailored for young minds.",
      features: ["Ethical Hacking", "Digital Forensics", "OSINT Training", "Bug Bounty Programs"]
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Learn modern web development technologies and build real-world projects.",
      features: ["Frontend Development", "Backend Programming", "Database Management", "Responsive Design"]
    },
    {
      icon: Users,
      title: "FYP Development",
      description: "Complete assistance for Final Year Projects with mentorship and technical guidance.",
      features: ["Project Planning", "Technical Mentorship", "Code Review", "Documentation Support"]
    },
    {
      icon: FileText,
      title: "Coursework Assistance",
      description: "Academic support for computer science and cybersecurity coursework.",
      features: ["Assignment Help", "Concept Clarification", "Practical Labs", "Exam Preparation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational services designed to provide practical, hands-on experience 
            in cybersecurity and web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-sm">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
