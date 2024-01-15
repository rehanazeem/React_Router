import {
  RouterProvider,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductsDetail from "./pages/ProductsDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/products" element={<ProductsPage/>}/>
//   </Route>
// )

const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductsPage /> },
      { path: "products/:productId", element: <ProductsDetail /> },
    ],
  },
]);

// const route = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={route} />;
}

export default App;
