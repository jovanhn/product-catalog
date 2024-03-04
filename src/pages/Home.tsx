
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import keycloak from "../auth/Keycloak.tsx";

function Home() {
    const navigate = useNavigate();


    return(
        <>
    <Button variant="contained" onClick={() => navigate('/products')}>
        Show all products
    </Button>
            {!keycloak.authenticated && (
                <Button
                    type="button"
                    className="text-blue-800"
                    onClick={() => keycloak.login()}
                >
                    Login
                </Button>
            )}
            {!!keycloak.authenticated && (
                <Button
                    type="button"
                    className="text-blue-800"
                    onClick={() => keycloak.logout()}
                >
                    Logout ({keycloak.tokenParsed!.preferred_username})
                </Button>
            )}
        </>
        );
}

export default Home;