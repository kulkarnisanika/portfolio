
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Figma,
  Linkedin,
  Github,
  Mail,
  Instagram,
  Download,
  ExternalLink,
  FileText,
  Contact
} from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with right-aligned image */}
      <section id="home" className="section min-h-screen flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
              <img
                src="/sanika-kulkarni-head.png"
                alt="Sanika Kulkarni"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/kulkarnisanika/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-accent/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/sanika-kulkarni-a5793b209/" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary/50 hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Sanika Kulkarni</span>
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
            Frontend Developer with 2.9 years of experience - building the bridge between imagination and interaction!
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I’ve collaborated with startups and product teams to create fast, scalable, and user-driven digital products.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="space-y-12">
            {/* Experience Item 1 */}
            <div className="relative pl-8 border-l-2 border-accent fade-in">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <h4 className="text-accent mb-2">Amdocs</h4>
              <p className="text-sm text-muted-foreground mb-2">Aug 2022 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>Spearheaded a high-performance telecom app, serving 1M+ users and increasing self-service adoption by 25%</li>
                <li>Optimized legacy codebase, reducing code size by 70% and improving load time by 60%</li>
                <li>Resolved 150+ critical bugs, enhancing stability and supporting parallel development</li>
                <li>Led end-to-end delivery of 10+ high-impact features in an agile team with robust testing and modern frontend best practices</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="relative pl-8 border-l-2 border-accent fade-in">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"></div>
              <h3 className="text-xl font-bold">Project Intern</h3>
              <h4 className="text-accent mb-2">Gadre Infotech Pvt. Ltd.</h4>
              <p className="text-sm text-muted-foreground mb-2">Jun 2020 - Sept 2020</p>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>Developed a responsive school app interface, improving access for 200+ students and staff</li>
                <li>Applied HTML5/CSS3 best practices to ensure cross-browser compatibility</li>
                <li>Supported usability testing, optimizing workflows and reducing development time by 20%</li>
              </ul>
            </div>


          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A Selection of My Recent Projects Demonstrating Responsive and Scalable Web Development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
          {/* Project 1 */}
          <ProjectCard
            title="CineGPT - AI based Movie Recommendation App"
            description="An AI-powered movie app that leverages GPT-based intelligence to recommend, search, and summarize movies with an engaging, conversational interface."
            imageUrl="/cine-gpt-personal.png"
            demoUrl="https://cine-gpt-app.web.app/"
            sourceCodeUrl="https://github.com/kulkarnisanika/cine-gpt"
            showDemoUrl={true}
            showSourceCodeUrl={true}
          />

          {/* Project 2 */}
          <ProjectCard
            title="Telecom App - Customer Engagement Center"
            description="A centralized platform that enables businesses to manage and enhance customer interactions across multiple channels."
            imageUrl="/customer-engagement-amdocs.png"
            demoUrl="#"
            sourceCodeUrl="#"
            showDemoUrl={false}
            showSourceCodeUrl={false}
          />

          {/* Project 3 */}
          <ProjectCard
            title="Browser Extension - Auto tab Organizer"
            description="A lightweight tool that groups and ungroups tabs automatically based on domain names, improving browser tab organization and productivity."
            imageUrl="/auto-tab-organizer.png"
            demoUrl="https://drive.google.com/file/d/1GDzwtnHVHWq60TdPiKi0hTA2JRSUZx-L/view"
            sourceCodeUrl="https://github.com/kulkarnisanika/auto-tab-organizer"
            showDemoUrl={true}
            showSourceCodeUrl={true}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-secondary/30">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Core technologies and frameworks I specialize in.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-8">
          <SkillCard name="JavaScript (ES6+)" />
          <SkillCard name="ReactJS" />
          <SkillCard name="TypeScript" />
          <SkillCard name="Redux" />
          <SkillCard name="HTML5" />
          <SkillCard name="CSS3" />
          <SkillCard name="Next.js" />
          <SkillCard name="Tailwind CSS" />
          <SkillCard name="MUI" />
        </div>

        <div className="w-full max-w-3xl mx-auto px-4 fade-in">
          <h3 className="text-xl font-semibold mb-4 text-center">Additional Skills</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>

              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ToolCard
                  name="Git"
                  icon={
                    <svg
                      className="h-12 w-12"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22.548 12.363L11.637 1.452a1.562 1.562 0 00-2.21 0L7.05 3.83l2.121 2.122a1.626 1.626 0 011.967 1.993l2.04 2.041a1.624 1.624 0 11-.71.705l-1.96-1.96v5.134a1.625 1.625 0 11-1.1-.047V9.16a1.625 1.625 0 01-1.03-2.067L6.293 4.379l-4.84 4.841a1.563 1.563 0 000 2.21l10.91 10.91a1.562 1.562 0 002.21 0l7.975-7.976a1.562 1.562 0 000-2.21z" />
                    </svg>
                  }
                />

              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ToolCard name="Figma" icon={<Figma className="h-12 w-12" />} />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ToolCard
                  name="Jenkins"
                  icon={
                    <svg
                      className="h-12 w-12"
                      viewBox="0 0 256 256"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m 123.02,36.516 c -0.221,-5.266 0.518,-13.7109 0.765,-19.2351 3.501,-0.0047 5.002,0.766 7.615,1.6472 0.295,6.5 -2.058,12.5137 -2.736,18.4489 -1.383,0.3691 -3.922,-0.975 -5.644,-0.861 z M 68.5059,66.4648 C 70.8145,45.2418 74.1582,27.4012 80.291,8.60781 93.9023,4.475 110.311,4.11484 122.342,7.84414 120.133,18.4512 121.098,31.3648 119.807,42.684 c -0.973,8.5078 -0.477,17.068 -1.811,25.748 -14.578,3.0328 -35.1835,0.709 -49.4901,-1.9672 z m 52.9371,1.834 c -0.123,-9.1148 0.408,-18.1058 1.104,-27.232 3.5,0.5254 5.875,0.8762 9.127,1.5891 -1.056,8.7859 -0.926,18.6722 -3.077,26.4441 -2.486,-0.0238 -4.675,0.0289 -7.154,-0.8012 z m 17.755,1.4692 c -1.661,0.3808 -3.595,0.0148 -5.182,-0.016 0.746,-7.4301 2.556,-15.629 3.193,-23.4282 2.497,-0.0777 3.831,1.1 5.885,1.4961 0.11,6.8461 -0.598,16.2781 -3.896,21.9481 z m 26.884,-24.5629 c 5.205,1.264 8.478,7.639 7.022,14.1859 -0.977,4.4 -2.717,12.6852 -4.579,15.5 -1.376,2.082 -5.107,4.8078 -8.086,2.9 -4.846,-3.1031 -13.383,-4.0039 -16.917,-7.7601 1.772,-5.9 2.322,-14.0039 3.053,-21.4797 6.054,-0.3774 13.503,1.666 18.538,-0.5024 -3.515,-1.1386 -8.076,-1.1476 -11.113,-2.807 2.482,-1.1988 8.293,-0.9566 12.082,-0.0367 z M 117.679,76.859 c -3.656,8.598 -6.976,17.5078 -12.435,24.436 C 99.9551,97.748 94.1309,94.4121 92.6445,87.9711 100.215,83.6879 109.041,79.4629 117.679,76.859 z m 9.012,26.625 c -0.346,-8.5988 -1.327,-19.8781 -3.619,-26.6172 5.467,6.9613 9.876,15.0672 14.484,22.9594 -1.964,3.1528 -6.07,5.9018 -10.865,3.6578 z m -10.216,3.63 c -2.071,0.223 -3.829,-2.381 -6.522,-1.255 -0.617,-0.682 -1.178,-1.421 -1.807,-2.087 5.948,-7.1681 8.651,-17.338 13.245,-25.7618 2.465,8.0918 2.181,16.957 2.724,25.7888 -3.387,-0.215 -5.266,3.063 -7.64,3.315 z m -6.569,8.67 c -0.221,-2.455 0.35,-3.258 0.844,-6.072 8.07,-2.523 6.661,11.076 -0.844,6.072 z m -8.949,2.938 c -3.4773,1.9 -8.7011,3.969 -13.1925,4.826 -5.5672,1.065 -5.0457,-7.594 -4.8094,-12.76 0.1855,-4.09 2.3125,-8.415 3.2363,-11.1321 0.4336,-1.2688 0.5313,-2.6149 1.616,-2.8668 1.9172,-0.4469 8.2414,2.082 10.0434,3.0648 3.8112,2.0781 6.7682,5.3781 10.0052,7.5941 0.042,1.078 0.083,2.155 0.126,3.233 -1.946,0.97 -4.195,1.658 -7.052,1.783 1.938,0.975 4.789,0.961 6.555,2.121 0.017,0.432 0.035,0.863 0.05,1.291 -3.224,0.248 -4.453,1.684 -6.578,2.846 z m -33.2136,6.033 c -2.886,-2.93 8.0945,-6.924 11.5906,-7.139 -0.0195,1.854 1.0566,3.602 0.8398,4.932 -4.1523,0.729 -9.6093,0.248 -12.4304,2.207 z m 35.5516,-1.376 c -0.014,-0.286 -0.387,-0.182 -0.448,-0.415 3.713,-2.902 6.471,-3.502 11.525,-3.252 2.279,1.654 4.3,3.588 6.673,5.137 -5.463,-0.488 -12.34,-3.881 -17.75,-1.47 z m 32.632,-9.895 c -0.156,3.255 -1.011,9.949 -3.023,11.121 -4.223,2.465 -11.73,-4.977 -14.91,-6.112 0.346,-0.996 0.917,-1.785 0.961,-3.058 1.881,0.463 4.171,0.146 5.801,-0.655 -1.885,-0.211 -3.975,-0.197 -5.222,-1.095 -0.457,-1.321 0.112,-3.121 -0.192,-4.955 4.474,-1.262 9.584,-1.934 15.24,-2.1 1.1,1.43 1.475,4.154 1.345,6.854 z m -73.0422,8.437 c -0.9063,0.646 -7.0371,8.623 -7.877,8.292 C 43.9141,125.838 33.541,118.273 24.2715,111.118 33.1094,92.1539 36.677,68.9199 37.3074,46.5262 47.4316,41.791 56.3242,34.9648 70.0625,34.252 68.4727,45.5 67.0215,55.5352 66.1191,66.125 c -3.4519,1.4551 -8.4043,-0.066 -11.6347,0.4512 -0.0274,3.8929 4.9336,1.7047 5.3468,4.3226 0.3114,1.9801 -2.7296,2.1301 -1.7394,5.2481 2.5254,-0.918 3.8516,-2.9457 6.5449,-3.7071 2.461,5.384 -0.0344,14.9102 0.3203,19.4102 0.0672,0.8449 0.4219,4.6809 2.3145,4.0078 1.675,-0.5957 -0.0957,-10.2019 0.0879,-14.4609 0.1672,-3.9239 -0.4739,-7.7207 1.1152,-10.184 13.2754,1.807 26.7656,2.975 41.1294,3.3691 -3.16,1.3559 -6.914,2.6391 -11.0298,4.959 -2.2312,1.2578 -9.2644,3.875 -9.9082,5.9942 -1.0273,3.3769 2.6953,5.1757 3.332,8.0707 -6.7011,-3.6547 -8.0085,3.5031 -9.5937,8.5741 -1.4363,4.593 -2.2539,8.024 -2.6063,10.673 -5.7726,2.752 -11.9445,5.539 -16.9132,9.068 z m 67.1792,7.327 c 9.243,4.482 10.909,-16.751 7.286,-23.591 0.56,-2.04 2.486,-2.821 3.272,-4.655 -5.158,-9.2399 -10.887,-17.8649 -16.15,-26.9961 3.915,2.4371 9.507,0.4359 14.114,2.2601 1.684,0.666 2.903,4.5211 4.178,7.6051 3.507,8.4848 7.189,19.1819 8.827,27.2789 0.37,1.845 1.378,5.865 1.152,7.507 -0.403,2.94 -4.392,5.12 -6.421,6.938 -3.738,3.358 -6.092,6.313 -9.991,9.453 -1.581,-2.334 -4.974,-3.902 -6.267,-5.8 z m -88.3179,81.968 c -4.4043,-4.846 -3.4824,-13.926 -2.9492,-20.386 7.9609,5.008 18.5273,-0.396 18.4277,-8.914 3.8008,0.101 1.4199,4.747 0.7324,7.74 -2.2468,9.776 3.7852,20.397 0.2735,29.337 -6.8184,-0.517 -12.42,-3.302 -16.4844,-7.777 z m 31.5137,28.126 c -9.9707,-2.826 -22.7493,-10.071 -26.8465,-19.028 3.1726,0.461 5.375,2.061 8.5047,2.259 1.1828,0.077 2.7324,-0.496 4.0918,-0.158 2.709,0.672 4.9953,6.746 7.039,9.006 1.9922,2.207 4.3867,3.15 6.0254,5.162 1.0528,0.508 2.6094,0.473 2.6692,2.054 -0.4563,0.488 -0.9368,0.86 -1.4836,0.705 z m 51.9032,-2.658 c -10.349,5.839 -27.8661,10.231 -38.8747,4.743 -8.8828,-4.429 -20.8899,-11.757 -24.9836,-21.043 3.8242,-8.961 -1.1328,-17.172 -1.4492,-26.27 -0.168,-4.841 2.2793,-9.067 2.4668,-14.337 -1.3086,-2.159 -5.3067,-2.425 -8.0743,-2.277 -0.9316,4.662 -2.5625,9.902 -7.3632,10.428 -6.793,0.743 -11.7598,-4.879 -12.0684,-10.754 -0.3652,-6.909 5.3066,-18.36 13.3457,-17.565 3.1055,0.307 3.8684,3.42 7.252,3.388 1.8339,-3.659 -2.8289,-4.808 -3.3086,-7.425 -0.125,-0.676 0.3867,-3.318 0.6843,-4.557 1.4602,-6.033 4.7153,-13.841 7.9192,-18.434 4.0664,-5.826 12.0555,-6.704 20.6504,-7.275 1.5351,3.307 7.1902,3.035 10.875,2.17 -4.416,1.749 -8.5215,5.989 -11.9239,9.742 -3.9082,4.306 -7.8671,8.925 -8.0671,14.553 7.3855,-10.246 13.4871,-19.194 26.9168,-23.701 10.1618,-3.408 22.0298,1.562 29.8378,7.045 3.24,2.279 5.174,5.895 7.477,9.205 8.617,12.395 12.638,30.087 11.754,47.235 -0.364,7.072 -0.348,14.12 -2.721,18.878 -2.48,4.975 -10.868,9.426 -15.778,4.926 -0.91,4.838 4.083,7.83 9.948,6.089 -4.182,5.397 -8.571,11.882 -14.515,15.236 z M 144.444,77.1168 c 8.087,4.0203 23.197,10.8211 28.267,-0.0148 1.871,-3.9942 4.066,-10.7461 5.035,-14.8692 1.369,-5.8168 -1.484,-18.043 -7.463,-19.9949 -5.281,-1.7238 -11.443,-1.6188 -17.804,-0.341 -0.749,0.623 -1.583,1.709 -2.166,2.841 -4.542,0.1762 -8.795,-0.2438 -12.383,-2.1109 0.34,-3.359 -1.932,-3.8981 -4.062,-4.5899 -1.579,-6.2609 3.159,-14.4371 2.025,-20.1461 -0.809,-4.0672 -5.813,-4.6961 -9.491,-5.457 -0.12,-2.2602 0.161,-4.14689 0.412,-6.059 -0.841,-3.09883 -4.613,-4.86289 -8.187,-5.29492 -11.759,-1.414064 -29.6133,-2.049221 -40.9239,2.01797 -3.1562,7.74175 -5.6426,17.15785 -8.2715,25.99805 -11.0312,-1.1781 -19.9531,4.7598 -28.364,8.65 -2.9121,1.35 -6.9406,2.0937 -8.0285,4.4117 -1.0547,2.2442 -0.6231,6.5453 -0.8848,10.6082 -0.666,10.377 -1.2363,20.386 -3.9766,31.011 -1.2304,4.7679 -3.375,8.975 -4.8711,13.5691 -1.3828,4.2579 -3.7988,9.5199 -4.4289,13.7659 -0.9343,6.293 4.9914,6.643 8.7805,9.37 5.8574,4.217 10.4551,6.549 16.7988,10.355 1.8789,1.127 7.545,3.98 8.1895,5.294 1.2812,2.605 -2.1992,6.278 -3.1297,8.32 -1.4719,3.229 -2.2395,5.972 -2.4504,9.158 -5.3215,0.841 -9.3555,4.008 -11.7922,7.579 -4.0308,5.91 -6.8262,16.844 -3.3387,25.161 0.2735,0.655 1.6375,1.943 1.8387,2.949 0.3969,1.981 -0.7469,4.615 -0.818,6.722 -0.3664,10.81 1.829,20.124 9.1063,23.384 2.9543,11.769 13.5281,15.682 23.4902,21.531 3.7239,2.186 7.8289,3.583 12.0684,5.143 15.2082,5.597 38.5419,4.543 51.1639,-5.003 5.352,-4.048 13.907,-12.595 16.967,-18.783 8.082,-16.337 7.508,-43.64 1.855,-63.513 -0.76,-2.668 -1.862,-6.59 -3.401,-9.795 -1.073,-2.238 -4.408,-6.716 -4.003,-8.692 0.417,-2.043 7.604,-7.5 9.145,-8.986 2.775,-2.677 8.047,-6.23 8.474,-9.608 0.459,-3.595 -1.584,-8.513 -2.619,-11.982 -3.46,-11.5769 -6.836,-22.2781 -10.759,-32.5992" />
                    </svg>
                  }
                />


              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ToolCard
                  name="Postman"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      viewBox="0 0 1024 1024"
                      fill="currentColor"
                    >
                      <path d="M877.7 722.3c0 6.6-5.4 12-12 12H158.3c-6.6 0-12-5.4-12-12V301.7c0-6.6 5.4-12 12-12h707.4c6.6 0 12 5.4 12 12v420.6z" />
                      <path d="M515.5 420.9c58.3 0 105.8 47.5 105.8 105.8s-47.5 105.8-105.8 105.8-105.8-47.5-105.8-105.8 47.5-105.8 105.8-105.8zM515.5 573c24.5 0 44.4-19.9 44.4-44.4s-19.9-44.4-44.4-44.4-44.4 19.9-44.4 44.4 19.9 44.4 44.4 44.4zM515.5 486c32.4 0 58.7 26.3 58.7 58.7s-26.3 58.7-58.7 58.7-58.7-26.3-58.7-58.7 26.3-58.7 58.7-58.7zM430.2 573c0 32.4 26.3 58.7 58.7 58.7 32.4 0 58.7-26.3 58.7-58.7 0-32.4-26.3-58.7-58.7-58.7-32.4 0-58.7 26.3-58.7 58.7zM515.5 573c0 32.4-26.3 58.7-58.7 58.7-32.4 0-58.7-26.3-58.7-58.7 0-32.4 26.3-58.7 58.7-58.7 32.4 0 58.7 26.3 58.7 58.7z" />
                    </svg>
                  }
                />
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
              I'm a dedicated Frontend Developer with a passion for building fast, accessible, and visually engaging user interfaces. With a strong eye for detail and a love for clean code, I bridge the gap between design and development to create seamless digital experiences.
            </p>
            <p className="mb-4">
              I thrive on turning complex problems into intuitive, scalable solutions—whether it's crafting component libraries, optimizing performance, or collaborating closely with cross-functional teams. For me, frontend development is where creativity meets logic, and user experience is always at the core.
            </p>
            <p className="mb-6">
              When I’m not coding, you’ll likely find me exploring new tech trends, refining my UI skills, or recharging with a good book and a strong cup of coffee.
            </p>
            <a href="https://drive.google.com/file/d/1OwC8L9yR2pxIq91XdK0y2EVeziICQp0t/view?usp=sharing">
              <Button variant="outline" className="flex gap-2">
                <Download size={16} /> Download Resume
              </Button>
            </a>

          </div>
          {

              <div className="fade-in">
            <Card className="overflow-hidden md:ml-24">
              <CardContent className="pt-5">
                <img
                  src="/3.png"
                  alt="Sanika Kulkarni working"
                  className="w-full h-auto object-contain aspect-[4/3] "
                />
              </CardContent>
            </Card>
          </div>
          
          }


        </div>
      </section>

      {/* Contact Section  */}
      <section id="contact" className="section">
        <div className="max-w-4xl mx-auto">
          {/* Contact Section Header */}
          <div className="text-center mb-12 fade-in">
            <Button variant="outline" className="mb-9 rounded-full px-6 text-lg">
              Get In Touch
            </Button>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          </div>

          {/* Contact Content */}
          <div className="bg-black/80 p-8 md:p-12 rounded-2xl mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Connect With Me</h3>
              <p className="text-gray-300">
                Feel free to reach out through social media or email. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-teal-400">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Email</span>
                </div>
                <a href="mailto:kulkarnisanika2@gmail.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                  kulkarnisanika2@gmail.com
                </a>
              </div>

              {/* GitHub */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-teal-400">
                  <Github className="w-5 h-5" />
                  <span className="font-semibold">GitHub</span>
                </div>
                <a href="https://github.com/kulkarnisanika/" className="text-gray-300 hover:text-teal-400 transition-colors">
                  github.com/kulkarnisanika
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-teal-400">
                  <Linkedin className="w-5 h-5" />
                  <span className="font-semibold">LinkedIn</span>
                </div>
                <a href="https://www.linkedin.com/in/sanika-kulkarni-a5793b209/" className="text-gray-300 hover:text-teal-400 transition-colors">
                  linkedin.com/in/sanika-kulkarni
                </a>
              </div>

              {/* Instagram */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-teal-400">
                  <Instagram className="w-5 h-5" />
                  <span className="font-semibold">Instagram</span>
                </div>
                <a href="https://instagram.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                  @kulkarnisanika2
                </a>
              </div>

              {/* Contact */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 text-teal-400">
                  <Contact className="w-5 h-5" />
                  <span className="font-semibold">Contact</span>
                </div>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                  +91-9172067027
                </a>
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
  sourceCodeUrl: string;
  showSourceCodeUrl: boolean;
  showDemoUrl: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, demoUrl, sourceCodeUrl, showDemoUrl, showSourceCodeUrl }) => {
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
            {
              showDemoUrl && (
                <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" asChild>
                  <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-1" /> Live Demo
                  </a>
                </Button>
              )
            }

            {
              showSourceCodeUrl && (<Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" asChild>
                <a href={sourceCodeUrl}>
                  <FileText className="w-4 h-4 mr-1" /> Source code
                </a>
              </Button>)
            }
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


// Skill Card Component
interface SkillCardProps {
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name }) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow bg-white/5 backdrop-blur-sm border-accent/10">
      <CardContent className="flex items-center justify-center p-3 h-full">
        <h3 className="font-medium text-center text-sm">{name}</h3>
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
