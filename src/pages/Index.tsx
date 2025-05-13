
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Figma, 
  Dribbble, 
  Linkedin, 
  Github, 
  Instagram, 
  Download,
  ExternalLink,
  FileText
} from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with right-aligned image */}
      <section id="home" className="section min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Alex Morgan" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Alex Morgan</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
            UI/UX designer with 3 years of experience crafting intuitive and engaging digital experiences.
          </p>
          <Button 
            size="lg"
            onClick={() => {
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Explore My Work
          </Button>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section bg-secondary/30">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I've collaborated with startups and established companies to create effective digital solutions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="relative pl-8 border-l-2 border-accent fade-in">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-bold">Senior UI/UX Designer</h3>
              <h4 className="text-accent mb-2">CreativeTech Solutions</h4>
              <p className="text-sm text-muted-foreground mb-2">2023 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>Led the redesign of the company's flagship product, increasing user engagement by 45%</li>
                <li>Managed a team of 3 junior designers, mentoring them on best practices</li>
                <li>Collaborated with developers to ensure design fidelity during implementation</li>
              </ul>
            </div>
            
            {/* Experience Item 2 */}
            <div className="relative pl-8 border-l-2 border-accent fade-in">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-bold">UI/UX Designer</h3>
              <h4 className="text-accent mb-2">DigitalFirst Agency</h4>
              <p className="text-sm text-muted-foreground mb-2">2021 - 2023</p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>Designed interfaces for over 15 client projects across various industries</li>
                <li>Conducted user testing and created detailed reports with actionable insights</li>
                <li>Implemented design systems to improve consistency and development efficiency</li>
              </ul>
            </div>
            
            {/* Experience Item 3 */}
            <div className="relative pl-8 border-l-2 border-accent fade-in">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-bold">UI Design Intern</h3>
              <h4 className="text-accent mb-2">StartUp Innovations</h4>
              <p className="text-sm text-muted-foreground mb-2">2020 - 2021</p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>Assisted senior designers in creating wireframes and prototypes</li>
                <li>Conducted competitive analysis and presented findings to stakeholders</li>
                <li>Supported the design team in developing visual assets and style guides</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing user-centered design solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
          {/* Project 1 */}
          <ProjectCard 
            title="Finance App Redesign"
            description="A modern mobile banking app with focus on accessibility and ease of use."
            imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
            demoUrl="#"
            caseStudyUrl="#"
          />
          
          {/* Project 2 */}
          <ProjectCard 
            title="E-commerce Website"
            description="Complete redesign of an e-commerce platform to improve the shopping experience."
            imageUrl="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop"
            demoUrl="#"
            caseStudyUrl="#"
          />
          
          {/* Project 3 */}
          <ProjectCard 
            title="Travel Planning App"
            description="An interactive app for planning travel itineraries and discovering local experiences."
            imageUrl="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
            demoUrl="#"
            caseStudyUrl="#"
          />
          
          {/* Project 4 */}
          <ProjectCard 
            title="Health & Wellness Platform"
            description="A comprehensive wellness platform with intuitive tracking and personalized recommendations."
            imageUrl="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop"
            demoUrl="#"
            caseStudyUrl="#"
          />
          
          {/* Project 5 */}
          <ProjectCard 
            title="Learning Management System"
            description="Educational platform designed to enhance the learning experience for students and educators."
            imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            demoUrl="#"
            caseStudyUrl="#"
          />
          
          {/* Project 6 */}
          <ProjectCard 
            title="Smart Home Interface"
            description="User interface for controlling smart home devices with focus on simplicity and functionality."
            imageUrl="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
            demoUrl="#"
            caseStudyUrl="#"
          />
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="section bg-secondary/30">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools I Know</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The design and prototyping tools I use to bring ideas to life.
          </p>
        </div>
        
        <div className="w-full max-w-3xl mx-auto px-4 fade-in">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ToolCard name="Figma" icon={<Figma className="h-12 w-12" />} />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ToolCard name="Adobe Photoshop" icon={<svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01v2.31c.19.03.38.04.56.04.39.01.78-.06 1.15-.2.27-.12.49-.32.65-.57.15-.26.23-.55.22-.85.01-.3-.07-.6-.23-.86-.16-.23-.37-.4-.62-.51l.13-.17zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.941.979-1.561 1.22-.64.25-1.321.38-2.009.37-.215 0-.429-.01-.639-.02v2.79c.02.08-.04.151-.109.17l-1.979.42c-.08.021-.16-.03-.17-.11V5.979c0-.08.05-.149.13-.16.649-.1 1.319-.16 1.989-.16.729-.01 1.459.14 2.119.45.539.25.999.66 1.329 1.17.33.519.5 1.13.48 1.75.02.71-.13 1.42-.44 2.04-.3.61-.73 1.12-1.279 1.48l.129.051zm7.64-3.43c-.149.26-.369.46-.639.59-.289.13-.6.19-.92.19-.14 0-.29-.01-.43-.02v3c.02.08-.04.15-.11.17l-1.979.42c-.08.02-.16-.03-.17-.11V5.63c0-.08.05-.15.13-.16.56-.08 1.13-.12 1.7-.12.58-.01 1.16.09 1.7.3.42.17.79.46 1.06.83.25.38.37.82.36 1.26.01.47-.13.92-.4 1.3-.13.21-.29.4-.47.57l.159.069zm-.35-1.869c-.17-.261-.46-.43-.78-.45-.2 0-.4.02-.6.06v2.37c.11.01.22.01.33.01.35.02.7-.1.96-.34.23-.25.34-.58.33-.92.03-.34-.07-.67-.28-.96l.04.21zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3z"/>
                </svg>} />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ToolCard name="Framer" icon={<svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z"/>
                </svg>} />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ToolCard name="Webflow" icon={<svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm-.484-9.684l3.637-1.575-3.637-1.581-1.718-3.637-1.697 3.637-3.601 1.581 3.601 1.575 1.697 3.641 1.718-3.641z"/>
                </svg>} />
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static mr-2 translate-y-0" />
              <CarouselNext className="static ml-2 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="mb-4">
              I'm a passionate UI/UX designer with a background in visual design and a strong interest in user psychology. I believe in creating designs that not only look great but also solve real problems for users.
            </p>
            <p className="mb-4">
              My design approach combines aesthetic sensibility with a deep understanding of user needs. I enjoy the process of translating complex requirements into simple, intuitive interfaces that provide delightful experiences.
            </p>
            <p className="mb-6">
              When I'm not designing, you can find me exploring new hiking trails, experimenting with photography, or attending local design meetups.
            </p>
            <Button variant="outline" className="flex gap-2">
              <Download size={16} /> Download Resume
            </Button>
          </div>
          <div className="fade-in">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Alex Morgan working" 
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-secondary/30">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="fade-in">
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
          
          <div className="fade-in">
            <div className="bg-card rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <p className="mb-6">
                Feel free to reach out through social media or email. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Linkedin className="w-5 h-5 text-accent mr-3" />
                  <a href="https://linkedin.com" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">linkedin.com/in/alexmorgan</a>
                </div>
                <div className="flex items-center">
                  <Dribbble className="w-5 h-5 text-accent mr-3" />
                  <a href="https://dribbble.com" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">dribbble.com/alexmorgan</a>
                </div>
                <div className="flex items-center">
                  <Github className="w-5 h-5 text-accent mr-3" />
                  <a href="https://github.com" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">github.com/alexmorgan</a>
                </div>
                <div className="flex items-center">
                  <Instagram className="w-5 h-5 text-accent mr-3" />
                  <a href="https://instagram.com" className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">@alex.morgan.design</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

// Project Card Component
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  caseStudyUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, demoUrl, caseStudyUrl }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white text-lg font-bold mb-1">{title}</h3>
          <p className="text-white/90 text-sm mb-3">{description}</p>
          <div className="flex space-x-2">
            <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" asChild>
              <a href={caseStudyUrl}>
                <FileText className="w-4 h-4 mr-1" /> Case Study
              </a>
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-4 md:p-6">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
};

// Tool Card Component
interface ToolCardProps {
  name: string;
  icon: React.ReactNode;
}

const ToolCard: React.FC<ToolCardProps> = ({ name, icon }) => {
  return (
    <Card className="h-full">
      <CardContent className="flex flex-col items-center justify-center p-6 h-full">
        <div className="text-accent mb-4">
          {icon}
        </div>
        <h3 className="font-medium text-center">{name}</h3>
      </CardContent>
    </Card>
  );
};

export default Index;
