import { ProductsProvider } from "./contexts/ProductsContext";
import DepartmentList from "./DepartmentList";

function App() {
  return (
    <ProductsProvider>
      <main>
        <DepartmentList />
      </main>
    </ProductsProvider>
  );
}

export default App;
