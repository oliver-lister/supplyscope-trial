import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  CardStackIcon,
  ChatBubbleIcon,
  CheckCircledIcon,
  DotsVerticalIcon,
  Link1Icon,
} from "@radix-ui/react-icons";
import OverviewIcon from "../../../../ui/OverviewIcon";

const SummaryCard = () => {
  return (
    <Card className="bg-slate-100 border-none py-2 px-4 rounded-md shadow-none grid gap-2">
      <div className="flex justify-between">
        <Badge variant="secondary" className="bg-white text-slate-500">
          Strike-Off
        </Badge>
        <div className="flex">
          <Button
            variant="outline"
            className="text-xs border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All
          </Button>
          <Button variant="ghost" className="mr-[-1rem]">
            <DotsVerticalIcon />
          </Button>
        </div>
      </div>
      <div>
        <p>Initial Review Initial Review Initial Review</p>
      </div>
      <div className="flex gap-4 items-center justify-start text-slate-500">
        <OverviewIcon Icon={Link1Icon}>2</OverviewIcon>
        <OverviewIcon Icon={CheckCircledIcon} unread={true}>
          1/4
        </OverviewIcon>
        <OverviewIcon Icon={ChatBubbleIcon} unread={true}>
          34
        </OverviewIcon>
        <OverviewIcon Icon={CardStackIcon}>4 Cards</OverviewIcon>
      </div>
    </Card>
  );
};

export default SummaryCard;
