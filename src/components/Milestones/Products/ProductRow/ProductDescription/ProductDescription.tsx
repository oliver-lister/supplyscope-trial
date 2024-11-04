import { Button } from "@/components/ui/button";
import { ChevronDownIcon } from "@radix-ui/react-icons";

type Props = {
  name: string;
  srn: string;
  imageSrc: string;
};

const ProductDescription: React.FC<Props> = ({ name, srn, imageSrc }) => {
  return (
    <div className="flex justify-between items-start">
      <div className="grid gap-2 justify-start items-end">
        <div className="max-w-20">
          <img src={imageSrc} className="object-fill" />
        </div>
        <div>
          <p className="text-[13px]">{name}</p>
          <p className="text-slate-500 text-[10px]">{srn}</p>
        </div>
      </div>
      <Button variant="ghost" className="self-start">
        <ChevronDownIcon />
      </Button>
    </div>
  );
};

export default ProductDescription;
