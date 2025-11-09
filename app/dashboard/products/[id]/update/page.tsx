import ProductUpdateForm from "@/app/dashboard/_components/ProductUpdateForm";
import { getSingleProduct } from "@/lib/auth";

interface Props {
  params: Promise<{ id: string }>;
}

const updatePage = async (props: Props) => {
  const { id } = await props.params;
  const product = await getSingleProduct(id);
  // console.log(product);
  return (
    <div>
      <ProductUpdateForm product={product} />
    </div>
  );
};

export default updatePage;
