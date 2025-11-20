"use server";

import { revalidatePath } from "next/cache";

export const changeProfile = async (prevState: any, formData: FormData) => {
  const id = formData.get("_id") as string;

  const res = await fetch(
    `https://api-dokan-backend.onrender.com/api/v1/users/profile/${id}`,
    {
      method: "PUT",
      body: formData,
      credentials: "include",
    }
  );
  const user = await res.json();
  revalidatePath("/dashboard/products");
  // console.log(user);
  return user;
};
