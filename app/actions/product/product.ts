"use server";

export const addProduct = async (prevState: any, formData: FormData) => {
  const title = formData.get("title")?.toString().trim();
  const category = formData.get("category")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const price = Number(formData.get("price"));
  const stock = Number(formData.get("stock"));
  const tagsStr = formData.get("tags")?.toString() || "";
  const tags = tagsStr
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  const weight = formData.get("weight");
  const warrantyInformation = formData
    .get("warrantyInformation")
    ?.toString()
    .trim();
  const shippingInformation = formData
    .get("shippingInformation")
    ?.toString()
    .trim();
  const availableStatus = formData.get("availableStatus")?.toString().trim();
  const productAge = formData.get("productAge")?.toString().trim();
  const returnPolicy = formData.get("returnPolicy")?.toString().trim();
  const minimumOrderQuantity = Number(formData.get("minimumOrderQuantity"));
  const thumbnail = formData.get("thumbnail");
  const images = formData.getAll("images");

  const bodyData = {
    title,
    category,
    description,
    price,
    stock,
    tags,
    weight,
    warrantyInformation,
    shippingInformation,
    availableStatus,
    productAge,
    returnPolicy,
    minimumOrderQuantity,
    thumbnail,
    images,
  };

  try {
    const res = await fetch(
      `https://api-dokan-backend.onrender.com/api/v1/products`,
      {
        method: "POST",
        body: formData,
        // headers: { "Content-Type": "application/json" },
        credentials: "include",
      }
    );

    const product = await res.json();
    console.log(product);
  } catch (error) {
    console.error("Error in product adding:", error);
    return { error: "add product failed" };
  }
};
