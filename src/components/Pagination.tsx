import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const pageLimit = 10;

function PaginationLink({ page, totalItems }: { page: number, totalItems: number }) {

    
    return (
        <Pagination
            page={page}
            count={totalItems == 0 ? 1 : Math.ceil(totalItems / pageLimit)}
            renderItem={(item) => (
                <PaginationItem
                    component={Link}
                    to={`/products${item.page == 1 ? '' : `?page=${item.page}&limit=${pageLimit}&skip=${(item.page!-1)*pageLimit}`}`}
                    {...item}
                />
            )}
        />
    );
}

export default PaginationLink;