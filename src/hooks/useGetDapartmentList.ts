import { IGetProductParams, Product } from "../lib/types";
import axios from "axios";
import { useState } from "react";

const BASE_URL = "http://3.88.1.181:8000/products/public/catalog";

export default function useGetProductList() {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState<Product[]>();

  const getProductsList = async ({
    supplier,
    first,
    last,
    search,
  }: IGetProductParams) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${BASE_URL}?supplier=${supplier}${first ? `&first=${first}` : ""}${
          last ? `&last=${last}` : ""
        }${search ? `&search=${search}` : ""}`
      );

      // console.log(res.data);

      setProductsData(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
      return { message: "Something went wrong", status: "error" };
    } finally {
      setLoading(false);
    }
  };

  return { loading, productsData, getProductsList };
}
