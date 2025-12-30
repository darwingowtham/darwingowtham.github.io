import { motion } from "framer-motion";
import { ExternalLink, Github, Terminal, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bus Reservation System",
    description: "A command-line application using Java to allow users to book, cancel, and view bus reservations efficiently. Implemented core OOP principles and utilized file handling techniques for persistent data management.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=500&fit=crop",
    tags: ["Java", "File Handling", "OOP"],
    year: "2024",
    features: [
      "Book, cancel, and view reservations",
      "Persistent data storage",
      "Menu-driven interface",
    ],
    gradient: "from-primary to-secondary",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen py-20 md:py-32 overflow-hidden">
      {/* Gradient Blurs */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-[150px]" />

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
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in software development and problem-solving
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm font-medium text-foreground">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                        <Terminal className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sm text-muted-foreground">CLI Application</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Code className="w-3 h-3 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-secondary/50 hover:bg-secondary/10"
                        asChild
                      >
                        <a href="https://github.com/darwingowtham" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Achievements & Activities
            </span>
          </h3>

          <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8">
            <h4 className="font-bold text-foreground mb-4">Technical Participation</h4>
            <p className="text-muted-foreground mb-2">RMK College (2023 – Present)</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                Active participant in technical events and coding practice sessions
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-1">•</span>
                Engaged in peer learning groups to solve algorithmic problems on platforms like LeetCode
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                Consistently exploring emerging technologies and industry best practices
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
