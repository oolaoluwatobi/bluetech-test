import { useState } from "react";
import { Product } from "../lib/types";

interface ProductsTableProps {
  productsData?: Product[];
}

const ProductsTable = ({ productsData }: ProductsTableProps) => {
  const [selected, setSelected] = useState<number[]>([]);
  // console.log(productsData, "products___table");
  return (
    <div className="overflow-x-auto w-full ">
      <table className="table w-[1440px] px-4 lg:px-8  mx-auto bg-whit bg-green-30 rounded-[16px] space-y4 ">
        {/* head */}
        <thead className="bg-[#F0F4FE] bg-red-30 mb10 rounded-lg">
          <tr>
            <th>
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  color="#0341A7"
                  checked={selected.length === productsData?.length}
                  onChange={() => {
                    const allSelected =
                      productsData?.length === selected.length;
                    if (allSelected) {
                      setSelected([]);
                    } else {
                      const allIndexes = Array.from(
                        Array(productsData?.length).keys()
                      );
                      setSelected(allIndexes);
                    }
                  }}
                />
              </label>
            </th>
            <th>S/N </th>
            <th>Image</th>
            <th>SKU</th>
            <th>Name</th>
            <th>Title</th>
            <th>Description</th>
            <th>Brand</th>
            <th>Cost Price</th>
            <th>Quantity</th>
            <th>Size</th>
            <th></th>
          </tr>
        </thead>

        <tbody className="h-2.5 bg-[#8C8C8C17]"></tbody>
        <tbody>
          {/* row 1 */}
          {productsData?.map((product, index) => (
            <tr
              key={index}
              className="bg-yellow-20 bg-white cursor-pointer hover:bg-[#F0F4FE] transition-all ease-in-out duration-300"
              onClick={() => {
                setSelected((prev) => {
                  if (prev.includes(index)) {
                    return prev.filter((item) => item !== index);
                  }
                  return [...prev, index];
                });
              }}
            >
              <th>
                <label>
                  <input
                    type="checkbox"
                    checked={selected.includes(index)}
                    onChange={() => {
                      setSelected((prev) => {
                        if (prev.includes(index)) {
                          return prev.filter((item) => item !== index);
                        }
                        return [...prev, index];
                      });
                    }}
                    className="checkbox checkbox-primar "
                    color="#0341A7"
                  />
                </label>
              </th>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={product.Image_1}
                        alt="Product"
                        className="object-cover w-full h-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{product.SKU}</td>
              <td>
                <div className="">{product.Name}</div>
              </td>
              <td>{product.Title}</td>
              <td className="min-w-fit">{product.Description}</td>
              <td>{product.Brand}</td>
              <td>{product["Cost Price"]}</td>
              <td>{product.Quantity}</td>
              <td>{product.size}</td>
            </tr>
          ))}
          {productsData?.length === 0 && (
            <tr>
              <td colSpan={12} className="text-center">
                No data found
              </td>
            </tr>
          )}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default ProductsTable;
