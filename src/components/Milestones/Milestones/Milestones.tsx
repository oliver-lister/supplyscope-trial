import {
  CardStackMinusIcon,
  GearIcon,
  PersonIcon,
  PieChartIcon,
  Share1Icon,
} from "@radix-ui/react-icons";
import Members from "../Members/Members";
import Toolbar from "../Toolbar";
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

const Milestones = () => {
  return (
    <div className="px-10 py-4 w-full">
      <header className="grid gap-4">
        <Toolbar />
        <div className="grid gap-2">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl">Demo Project: August 2024</h1>
            <Members />
          </div>
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
        </div>
      </header>
    </div>
  );
};

export default Milestones;
