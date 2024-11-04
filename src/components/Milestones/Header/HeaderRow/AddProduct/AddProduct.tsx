import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

const AddProduct = () => {
  return (
    <div className="grid gap-2 justify-start self-end">
      <div className="flex gap-2">
        <p>
          Product{" "}
          <span className="text-slate-500 text-xs font-light">
            (3 products)
          </span>
        </p>
      </div>
      <Button variant="outline">
        <PlusIcon />
        Add Product
      </Button>
    </div>
  );
};

export default AddProduct;
