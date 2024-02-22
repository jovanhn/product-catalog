import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";


const pages = [
    { name: "Home", path: "/", element: <Home /> },
    { name: "Products", path: "/products/", element: <AllProducts /> }
];

export const allRoutes = [
    ...pages,
    { name: "ProductDetails", path: "/products/:productId", element: <ProductDetails /> },

]

export default pages;