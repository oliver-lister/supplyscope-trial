import React from "react";

const ProductRowWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) => {
  return (
    <div id={id} className="border-b-[1px] border-b-gray-200">
      <div className="grid grid-cols-[200px_1fr] gap-4 pb-4 px-10">
        {children}
      </div>
    </div>
  );
};

export default ProductRowWrapper;
