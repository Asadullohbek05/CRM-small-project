import ProductCard from "./ProductCard"
import PropTypes from 'prop-types';
import { useState } from "react";

const ProductsTable = ({ products, deleteProduct, editProduct, search, category, sorting }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const LIMIT = 8;

    let filteredProducts = products;

    if (category !== 'all') {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (search) {
        filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
    }


    if (sorting === 'Increase') {
        filteredProducts.sort((a, b) => a.price - b.price);
    }
    if (sorting === 'Decrease') {
        filteredProducts.sort((a, b) => b.price - a.price);
    }


    const totalItems = filteredProducts.length;
    const paginationItems = Math.ceil(totalItems / LIMIT);
    const displayedProducts = filteredProducts.slice((currentPage - 1) * LIMIT, currentPage * LIMIT);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



    return (
        <div className="border-2 flex-1 mt-3 rounded-lg">
            <div className="h-[600px] relative overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="text-[15px]">№</th>
                            <th className="text-[15px]">Name</th>
                            <th className="text-[15px]">Price</th>
                            <th className="text-[15px]">Quantity</th>
                            <th className="text-[15px]">Category</th>
                            <th className="text-center text-[15px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayedProducts.length !== 0 ? displayedProducts.map((product, i) => (
                            <ProductCard
                                deleteProduct={deleteProduct}
                                editProduct={editProduct}
                                key={product.id}
                                {...product}
                                order={(currentPage - 1) * LIMIT + i + 1}
                            />
                        )) : (
                            <tr className="text-center">
                                <td colSpan={6}><span className="text-[15px]">No product</span></td>
                            </tr>
                        )}
                    </tbody>
                </table>

                <div className="flex justify-evenly items-center absolute bottom-6 w-full">
                    <h1 className="text-xl">Number of all products ({products.length})</h1>

                    {totalItems <= 8 ? '' : <div className="join">
                        <button
                            className="join-item btn"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            «
                        </button>
                        {Array.from({ length: paginationItems }, (_, i) => (
                            <button
                                key={i}
                                className={`join-item btn ${currentPage === i + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(i + 1)}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            className="join-item btn"
                            disabled={currentPage === paginationItems}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            »
                        </button>
                    </div>}
                </div>

            </div>
        </div>
    );
};

ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    deleteProduct: PropTypes.func.isRequired,
    editProduct: PropTypes.func.isRequired,
    search: PropTypes.string,
    category: PropTypes.string,
    sorting: PropTypes.string,
};

export default ProductsTable;
