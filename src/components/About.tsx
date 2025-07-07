
const About = () => {
  const stats = [
    { number: "500+", label: "Students Trained" },
    { number: "50+", label: "Projects Completed" },
    { number: "95%", label: "Success Rate" },
    { number: "4.9/5", label: "Student Rating" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About CyberGhar
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  CyberGhar is an innovative EdTech startup dedicated to providing practical, 
                  hands-on experience in cybersecurity and web development. We believe that 
                  learning should be engaging, accessible, and relevant to real-world challenges.
                </p>
                <p className="text-lg leading-relaxed">
                  Our mission is to empower the next generation of digital defenders by starting 
                  education early and building strong foundational skills. From Grade 4 to +2, 
                  we provide age-appropriate content that grows with our students.
                </p>
                <p className="text-lg leading-relaxed">
                  With experienced instructors and industry-relevant curriculum, we prepare 
                  students not just for academic success, but for meaningful careers in 
                  cybersecurity and technology.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Coding on MacBook"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-blue-600/20 to-teal-500/20 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
