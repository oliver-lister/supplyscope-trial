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

const Sidebar = () => {
  return (
    <>
      <aside className="bg-gray-900 h-screen grid justify-between">
        <div>
          <div className="grid justify-center items-center py-4 px-6">
            <CheckboxIcon className="text-white w-8 h-8" />
          </div>
          <div className="mt-6">
            <SidebarLink active={false} href="/" Icon={CubeIcon} />
            <SidebarLink active={true} href="/" Icon={StackIcon} />
            <SidebarLink active={false} href="/" Icon={TokensIcon} />
            <SidebarLink active={false} href="/" Icon={Pencil2Icon} />
            <SidebarLink active={false} href="/" Icon={TableIcon} />
            <SidebarLink active={false} href="/" Icon={FileTextIcon} />
            <SidebarLink active={false} href="/" Icon={GearIcon} />
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
