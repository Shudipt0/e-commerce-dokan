"use client";

import { useDispatch, useSelector } from "react-redux";
import WishlistCart from "../../_components/WishlistCart";
import { clearWishlist } from "../../redux/wishlistSlice/wishlistSlice";

const wishlistPage = () => {
  const { items } = useSelector((state: any) => state.wishlist);
  const dispatch = useDispatch();
  // console.log(items);

  const handleAllDelete = () => {
    // Dispatch an action to clear all items from the wishlist
    dispatch(clearWishlist([]));
  };

  return (
    <section className="container mx-auto px-2 md:px-14 pb-10 md:pb-20 bg-white">
      {items?.length > 0 ? (
        <>
          <div className="w-full flex items-center justify-between mb-10">
            <h1 className="text-xl md:text-3xl font-semibold text-black/90  ">
              Your Wishlist {items?.length > 0 ? `(${items.length})` : ""}
            </h1>
            <button
              onClick={handleAllDelete}
              className="w-20 md:w-[200px] md:h-12 text-[12px] md:text-[16px] font-semibold hover:text-white flex items-center justify-center border border-gray-300 hover:bg-[#DB4444] rounded cursor-pointer"
            >
              Clear All
            </button>
          </div>

          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 justify-items-center ">
            {items?.map((item: any) => (
              <WishlistCart key={item._id} item={item} />
            ))}
          </div>
        </>
      ) : (
        <div className="w-full min-h-64 md:min-h-[450px] flex items-center justify-center">
          <h1 className="text-xl md:text-3xl font-semibold text-black/90  ">
            Your Wishlist is Empty
          </h1>
        </div>
      )}
    </section>
  );
};

export default wishlistPage;
