import React from "react";

type Props = {
  href: string;
  active: boolean;
  Icon: React.ElementType;
  label: string;
};

const activeClasses = "text-blue-600 border-b-blue-600";
const defaultClasses =
  "flex gap-2 items-center border-b-2 text-sm rounded-t-sm px-4 py-2 hover:bg-secondary hover:cursor-pointer";

const ProjectNavLink = ({ Icon, label, href, active }: Props) => {
  const classes = `${defaultClasses} ${
    active ? activeClasses : "border-b-transparent text-slate-500"
  }`;
  return (
    <a href={href} className={classes}>
      <Icon />
      {label}
    </a>
  );
};

export default ProjectNavLink;
