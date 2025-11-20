"use client";
import { changeProfile } from "@/app/actions/user/userProfile";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

const UpdateProfile = (userData: any) => {
  const [state, action, ispending] = useActionState(changeProfile, null);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full flex items-center gap-2">
        <IoSettingsOutline />
        Settings
      </DropdownMenuTrigger>

      <DropdownMenuContent side="left" sideOffset={12} className="w-80 h-auto">
        <DropdownMenuLabel>Profile Settings</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {/* ⛔ Prevent dropdown from closing when clicking inside form */}
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="p-0">
          <form action={action} className="w-full p-2">
            <FieldSet>
              <FieldGroup>
                <Field className="text-[14px] font-extralight text-muted-foreground">
                  <FieldLabel htmlFor="name">Name :</FieldLabel>
                  <Input
                    name="name"
                    id="name"
                    autoComplete="off"
                    defaultValue={userData?.name}
                    className="w-full"
                  />
                </Field>

                <Field className="text-[14px] font-extralight text-muted-foreground">
                  <FieldLabel htmlFor="phone">Phone :</FieldLabel>
                  <Input
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    defaultValue={userData?.phone}
                  />
                </Field>

                <Field className="text-[14px] font-extralight text-muted-foreground">
                  <FieldLabel htmlFor="email">Email :</FieldLabel>
                  <Input
                    name="email"
                    id="email"
                    autoComplete="off"
                    defaultValue={userData?.email}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <div className="pt-3 md:pt-5 flex justify-end">
              <Button type="submit" disabled={ispending} variant="outline">
                Update Profile
              </Button>
            </div>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UpdateProfile;
