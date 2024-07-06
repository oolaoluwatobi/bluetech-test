import Nav from "./components/Nav";
import ProductsTable from "./components/ProductsTable";
import { useProductContext } from "./contexts/ProductsContext";

const DepartmentList = () => {
  const { isLoading } = useProductContext();

  return (
    <div className="w-full min-h-screen flex flex-col bg-red-10 bg-[#8C8C8C17] ">
      <div className="    w-full mx-auto px8 py5 flex flex-col  bg-whit">
        {/* nav */}
        <Nav />

        <h1 className="max-w-[1440px] mx-auto my-8 px-4 lg:px-8 font-medium text-lg w-full bg-red-20">
          Department List
        </h1>

        {/* table */}
        {isLoading && (
          <p className="mx-auto my-40 bg-green-20 flex space-x-2">
            {/* <span className="my-auto bg-red-20">Loading...</span> */}
            <span className="isLoading loading dots bg-[#0341A7]  my-auto"></span>
          </p>
        )}
        {!isLoading && <ProductsTable />}
      </div>
    </div>
  );
};

export default DepartmentList;
