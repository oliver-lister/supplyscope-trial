import { useEffect, useState } from "react";
import ProductRow from "./ProductRow/ProductRow";

const Products = () => {
  const [combinedHeight, setCombinedHeight] = useState(0);

  useEffect(() => {
    const header = document.getElementById("header");
    const headerRow = document.getElementById("header-row");

    if (header && headerRow) {
      const headerHeight = header.getBoundingClientRect().height;
      const headerRowHeight = headerRow.getBoundingClientRect().height;
      setCombinedHeight(headerHeight + headerRowHeight);
    }
  }, []);

  return (
    <section
      className="py-2 grid gap-2 overflow-y-auto"
      style={{ height: window.innerHeight - combinedHeight }}
    >
      <ProductRow
        name="Pink Water Color Bibs"
        srn="BBU-WCF-BIB-AOPPNK"
        imageSrc="/BBU-WCF-BIB-AOPPNK.png"
      />
      <ProductRow
        name="Pink Water Color Bibs"
        srn="BBU-WCF-BIB-AOPPNK"
        imageSrc="/BBU-WCF-BIB-AOPPNK.png"
      />
      <ProductRow
        name="Pink Water Color Bibs"
        srn="BBU-WCF-BIB-AOPPNK"
        imageSrc="/BBU-WCF-BIB-AOPPNK.png"
      />
      <ProductRow
        name="Pink Water Color Bibs"
        srn="BBU-WCF-BIB-AOPPNK"
        imageSrc="/BBU-WCF-BIB-AOPPNK.png"
      />
      <ProductRow
        name="Pink Water Color Bibs"
        srn="BBU-WCF-BIB-AOPPNK"
        imageSrc="/BBU-WCF-BIB-AOPPNK.png"
      />
    </section>
  );
};

export default Products;
