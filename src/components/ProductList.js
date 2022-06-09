import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filtered_products: products, grid_view } = useFilterContext();
  const products_all = Object.values(products);

  if (products_all.length < 1) {
    return <h5 style={{ textTransform: "none" }}>Sorry no match found</h5>;
  }
  if (grid_view === false) {
    return <ListView products_all={products_all} />;
  }
  return <GridView products={products}>product list1</GridView>;
};

export default ProductList;
