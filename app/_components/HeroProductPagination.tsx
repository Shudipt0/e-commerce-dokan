import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import HeroHeadLine from "./HeroHeadLine";
import ProductCard from "./ProductCard";

interface Props {
  products: Products[]; // Replace 'any' with a more specific type if available
  totalPages: number;
  currentPage: number;
  setPageNumber: (page: number) => void;
}
interface Products {
  _id: string;
}

const HeroProductPagination = ({
  products,
  totalPages,
  currentPage,
  setPageNumber,
}: Props) => {
  // console.log(products);
  return (
    <section className=" relative w-full flex flex-col justify-between gap-8 md:gap-16">
      <HeroHeadLine thumb={"Our Products"} title={"Explore Our Products"} />
      {/* product pagination */}
      <div className=" w-full grid grid-cols-2 md:grid-cols-4 justify-items-center gap-2 md:gap-22 ">
        {products?.map((item: Products) => (
          <ProductCard key={item._id} item={item} />
        ))}
      </div>

      <div className="hidden absolute md:flex gap-4 md:top-16 md:right-0">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (currentPage > 1) setPageNumber(currentPage - 1);
          }}
          className="text-black p-3 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (currentPage < totalPages) setPageNumber(currentPage + 1);
          }}
          className="text-black p-3 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"
        >
          <GoArrowRight />
        </button>
      </div>
    </section>
  );
};

export default HeroProductPagination;
