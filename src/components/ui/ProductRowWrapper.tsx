import React from "react";

const ProductRowWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-b-[1px] border-b-gray-200">
      <div className="grid grid-cols-[200px_1fr] gap-4 pb-4 px-10">
        {children}
      </div>
    </div>
  );
};

export default ProductRowWrapper;
