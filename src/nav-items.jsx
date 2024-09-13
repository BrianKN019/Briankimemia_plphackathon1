import { HomeIcon, UserIcon, CodeIcon, FolderIcon, MailIcon, GraduationCapIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Education from "./pages/Education.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "About",
    to: "/about",
    icon: <UserIcon className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Skills",
    to: "/skills",
    icon: <CodeIcon className="h-4 w-4" />,
    page: <Skills />,
  },
  {
    title: "Education",
    to: "/education",
    icon: <GraduationCapIcon className="h-4 w-4" />,
    page: <Education />,
  },
  {
    title: "Projects",
    to: "/projects",
    icon: <FolderIcon className="h-4 w-4" />,
    page: <Projects />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <MailIcon className="h-4 w-4" />,
    page: <Contact />,
  },
];