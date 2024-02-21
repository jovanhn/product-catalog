
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return( 
    <Button variant="contained" onClick={() => navigate('/products')}>
        Show all products
    </Button>
        );
}

export default Home;