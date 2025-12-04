import axios from "axios";

const api = axios.create({
  // baseURL
  baseURL: "https://api-dokan-backend.onrender.com/api/v1/products",
});

// get all product by pagination

export const fetchProducts = async (pageNumber, limit) => {
  // pagination
  // const limit = 12;
  const skip = (pageNumber - 1) * limit;
  // const res = await api.get(`/products/?limit=${limit}&skip=${skip}`);
  const res = await api.get(`/?limit=${limit}&skip=${skip}`);

  const { data, total } = res?.data;

  return { data, totalPages: Math.ceil(total / limit) };
};
// -----------------------------------------------------------------

// get all products by infinite scroll
export const fetchAllProducts = async ({ pageParam = 1 }) => {
 try { const limit = 8;
  const skip = (pageParam -1 ) * limit
  const res = await api.get(`/?limit=${limit}&skip=${skip}`);
// const { data } = res?.data;
const products = res?.data?.data || [];
// console.log("Fetching with start:", pageParam)
  const hasMore = products.length === limit;
return { data: products ,
  //  nextCursor: hasMore ? pageParam + limit : undefined 
   nextCursor: hasMore ? pageParam + 1 : undefined,
  
  };} catch {
     console.error("Failed to fetch products:", error);
    return {
      data: [],
      nextCursor: undefined,
    };
  }
};

// get all product by Search

export const fetchSearchProducts = async (query) => {
  const res = await api.get(`/search?q=${query}`);
  return res?.data;
};

// get single product
export const fetchProduct = async (id) => {
  const res = await api.get(`/${id}`);
  return res?.data;
};

// get all category name

export const fetchAllCategory = async () => {
  const res = await api.get("/categories");
  return res.data;
};

// get items by category

export const fetchCategoryItem = async (slug) => {
  const res = await api.get(`/category/${slug}`);
  return res.data;
};

// get all flash sale product

export const fetchFlashSaleProducts = async () => {
  const res = await api.get(`/`);
  return res?.data?.data;
};

// get all best salling product

export const fetchBestSale = async () => {
  const res = await api.get(`/?limit=4&skip=10`);
  return res?.data?.data;
};



