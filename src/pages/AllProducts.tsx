import { useState } from "react";
import ToggleButtons from "../components/ToggleButton";
import AllProductsGrid from "./AllProductsGrid";
import AllProductsTable from "./AllProductsTable";
import { useEffect } from "react";
import React from "react";
import axiosClient from '../api/Requests';
import { Product } from "../interfaces/entities";

import PaginationLink from '../components/Pagination';
import Box from '@mui/material/Box';
import { Divider } from '@mui/material';

import { useLocation } from 'react-router-dom';

const defaultPageSize = 10;

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
function AllProducts() {
    const [layout, setLayout] = useState<string | null>('table')

    const client = axiosClient();
    const [products, setProducts] = useState<Product[]>([]);
    const [totalItems, setTotalItems] = useState(0);

    const query = useQuery();

    const currentPage: number = parseInt(query.get('page') ? query.get('page')! : '1');
    const skip: number = parseInt(query.get('skip') ? query.get('skip')! : '0');
    const limit: number = parseInt(query.get('limit') ? query.get('limit')! : `${defaultPageSize}`);

    const handleNewLayout = (newLayout: string) => {
        setLayout(newLayout);
    }

    useEffect(() => {
        console.log('page: ' + currentPage);
        console.log('skip: ' + skip);
        console.log('limit: ' + limit);
        client
            .get(`/products?page=${currentPage}&limit=${limit}&skip=${skip}`)
            .then((response) => {
                setProducts(response.data.products);
                setTotalItems(response.data.total);

            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, [currentPage]);

    return (
        <>
            <Box sx={{justifyContent:'flex-end'}}>
                
                <ToggleButtons layout={layout} onLayoutChange={handleNewLayout} />

            </Box>
            <br />
            {layout == 'table' ? <AllProductsTable products={products} /> : <AllProductsGrid products={products} />}
            <Box display="flex"
                justifyContent='center'
                sx={{ m: 2 }}>
                <PaginationLink page={currentPage} totalItems={totalItems} />
            </Box>
        </>
    );
}

export default AllProducts;