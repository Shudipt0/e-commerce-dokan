"use client";
import { changeProfile } from "@/app/actions/user/userProfile";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";

interface UserProfile {
  userData: {
    _id: string;
    name: string | null;
    email: string | null;
    phone: string | null;
  };
}

const UpdateUserProfile = ({ userData }: UserProfile) => {
  const [state, action, ispending] = useActionState(changeProfile, null);
  return (
    <div className="container mx-auto px-3 md:px-14">
      <h1 className="text-md md:text-xl font-semibold text-muted-foreground">
        Profile Settings{" "}
      </h1>
      <div className="w-full h-fit md:h-[500px] py-10 md:py-0 flex items-center justify-center">
        <form
          action={action}
          className="w-full md:w-[300px] p-6 shadow-2xl rounded-md"
        >
          <FieldSet>
            <FieldGroup>
              <input type="hidden" name="_id" value={userData._id} />

              <Field className="text-[12px] md:text-[14px] font-semibold text-muted-foreground">
                <FieldLabel htmlFor="name">Name :</FieldLabel>
                <Input
                  name="name"
                  id="name"
                  autoComplete="off"
                  defaultValue={userData.name ?? undefined}
                  className="w-full"
                />
              </Field>

              <Field className="text-[12px] md:text-[14px] font-semibold text-muted-foreground">
                <FieldLabel htmlFor="phone">Phone :</FieldLabel>
                <Input
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  defaultValue={userData.phone ?? undefined}
                />
              </Field>

              <Field className="text-[12px] md:text-[14px] font-semibold text-muted-foreground">
                <FieldLabel htmlFor="email">Email :</FieldLabel>
                <Input
                  name="email"
                  id="email"
                  autoComplete="off"
                  defaultValue={userData.email ?? undefined}
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
      </div>
    </div>
  );
};

export default UpdateUserProfile;
