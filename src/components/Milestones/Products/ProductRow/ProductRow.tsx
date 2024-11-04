import ProductRowWrapper from "../../../ui/ProductRowWrapper";
import CardColWrapper from "../../../ui/CardColWrapper";
import ProductDescription from "./ProductDescription/ProductDescription";
import ActivityCard from "./ActivityCard/ActivityCard";

type Props = {
  name: string;
  srn: string;
  imageSrc: string;
};

const ProductRow: React.FC<Props> = (props) => {
  return (
    <ProductRowWrapper>
      <ProductDescription {...props} />
      <div className="max-w-[1200px]">
        <CardColWrapper>
          <ActivityCard
            status="overdue"
            badges={[
              "Packaging",
              "Packaging",
              "Packaging",
              "Packaging",
              "Packaging",
              "Packaging",
            ]}
          />
          <ActivityCard
            status="done"
            badges={["Packaging", "Packaging", "Packaging"]}
          />
          <ActivityCard status="pending" badges={["Packaging"]} />
        </CardColWrapper>
      </div>
    </ProductRowWrapper>
  );
};

export default ProductRow;
