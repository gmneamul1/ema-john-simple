import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./component/About/About";
// import Shop from "./component/Header/Shop/Shop";
import Inventory from "./component/Inventory/Inventory";
import Orders from "./component/Orders/Orders";
import Shop from "./component/Shop/Shop";
import Main from "./layouts/Main";
import { ProductsAndCartLoader } from "./loaders/ProductsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('products.json'),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: ProductsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
    {
      path: "/about",
      element: <About></About>,
    },
  ]);
  return (
    <div className="app">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
