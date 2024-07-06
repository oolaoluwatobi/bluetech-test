# Blutech Solutions LLC Test (React + TypeScript + Vite)

This readme provides  instructions on how to get this react project working.

After cloning this repository, in your terminal, enter
```js
npm install
```
to install all dependencies.

After the installation, enter
```js
npm run dev
````
to start the react app, the app should run on `http://localhost:5173`

## Overview

### UI Implementation
The UI was implemented according to this [figma design](https://www.figma.com/design/5YoDO1EKuVGMJK77g2CY43/Blutech-solution?node-id=425-359&t=fCesi5WRWJUPge5L-0) 

### Api integration
The backend documentation for the api is this [link](http://3.88.1.181:8000/docs), and the api endpoint is in this [link](http://3.88.1.181:8000/products/public/catalog).

API Context was used, as shown below
```js
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

```


If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
