import PropTypes from 'prop-types';

const ProductsHeader = ({ search, setSearch, category, setCategory, sorting, setSorting }) => {
    return (
        <div className="md:border-2 rounded-lg">
            <div className="navbar h-auto rounded-lg bg-base-100 flex flex-col md:flex-row">
                <div className="flex-1 mb-2 md:mb-0">
                    <a className="btn btn-ghost text-xl">CRM</a>
                </div>
                <div className="flex-none w-[95%] md:w-auto flex flex-col md:flex-row items-center">
                    <select
                        className="select select-bordered w-full md:w-auto mb-2 md:mb-0 md:me-3"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Bakery">Bakery</option>
                    </select>
                    <div className="form-control w-full md:w-auto mb-2 md:mb-0 md:me-2">
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value.trim().toLowerCase())}
                            type="text"
                            placeholder="Search product"
                            className="input input-bordered w-full md:w-auto"
                        />
                    </div>
                    <select
                        className="select select-bordered w-full md:w-[150px]"
                        value={sorting}
                        onChange={(e) => setSorting(e.target.value)}
                    >
                        <option value="Increase">Increase</option>
                        <option value="Decrease">Decrease</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

ProductsHeader.propTypes = {
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
    sorting: PropTypes.string.isRequired,
    setSorting: PropTypes.func.isRequired,
};

export default ProductsHeader;
