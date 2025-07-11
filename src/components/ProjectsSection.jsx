import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "DevTinder",
    description:
      "Swipe-based developer matching app built with real-time updates using Socket.io and MongoDB.",
    image:
      "https://res.cloudinary.com/dmg5duasv/image/upload/v1752211055/Screenshot_2025-07-11_104428_qjo1zc.png", // make sure this path is correct
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoUrl: "#", 
    githubUrl: "https://github.com/Kushwanth-004/Devtinder-web.git",
  },
  {
    id: 2,
    title: "NetflixGPT",
    description:
      "AI-powered movie recommendation app using GPT, Firebase Auth, and TMDB API for a Netflix-like experience.",
    image:
      "https://res.cloudinary.com/dmg5duasv/image/upload/v1752211056/Screenshot_2025-07-11_104626_ukgb1q.png", // make sure this path is correct
    tags: ["React", "Redux", "GPT-3.5", "Firebase"],
    demoUrl: "flixgpt-1a502.web.app", 
    githubUrl: "https://github.com/Kushwanth-004/netflix-gpt",
  },
  {
    id: 3,
    title: "ClothStore",
    description:
      "E-commerce MERN app for a clothing store with cart, user auth, and admin dashboard.",
    image:
      "https://res.cloudinary.com/dmg5duasv/image/upload/v1752211055/Screenshot_2025-04-25_183500_qwgoxg.png", // make sure this path is correct
    tags: ["MERN", "TailwindCSS", "JWT Auth"],
    demoUrl: "#", 
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Kushwanth-004/"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
