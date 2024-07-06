import { useEffect, useState } from "react";
import { Product, TSupplier } from "./lib/types";
import useGetProductList from "./hooks/useGetDapartmentList";

import Nav from "./components/Nav";
import ProductsTable from "./components/ProductsTable";

interface IFetchDataProps {
  supplier: TSupplier;
  search?: string;
}

const DepartmentList = () => {
  const [loading, setLoading] = useState(true);
  const [productsData, setProductsData] = useState<Product[]>();
  const [search, setSearch] = useState("");
  // const [supplier, setSupplier] = useState<TSupplier>("FragranceX");
  const supplier: TSupplier = "FragranceX";

  const { getProductsList } = useGetProductList();

  // console.log(productsData, loading, getLoading);

  useEffect(() => {
    setLoading(true);
    // Fetch data
    const fetchData = async ({ supplier, search }: IFetchDataProps) => {
      const res = await getProductsList({ supplier, search });
      setProductsData(res);
      // console.log(res);
      setLoading(false);
      return res;
    };
    fetchData({ supplier, search });
  }, [search, supplier]);

  return (
    <div className="w-full min-h-screen flex flex-col bg-red-10 bg-[#8C8C8C17] ">
      <div className="    w-full mx-auto px8 py5 flex flex-col  bg-whit">
        {/* nav */}
        <Nav search={search} setSearch={setSearch} />

        <h1 className="max-w-[1440px] mx-auto my-8 px-4 lg:px-8 font-medium text-lg w-full bg-red-20">
          Department List
        </h1>

        {/* table */}
        {loading && (
          <p className="mx-auto my-40 bg-green-20 flex space-x-2">
            {/* <span className="my-auto bg-red-20">Loading...</span> */}
            <span className="loading loadingdots bg-[#0341A7]  my-auto"></span>
          </p>
        )}
        {!loading && <ProductsTable productsData={productsData} />}
      </div>
    </div>
  );
};

export default DepartmentList;
