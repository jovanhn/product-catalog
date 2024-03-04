import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products.tsx";
import Error from "../pages/Error.tsx";

const pages = [
    { name: "Home", path: "/", element: <Home /> },
    { name: "Products", path: "/products/", element: <Products /> }
];

export const allRoutes = [
    ...pages,
    { name: "ProductDetails", path: "/products/:productId", element: <ProductDetails /> },
    {name:"Error", path:"*" , element:<Error/> }

]

export default pages;