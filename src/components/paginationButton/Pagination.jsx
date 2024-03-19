
const Pagination = ({ currentPage, setCurrentPage, page }) => {
    return (
        <button
            onClick={() => setCurrentPage(page)}
            className={`join-item btn btn-sm hover:bg-rose-300 ${currentPage === page ? 'bg-rose-200 text-red-500' : ''}`}>
            {page}
        </button>
    );
};

export default Pagination;