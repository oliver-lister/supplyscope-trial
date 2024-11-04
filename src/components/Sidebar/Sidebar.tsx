import {
  CheckboxIcon,
  ChevronRightIcon,
  CubeIcon,
  FileTextIcon,
  GearIcon,
  Pencil2Icon,
  QuestionMarkCircledIcon,
  StackIcon,
  TableIcon,
  TokensIcon,
} from "@radix-ui/react-icons";
import SidebarLink from "./SidebarLink";

const links = [
  { icon: CubeIcon, href: "/" },
  { icon: StackIcon, href: "/" },
  { icon: TokensIcon, href: "/" },
  { icon: Pencil2Icon, href: "/" },
  { icon: TableIcon, href: "/" },
  { icon: FileTextIcon, href: "/" },
  { icon: GearIcon, href: "/" },
];

const activeIndex = 1;

const Sidebar = () => {
  return (
    <>
      <aside className="sticky top-0 left-0 bg-gray-900 h-screen grid justify-between">
        <div>
          <div className="grid justify-center items-center py-4 px-6">
            <CheckboxIcon className="text-white w-8 h-8" />
          </div>
          <div className="mt-6">
            {links.map(({ href, icon }, index) => (
              <SidebarLink
                key={index}
                href={href}
                active={index === activeIndex}
                Icon={icon}
              />
            ))}
          </div>
        </div>
        <div className="self-end">
          <SidebarLink
            active={false}
            href="/"
            Icon={QuestionMarkCircledIcon}
            className="border-b-[1px] border-b-gray-600"
          />
          <SidebarLink
            active={false}
            href="/"
            Icon={ChevronRightIcon}
            className="py-6 px-6"
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
