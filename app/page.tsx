"use client";

import Navbar from '@/components/navigation/Navbar';
import HeroSection from '@/components/home/HeroSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ProjectsSection from '@/components/projects/ProjectsSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import BlogSection from '@/components/blog/BlogSection';
import ContactSection from '@/components/contact/ContactSection';
import Footer from '@/components/ui/Footer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ParallaxScroll from '@/components/ui/ParallaxScroll';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="relative">
      {/* Background decorative elements with parallax effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <ParallaxScroll direction="up" intensity={0.2}>
          <div className="absolute top-[20%] right-[10%] w-64 h-64 rounded-full bg-blue-500/5 blur-3xl" />
        </ParallaxScroll>
        <ParallaxScroll direction="left" intensity={0.1}>
          <div className="absolute top-[40%] left-[5%] w-72 h-72 rounded-full bg-purple-500/5 blur-3xl" />
        </ParallaxScroll>
        <ParallaxScroll direction="right" intensity={0.15}>
          <div className="absolute bottom-[30%] right-[15%] w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl" />
        </ParallaxScroll>
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        
        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="py-16 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 section-title inline-block">Technical Skills</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Expertise across backend development, DevOps automation, and deep learning implementations.
              </p>
            </motion.div>
            <SkillsSection />
          </div>
        </motion.section>
        
        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="py-16 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4 section-title inline-block">Featured Projects</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Real-world applications demonstrating technical expertise across multiple domains.
              </p>
            </motion.div>
            <ProjectsSection />
          </div>
        </motion.section>
        
        <AnimatedSection 
          id="experience"
          hasParallaxBackground 
          title="Professional Experience"
          subtitle="Track record of success across diverse engineering environments."
        >
          <ExperienceSection />
        </AnimatedSection>
        
        <AnimatedSection 
          id="blog"
          hasParallaxBackground 
          title="Technical Blog"
          subtitle="Thoughts and insights on software engineering, DevOps, and machine learning."
        >
          <BlogSection />
        </AnimatedSection>
        
        <AnimatedSection 
          id="contact"
          hasParallaxBackground 
          title="Get In Touch"
          subtitle="Interested in working together? Let's discuss your project requirements."
        >
          <ContactSection />
        </AnimatedSection>
        
        <Footer />
      </div>
    </main>
  );
}
