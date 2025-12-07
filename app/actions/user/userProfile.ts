"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const changeProfile = async (prevState: any, formData: FormData) => {
  const id = formData.get("_id") as string;
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;

  const cookieStore = await cookies();
  const adminToken = cookieStore.get("token")?.value;
  const userId = cookieStore.get("userId")?.value;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/profile/${userId}`,
    {
      method: "PUT",
      body: JSON.stringify({ name, phone, email }),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${adminToken}`,
      },
    }
  );
  const user = await res.json();

  if (!res.ok) {
    console.error("API Error:", user);
    return { error: user.message || "Failed to add user" };
  }
  revalidatePath("/dashboard/users/settings");
  // redirect("/dashboard");
  // console.log(user);
};
