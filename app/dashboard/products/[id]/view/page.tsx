import { getSingleProduct } from "@/lib/auth";
import Link from "next/link";

interface Props {
  params: Promise<{ id: string }>;
}

const viewPage = async (props: Props) => {
  const { id } = await props.params;
  const product = await getSingleProduct(id);
  //   console.log(product.tags);
  return (
    <div>
      {/* top */}
      <div className="w-full flex justify-between items-center ">
        <h1 className="text-muted-foreground">View Product Details</h1>
        <Link href={`/dashboard/products`}>
          <button>Back</button>
        </Link>
      </div>

      {/* product details */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>id:</h1>
          <p>{product._id}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>title:</h1>
          <p>{product.title}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>price:</h1>
          <p>{product.price}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>category:</h1>
          <p>{product.category}</p>
        </div>
        <div className="col-span-4 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>description:</h1>
          <p>{product.description}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>stock:</h1>
          <p>{product.stock}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>rating:</h1>
          <p>{product.rating}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>tags:</h1>
          {product?.tags ? (
            <ul className="flex items-center gap-2">
              {product.tags.map((tag: string, index: number) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          ) : (
            <p>null</p>
          )}
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>brand:</h1>
          <p>{product.brand}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>weight:</h1>
          <p>{product.weight || "null"}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>brand:</h1>
          <p>{product.brand}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>warrantyInformation:</h1>
          <p>{product.warrantyInformation}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>shippingInformation:</h1>
          <p>{product.shippingInformation}</p>
        </div>
        <div className="col-span-1 w-fit px-4 py-2 border border-muted-foreground rounded flex items-center gap-4">
          <h1>availableStatus:</h1>
          <p>{product.availableStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default viewPage;
