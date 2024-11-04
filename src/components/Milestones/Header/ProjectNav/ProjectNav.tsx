import {
  CardStackMinusIcon,
  GearIcon,
  PersonIcon,
  PieChartIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import ProjectNavLink from "./ProjectNavLink";

const navLinks = [
  {
    label: "Project Tracker",
    icon: PieChartIcon,
    href: "/",
  },
  {
    label: "Products",
    icon: CardStackMinusIcon,
    href: "/",
  },
  {
    label: "Activities",
    icon: Share1Icon,
    href: "/",
  },
  {
    label: "Worklow Members",
    icon: PersonIcon,
    href: "/",
  },
  {
    label: "Settings",
    icon: GearIcon,
    href: "/",
  },
];
const activeIndex = 0;

const ProjectNav = () => {
  return (
    <div className="border-b-[1px] border-b-gray-200">
      <nav className="flex">
        {navLinks.map(({ label, href, icon }, index) => (
          <ProjectNavLink
            active={index === activeIndex}
            href={href}
            Icon={icon}
            label={label}
            key={label}
          />
        ))}
      </nav>
    </div>
  );
};

export default ProjectNav;
