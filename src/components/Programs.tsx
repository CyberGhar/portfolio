
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Shield, Code } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Elementary Program",
      subtitle: "Grades 4-7",
      description: "Introduction to digital literacy, basic cybersecurity awareness, and simple web concepts.",
      duration: "6 months",
      features: [
        "Digital Safety Basics",
        "Introduction to Computers",
        "Basic Web Concepts",
        "Fun Coding Games"
      ],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Intermediate Program", 
      subtitle: "Grades 8-10",
      description: "Foundational cybersecurity concepts, HTML/CSS, and basic programming principles.",
      duration: "8 months",
      features: [
        "Web Development Basics",
        "Network Security Fundamentals", 
        "Python Programming",
        "Practical Projects"
      ],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Advanced Program",
      subtitle: "Grades 11-12 (+2)",
      description: "Advanced cybersecurity techniques, full-stack development, and career preparation.",
      duration: "12 months",
      features: [
        "Ethical Hacking Techniques",
        "Full-Stack Development",
        "Penetration Testing",
        "Industry Certifications"
      ],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Learning Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Structured learning paths designed to grow with students from elementary to advanced levels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${program.color}`}></div>
              <CardHeader className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${program.color}`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{program.duration}</span>
                </div>
                <CardTitle className="text-xl font-bold">{program.title}</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">{program.subtitle}</CardDescription>
                <p className="text-sm text-muted-foreground mt-2">{program.description}</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${program.color}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
