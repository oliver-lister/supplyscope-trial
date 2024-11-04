import ProductRowWrapper from "../../../ui/ProductRowWrapper";
import AddProduct from "./AddProduct/AddProduct";
import SectionTitle from "./SectionTitle/SectionTitle";
import SummaryCard from "./SummaryCard/SummaryCard";
import CardColWrapper from "../../../ui/CardColWrapper";

const HeaderRow = () => {
  return (
    <ProductRowWrapper id="header-row">
      <AddProduct />
      <div className="grid gap-4 max-w-[1200px]">
        <SectionTitle />
        <CardColWrapper>
          <SummaryCard />
          <SummaryCard />
          <SummaryCard />
        </CardColWrapper>
      </div>
    </ProductRowWrapper>
  );
};

export default HeaderRow;
