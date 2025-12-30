import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 md:py-32 overflow-hidden">
      {/* Gradient Blurs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-secondary/10 to-transparent rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image & Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative space-y-8"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl blur-2xl opacity-30 animate-glow-pulse" />
              <div className="relative bg-card border border-border rounded-2xl p-2 overflow-hidden">
                <ImageBlock />
              </div>
            </div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">B.E. Computer Science & Engineering</h4>
                  <p className="text-muted-foreground">RMK College of Engineering and Technology</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="flex items-center gap-1 text-primary">
                      <Calendar className="w-4 h-4" />
                      2023 – 2027
                    </span>
                    <span className="text-secondary font-semibold">CGPA: 7.21</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* School Education Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Higher Secondary Education</h4>
                  <p className="text-muted-foreground">Government Boys Higher Secondary School</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="flex items-center gap-1 text-accent">
                      <Calendar className="w-4 h-4" />
                      2022-2023
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* High School */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">High School Education</h4>
                  <p className="text-muted-foreground">Government High School</p>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <span className="flex items-center gap-1 text-accent">
                      <Calendar className="w-4 h-4" />
                      2020-2021
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-foreground/80 text-lg"
            >
              <p>
                Computer Science and Engineering undergraduate with a strong foundation in Java programming, 
                Full Stack Web Development, and Database Management. I enjoy learning new technologies and 
                creating efficient, user-focused systems.
              </p>

              <p>
                Passionate about software engineering, I am eager to leverage my skills in problem-solving 
                and application development. I believe in continuous learning and staying at the forefront 
                of technology.
              </p>

              <p>
                My interests include Web Development, Open Source Contribution, and Competitive Programming. 
                I actively participate in technical events and engage in peer learning groups to solve 
                algorithmic problems on platforms like LeetCode.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button size="lg" variant="gradient" asChild>
                <a href="/Resume.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://linkedin.com/in/darwin-gowtham-k" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-secondary/50 hover:bg-secondary/10"
                asChild
              >
                <a href="https://github.com/darwingowtham" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ImageBlock = () => {
  const [imgError, setImgError] = useState(false);
  const [useSvgFallback, setUseSvgFallback] = useState(false);
  const [useTextFallback, setUseTextFallback] = useState(false);

  return (
    <div className="w-full aspect-square rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 overflow-hidden">
      {!useTextFallback ? (
        // Attempt to load DP.jpeg first, fallback to profile.svg, then to text initials
        <img
          src={
            useTextFallback ? "" : 
            useSvgFallback ? "/profile.svg" : 
            imgError ? "/profile.svg" : 
            "/DP.jpeg"
          }
          alt="Profile"
          className="w-full h-full object-cover rounded-xl"
          onError={() => {
            if (!imgError) {
              setImgError(true);
            } else if (!useSvgFallback) {
              setUseSvgFallback(true);
            } else {
              setUseTextFallback(true);
            }
          }}
        />
      ) : (
        <span className="text-8xl font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent">
          DG
        </span>
      )}
    </div>
  );
};
