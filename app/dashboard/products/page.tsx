import { fetchProducts } from "@/lib/auth";

import { columns } from "@/lib/data/ProductColumns";
import { DataTable } from "../_components/data-table";

const productPage = async () => {
  const products = await fetchProducts();
  //   console.log(products[1]._id);
  return (
    <div>
      <h1 className="text-xl">All Products</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={products} />
      </div>
    </div>
  );
};

export default productPage;
