import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import OverviewIcon from "@/components/ui/OverviewIcon";
import {
  ChatBubbleIcon,
  CheckCircledIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import { Calendar1Icon } from "lucide-react";

type Props = {
  status: "overdue" | "pending" | "done";
  badges: string[];
};

type Status = {
  label: string;
  textColor: string;
  bgColor: string;
};

const statuses: { overdue: Status; pending: Status; done: Status } = {
  overdue: { label: "OVERDUE", textColor: "#C11574", bgColor: "#FFF0F8" },
  pending: { label: "PENDING", textColor: "#F0AF1D", bgColor: "#FFF9EC" },
  done: { label: "DONE", textColor: "#027A48", bgColor: "#E6F9F1" },
};

const badgeLimit = 3;

const ActivityCard: React.FC<Props> = ({ status, badges }) => {
  const { label, textColor, bgColor } = statuses[status];

  return (
    <Card
      className="rounded-md px-4 py-2 grid gap-2"
      style={{
        backgroundColor: status === "done" ? bgColor : undefined,
        border: status === "done" ? `1px solid ${textColor}` : undefined,
      }}
    >
      <div className="flex justify-between">
        <div
          className="flex items-center gap-2 w-min px-2 py-1 text-[10px] rounded-full"
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: textColor }}
          />
          {label}
        </div>
        <div className="flex gap-2 items-center text-slate-500 font-light text-xs">
          <Calendar1Icon className="w-4 h-4" />
          <p>Mar 30 - Apr 13</p>
        </div>
      </div>
      <div className="flex gap-4 border-b-[1px] pb-2 border-b-gray-200">
        <OverviewIcon Icon={Link1Icon}>2</OverviewIcon>
        <OverviewIcon Icon={CheckCircledIcon}>1/4</OverviewIcon>
        <OverviewIcon Icon={ChatBubbleIcon}>34</OverviewIcon>
      </div>
      <div className="grid gap-1">
        <p className="uppercase text-[10px] text-slate-500">Applicable Cards</p>
        <div className="flex gap-2 items-center">
          {badges.slice(0, badgeLimit).map((badge) => (
            <Badge key={badge} className="text-[10px] font-light">
              {badge}
            </Badge>
          ))}
          {badges.length > badgeLimit ? (
            <Badge variant="secondary" className="text-[10px] font-light">
              {badges.length - badgeLimit} more
            </Badge>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

export default ActivityCard;
