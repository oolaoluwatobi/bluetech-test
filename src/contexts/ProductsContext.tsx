import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
// import { useQuery } from 'react-query';
import { IGetProductParams, Product, TSupplier } from "../lib/types";

const BASE_URL = "http://3.88.1.181:8000/products/public/catalog";

interface IFetchDataProps {
  supplier: TSupplier;
  search?: string;
}

interface IProductContext {
  isLoading: boolean;
  products: Product[];
  search: string;
  setSearch: (search: string) => void;
  setSupplier: (supplier: TSupplier) => void;
}

interface IProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<IProductContext>({
  isLoading: true,
  products: [],
  search: "",
  setSearch: () => {},
  setSupplier: () => {},
});

export const ProductsProvider = ({ children }: IProductProviderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [supplier, setSupplier] = useState<TSupplier>("FragranceX");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async ({
    supplier,
    first,
    last,
    search,
  }: IGetProductParams) => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `${BASE_URL}?supplier=${supplier}${first ? `&first=${first}` : ""}${
          last ? `&last=${last}` : ""
        }${search ? `&search=${search}` : ""}`
      );

      // console.log(res.data, "res.data___context");
      return res.data;
    } catch (error) {
      console.error(error);
      return { message: "Something went wrong", status: "error" };
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    // Fetch data
    const fetchData = async ({ supplier, search }: IFetchDataProps) => {
      const res = await getProducts({ supplier, search });
      setProducts(res);
      // console.log(res);
      setIsLoading(false);
      return res;
    };
    fetchData({ supplier, search });
  }, [search, supplier]);

  // console.log(products, "products___context");

  return (
    <ProductContext.Provider
      value={{ isLoading, search, setSearch, setSupplier, products }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => useContext(ProductContext);
