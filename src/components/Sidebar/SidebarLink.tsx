import React from "react";

type Props = {
  active: boolean;
  href: string;
  Icon: React.ElementType;
  className?: string;
};

const baseClasses =
  "py-4 px-6 grid items-center justify-center relative hover:cursor-pointer hover:bg-gray-800";

const activeClasses =
  "text-amber-500 bg-gray-800 before:absolute before:w-[2px] before:h-full before:top-0 before:left-0 before:bg-amber-500";

const SidebarLink: React.FC<Props> = ({ active, href, Icon, className }) => {
  const classes = `${baseClasses} ${
    active ? activeClasses : "text-white"
  } ${className}`;

  return (
    <a href={href} className={classes}>
      <Icon className="w-6 h-6" />
    </a>
  );
};

export default SidebarLink;
