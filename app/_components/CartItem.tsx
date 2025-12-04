"use clinet";

import Image from "next/legacy/image";
import { FaTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartslice/cartSlice";
import CartInDeButton from "./CartInDeButton";

// Define the Props type for CartItem
interface Props {
  items: any; // Replace 'any' with the actual type if known
}

const CartItem = ({ items }: Props) => {
  const dispatch = useDispatch();
  const handleRemove = (item: any) => {
    dispatch(removeFromCart(item));
  };
  return (
    <>
      {items?.map((item: any) => (
        <div
          key={item._id}
          className="w-full md:h-[90px] flex items-center justify-between shadow rounded px-2 md:px-12 bg-white group"
        >
          <div className="relative w-1/4 flex flex-col md:flex-row items-center gap-0 md:gap-4 ">
            <Image
              src={item?.images[0].url}
              alt="cart image"
              width={60}
              height={60}
              className=""
            />
            <p className="text-[12px] md:text-sm font-semibold text-black/80">
              {item.title}
            </p>
            <button
              onClick={() => handleRemove(item)}
              className="absolute md:opacity-0 md:group-hover:opacity-100 duration-200 cursor-pointer -top-1 -left-1 text-sm md:text-[16px] text-[#DB2222]"
            >
              <FaTimesCircle />
            </button>
          </div>
          <p className="w-1/4 text-[12px] md:text-sm font-semibold text-black/80">
            ${item.price}
          </p>

          <div className="w-1/4">
            <CartInDeButton item={item} />
          </div>

          <p className=" text-[12px] md:text-sm font-semibold text-black/80 md:mr-5">
            {item.quantity * item.price}
          </p>
        </div>
      ))}
    </>
  );
};

export default CartItem;
