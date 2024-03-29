import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Products from "../pages/Products.tsx";
import Error from "../pages/Error.tsx";
import ProductForm from "../pages/ProductForm.tsx";
import PrivateRoute from "../auth/PrivateRoute.tsx";
import QR_Code from "../pages/QR_Code.tsx";

const pages = [
    { name: "Home", path: "/", element: <Home /> },
    { name: "Products", path: "/products/", element: <Products /> },
    { name: "QRCOde", path: "/qr", element: <QR_Code /> }
];

export const allRoutes = [
    ...pages,
    { name: "ProductDetails", path: "/products/:productId", element: <ProductDetails /> },
    {name:"Error", path:"*" , element:<Error/> },
    {name: "ProductForm", path: "/products/newProduct", element: <PrivateRoute><ProductForm/></PrivateRoute>}

]

export default pages;