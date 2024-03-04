import { useState } from "react";
import ToggleButtons from "../components/ToggleButtons/ToggleButton";
import ProductsGrid from "../components/ProductsViews/ProductsGrid.tsx";
import AllProductsTable from "../components/ProductsViews/ProductsTable.tsx";


import PaginationLink from '../components/Pagination/Pagination';
import Box from '@mui/material/Box';

import {useAllProducts} from "../services/Products.tsx";

const DEFAULT_PAGE_SIZE: number = 10;

const totalPages = (pageSize: number, totalItems: number) =>{
    return totalItems == 0 ? 1 : Math.ceil(totalItems / pageSize)
}

function Products() {
    const [layout, setLayout] = useState<string | null>('table')
    const [page, setPage] = useState(1);

    const handleNewLayout = (newLayout: string) => {
        setLayout(newLayout);
    }
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    }

    const {
        isLoading,
        isError,
        data

    } = useAllProducts(page, DEFAULT_PAGE_SIZE)



    return (
        <>
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
                <ToggleButtons layout={layout} onLayoutChange={handleNewLayout} />
            </Box>
            {isLoading && 'Loading...'}
            {isError && 'Error!'}
                {!isLoading && !isError && <>
            <br />
            {layout == 'table' ? <AllProductsTable products={data!.content} /> : <ProductsGrid products={data!.content} />}
            <Box display="flex"
                justifyContent='center'
                sx={{ m: 2 }}>
                <PaginationLink
                    onPageChange={handlePageChange}
                    totalPages={totalPages(DEFAULT_PAGE_SIZE, data!.totalElements)}
                    page={page} />
            </Box>
            </>
}
        </>
    );
}

export default Products;