import Header from "./Header/Header";
import HeaderRow from "./Header/HeaderRow/HeaderRow";
import Products from "./Products/Products";

const Milestones = () => {
  return (
    <div className="py-4 w-full">
      <div className="sticky top-0 z-10 bg-white grid gap-2 shadow-md">
        <Header />
        <HeaderRow />
      </div>
      <Products />
    </div>
  );
};

export default Milestones;
