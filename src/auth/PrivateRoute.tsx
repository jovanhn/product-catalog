import { useKeycloak } from "@react-keycloak/web";


const PrivateRoute = ({ children } : {children : any }) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated;

    return isLoggedIn ? children : 'Login required';
};

export default PrivateRoute;