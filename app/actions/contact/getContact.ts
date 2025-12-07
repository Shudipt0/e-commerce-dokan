import { cookies } from "next/headers";

// get all contact
export async function fetchAllContact() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  //   console.log(data);
  return data.contacts;
}

// get single contact
export async function fetchSingleContact(id: string) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/contact/${id}`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();
  //   console.log(data);
  return data.contact;
}
