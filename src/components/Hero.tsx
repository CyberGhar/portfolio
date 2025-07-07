
import { Button } from "@/components/ui/button";
import { Shield, Code } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Empowering Young
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent block">
                  Cyber Warriors
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                CyberGhar provides hands-on cybersecurity and web development education 
                for students from Grade 4 to +2, building tomorrow's digital defenders.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Learning Today
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Explore Programs
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-blue-600" />
                <span className="text-sm font-medium">Cybersecurity Focus</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-teal-500" />
                <span className="text-sm font-medium">Web Development</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Cybersecurity Matrix"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600/20 to-teal-500/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
