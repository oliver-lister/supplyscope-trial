import React from "react";

type Props = {
  Icon: React.ElementType;
  children: React.ReactNode;
  unread?: boolean;
};

const OverviewIcon: React.FC<Props> = ({ Icon, children, unread }) => {
  return (
    <div className="flex gap-1 items-center relative">
      <Icon />
      {unread ? (
        <div className="absolute bg-pink-700 content-[''] w-1.5 h-1.5 top-[-3px] left-3 rounded-full" />
      ) : null}
      <p className="text-xs">{children}</p>
    </div>
  );
};

export default OverviewIcon;
