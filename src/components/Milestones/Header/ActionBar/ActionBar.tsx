import { Button } from "@/components/ui/button";
import {
  DashboardIcon,
  FilePlusIcon,
  PlusIcon,
  RowsIcon,
} from "@radix-ui/react-icons";

const ActionBar = () => {
  return (
    <div className="flex justify-between px-10">
      <Button variant="outline">
        <PlusIcon />
        Add Milestone Group
      </Button>
      <div className="flex gap-2">
        <div className="flex gap-1">
          <Button
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            <RowsIcon />
          </Button>
          <Button
            variant="outline"
            className="hover:bg-blue-600 hover:text-white"
          >
            <DashboardIcon />
          </Button>
        </div>
        <Button variant="outline">
          <FilePlusIcon />
          Save As Template
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
