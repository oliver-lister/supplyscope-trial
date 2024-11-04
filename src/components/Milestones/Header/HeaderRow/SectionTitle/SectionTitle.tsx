import { Button } from "@/components/ui/button";
import { DotsVerticalIcon, PlusIcon } from "@radix-ui/react-icons";

const SectionTitle = () => {
  return (
    <div className="bg-slate-500 text-white pl-4 pr-2 py-1 w-full self-start rounded-md flex justify-between items-center">
      <p>Sampling</p>
      <div className="flex gap-1 items-center">
        <Button variant="secondary">
          <PlusIcon />
        </Button>
        <Button variant="secondary">
          <DotsVerticalIcon />
        </Button>
      </div>
    </div>
  );
};

export default SectionTitle;
