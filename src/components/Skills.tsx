import { motion } from "framer-motion";
import { Code2, Database, Wrench, Brain, Users, Globe } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    name: "Technical Skills",
    skills: ["Java", "SQL", "JavaScript", "React.js", "HTML5", "CSS3", "Spring Boot"],
    color: "from-primary to-secondary",
  },
  {
    icon: Wrench,
    name: "Tools & Frameworks",
    skills: ["Git", "GitHub", "VS Code", "Eclipse", "MySQL", "Tailwind CSS", "Bootstrap"],
    color: "from-secondary to-accent",
  },
  {
    icon: Brain,
    name: "Core Concepts",
    skills: ["Data Structures (DSA)", "OOP", "DBMS", "Operating Systems", "Computer Networks", "REST API"],
    color: "from-accent to-primary",
  },
  {
    icon: Users,
    name: "Soft Skills",
    skills: ["Communication", "Teamwork", "Problem Solving", "Adaptability"],
    color: "from-primary via-secondary to-accent",
  },
  {
    icon: Database,
    name: "Backend Development",
    skills: ["Java", "Spring Boot", "MySQL", "REST API", "File Handling"],
    color: "from-secondary to-primary",
  },
  {
    icon: Globe,
    name: "Frontend Development",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
    color: "from-accent via-primary to-secondary",
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Gradient Blurs */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set for building robust, user-focused applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 h-full backdrop-blur-sm">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {category.name}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Animated border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
