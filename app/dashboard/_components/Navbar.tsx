"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { IoIosLogOut } from "react-icons/io";

interface NavbarProps {
  userData: User | null;
}

interface User {
  _id: string;
  name: string;
  phone: string;
  email: string;
  role: string;
}
const Navbar = ({ userData }: NavbarProps) => {
  const { setTheme } = useTheme();
  // console.log(userData);
  return (
    <nav className="p-4 flex items-center justify-between sticky top-0 bg-background z-10">
      {/* left */}
      <SidebarTrigger />
      {/* right */}
      <div className="flex items-center gap-4">
        <h1 className="uppercase font-semibold text-xl">Dashboard</h1>

        {/* theme section */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* user menu section */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent sideOffset={10} className="w-80 p-6 bg-gray-800">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="space-y-2 capitalize ">
                <p className="text-[14px] font-extralight text-muted-foreground flex items-center gap-x-2">
                  Name:{" "}
                  <span className="text-lg font-semibold text-foreground">
                    {userData?.name || "Guest"}
                  </span>
                </p>
                <p className="text-[14px] font-extralight text-muted-foreground flex items-center gap-x-2">
                  Phone:{" "}
                  <span className="text-lg font-semibold text-foreground">
                    {userData?.phone || "---"}
                  </span>
                </p>
                <p className="text-[14px] font-extralight text-muted-foreground flex items-center gap-x-2 lowercase">
                  Email:{" "}
                  <span className="text-lg font-semibold text-foreground">
                    {userData?.email || "---"}
                  </span>
                </p>
                <p className="text-[14px] font-extralight text-muted-foreground flex items-center gap-x-2">
                  Role:{" "}
                  <span className="text-lg font-semibold text-foreground">
                    {userData?.role || "User"}
                  </span>
                </p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={`/dashboard/users/settings`} className="w-full">
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
    </nav>
  );
};

export default Navbar;
