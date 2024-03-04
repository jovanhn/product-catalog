import Pagination from '@mui/material/Pagination';
import React from "react";

interface PageOptions {
    page: number,
    totalPages: number,
    onPageChange: (newPage: number) => void
}

function PaginationLink({ page, totalPages, onPageChange }: PageOptions) {
    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        onPageChange(value);
    };

    return (
        <Pagination
            page={page}
            count={totalPages}
            onChange={handleChange}
        />
    );
}

export default PaginationLink;