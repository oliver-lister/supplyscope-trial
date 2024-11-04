import { Button } from "../../../../ui/button";
import { PlusIcon } from "lucide-react";
import Avatars from "./Avatars";

const Members = () => {
  return (
    <div className="flex gap-2 items-center">
      <Button variant="outline">
        Workflow Members <PlusIcon />
      </Button>
      <Avatars />
    </div>
  );
};

export default Members;
