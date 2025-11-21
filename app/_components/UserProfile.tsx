"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToggleMenu } from "@/context/NavbarToggleContext";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
}

const UserProfile = ({ userData }: { userData: User | null }) => {
  const { mobileMenuOpen, setMobileMenuOpen } = useToggleMenu();
  const userIcon = userData?.name.charAt(0).toUpperCase();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="w-10 h-10 flex items-center justify-center text-[24px] text-white/60 font-bold bg-gray-500 rounded-full p-3 shadow ">
            {userIcon}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          sideOffset={10}
          className="w-full md:w-80 p-6 bg-gray-800 text-white/80"
        >
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="focus:bg-gray-800 focus:text-white/80">
            <div className="space-y-2 capitalize ">
              <p className="text-[12px] md:text-[14px] font-extralight flex items-center gap-x-2">
                Name:{" "}
                <span className="text-[14px] md:text-lg font-semibold">
                  {userData?.name || "Guest"}
                </span>
              </p>
              <p className="text-[12px] md:text-[14px] font-extralight flex items-center gap-x-2">
                Phone:{" "}
                <span className="text-[14px] md:text-lg font-semibold">
                  {userData?.phone || "---"}
                </span>
              </p>
              <p className="text-[12px] md:text-[14px] font-extralight flex items-center gap-x-2 lowercase">
                Email:{" "}
                <span className="text-[14px] md:text-lg font-semibold">
                  {userData?.email || "---"}
                </span>
              </p>
              <p className="text-[12px] md:text-[14px] font-extralight flex items-center gap-x-2">
                Role:{" "}
                <span className="text-[14px] md:text-lg font-semibold">
                  {userData?.role || "User"}
                </span>
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className="focus:bg-gray-900 focus:text-white">
            <Link
              href={`/profile-settings`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              Settings
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem variant={"destructive"}>
            <IoIosLogOut />
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserProfile;
