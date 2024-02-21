import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import ProductDetails
    from "../pages/ProductDetails";


const pages = [
    { name: "Home", path: "/", element: <Home /> },
    { name: "Products", path: "/products/", element: <AllProducts /> }
];

export const allRoutes = [
    ...pages,
    { name: "ProductDetails", path: "/products/:productId", element: <ProductDetails /> }

]

export default pages;