
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Code, FileText, Users } from "lucide-react";

const CrashCourses = () => {
  const courses = [
    {
      title: "Bug Bounty Hunting",
      description: "Learn to find and report security vulnerabilities ethically.",
      duration: "4 weeks",
      level: "Intermediate",
      icon: Shield,
      topics: ["Web Application Security", "Vulnerability Assessment", "Report Writing", "Tools & Techniques"],
      popular: true
    },
    {
      title: "Dark Web Exploration",
      description: "Understanding the dark web, its risks, and safe exploration techniques.",
      duration: "3 weeks", 
      level: "Advanced",
      icon: FileText,
      topics: ["Tor Network", "Anonymous Browsing", "Security Measures", "Legal Considerations"],
      popular: true
    },
    {
      title: "OSINT Fundamentals",
      description: "Open Source Intelligence gathering techniques and tools.",
      duration: "5 weeks",
      level: "Beginner",
      icon: Users,
      topics: ["Information Gathering", "Social Media Intelligence", "Search Techniques", "Data Analysis"],
      popular: false
    },
    {
      title: "Digital Forensics",
      description: "Learn digital investigation techniques and evidence collection.",
      duration: "6 weeks",
      level: "Advanced",
      icon: Code,
      topics: ["Evidence Collection", "File Recovery", "Network Analysis", "Reporting"],
      popular: true
    },
    {
      title: "Ethical Hacking",
      description: "Comprehensive ethical hacking methodologies and practices.",
      duration: "8 weeks",
      level: "Intermediate",
      icon: Shield,
      topics: ["Penetration Testing", "System Security", "Network Hacking", "Security Assessment"],
      popular: true
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-green-100 text-green-800";
      case "Intermediate": return "bg-yellow-100 text-yellow-800";
      case "Advanced": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Crash Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Intensive courses on the most demanding cybersecurity topics to boost your skills quickly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200">
              {course.popular && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg">
                    <course.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-right">
                    <Badge className={getLevelColor(course.level)}>
                      {course.level}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{course.title}</CardTitle>
                <CardDescription className="text-sm">{course.description}</CardDescription>
                <div className="text-sm text-blue-600 font-semibold">Duration: {course.duration}</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-sm">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrashCourses;
