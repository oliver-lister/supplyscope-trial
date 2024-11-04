import { BellIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback } from "../../../ui/avatar";
import { Button } from "../../../ui/button";
import { BackpackIcon, ChevronLeftSquareIcon } from "lucide-react";

const Toolbar = () => {
  return (
    <div className="flex justify-between items-center px-10 mt-4">
      <Button variant="secondary">
        <ChevronLeftSquareIcon />
        Back to Workflows
      </Button>
      <nav className="flex gap-2">
        <Button variant="secondary" className="px-3">
          <BackpackIcon size={40} />
        </Button>
        <Button variant="ghost" className="relative">
          <p className="absolute top-[0px] right-[10px] text-xs">5</p>
          <BellIcon />
        </Button>
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-blue-600 text-xs text-white font-light px-0">
            PM
          </AvatarFallback>
        </Avatar>
        <Button variant="ghost">
          Product Manager <ChevronDownIcon />
        </Button>
      </nav>
    </div>
  );
};

export default Toolbar;
