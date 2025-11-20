"use client";

import { changeRole } from "@/app/actions/user/changeRole";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { useActionState } from "react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Users = {
  _id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: "_id",
    header: "",
    cell: ({ row }) => <div className="hidden">{row.getValue("_id")}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div className="capitalize">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="">{row.getValue("email") || "---"}</div>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <div className="">{row.getValue("phone") || "---"}</div>,
  },
  {
    accessorKey: "message",
    header: "Message",
    cell: ({ row }) => (
      <div className="">
        {(row.getValue("message") as string).split(" ").slice(0, 3).join(" ") ||
          "---"}
      </div>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => (
      <div className="">{row.getValue("created_at") || "---"}</div>
    ),
  },

  // action dropdown
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const [state, action, ispending] = useActionState(changeRole, null);
      // const [role, setRole] = useState(user.role);
      const id = row.getValue("_id") as string;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() =>
                (window.location.href = `/dashboard/inbox/${row.getValue(
                  "_id"
                )}`)
              }
              className="text-green-500"
            >
              View Contact
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
